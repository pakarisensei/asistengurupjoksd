// Menggunakan fetch yang tersedia di environment Node.js modern
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
    // 1. Keamanan: Hanya izinkan request POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    // 2. Ambil API key dari environment variables (JANGAN DI-HARDCODE)
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not configured.' }),
        };
    }

    try {
        // 3. Ambil prompt dari body request yang dikirim dari script.js
        const { prompt } = JSON.parse(event.body);
        if (!prompt) {
             return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Prompt is required.' }),
            };
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

        // 4. Siapkan payload untuk dikirim ke Google AI
        const payload = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        };

        // 5. Lakukan panggilan API ke Google dari sisi server
        const apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error('Google API Error:', errorText);
            return {
                statusCode: apiResponse.status,
                body: JSON.stringify({ error: `Google API Error: ${apiResponse.statusText}` }),
            };
        }

        const data = await apiResponse.json();
        
        // 6. Ekstrak teks dari respons dan kirim kembali ke klien
        const responseText = data.candidates[0]?.content?.parts[0]?.text || "Tidak ada respons dari AI.";

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: responseText }),
        };

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An internal server error occurred.' }),
        };
    }
};