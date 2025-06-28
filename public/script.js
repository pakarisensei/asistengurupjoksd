document.addEventListener('DOMContentLoaded', () => {

    // --- Mengambil Elemen dari HTML ---
    const domElements = {
        geminiWarmupBtn: document.getElementById('gemini-warmup-btn'),
        outputModul: document.getElementById('output-modul'),
        placeholder: document.getElementById('placeholder'),
        geminiModal: document.getElementById('gemini-modal'),
        geminiModalTitle: document.getElementById('gemini-modal-title'),
        geminiModalContent: document.getElementById('gemini-modal-content'),
        geminiModalClose: document.getElementById('gemini-modal-close'),
    };
    
    // --- Fungsi untuk Mengambil Data dari Formulir ---
    function getFormContext() {
        return {
            fase: document.getElementById('fase').value,
            kelas: document.getElementById('kelas').value,
            materiJudul: document.getElementById('materi-judul').value,
            materiSpesifik: document.getElementById('materi-spesifik').value,
        };
    }

    // --- Fungsi untuk Menampilkan & Menyembunyikan Modal ---
    function showModal(title, content) {
        domElements.placeholder.classList.add('hidden');
        domElements.geminiModalTitle.innerText = title;
        // Mengubah format dasar Markdown ke HTML untuk ditampilkan
        let formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>') // **Teks** menjadi <h3>
            .replace(/\* (.*?)\n/g, '<li>$1</li>')     // * Teks menjadi <li>
            .replace(/\n/g, '<br>');                  // Baris baru menjadi <br>
            
        domElements.geminiModalContent.innerHTML = formattedContent;
        domElements.geminiModal.classList.remove('hidden');
    }

    function hideModal() {
        domElements.geminiModal.classList.add('hidden');
    }

    // --- Fungsi untuk Memanggil Google Gemini API ---
    async function callGemini(prompt) {
        // =======================================================================
        // API KEY ANDA SUDAH DIPERBARUI DI SINI
        // =======================================================================
        const apiKey = "AIzaSyBc1qyPnX898PuQrqzpQhwmUJ-h9b3t6lM";
        // =======================================================================

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{
                parts: [{ text: prompt }]
            }]
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data.error?.message || `Error ${response.status}`;
                console.error("Google API Error:", data);
                throw new Error(`Google API Error: ${errorMessage}`);
            }

            return data.candidates[0]?.content?.parts[0]?.text || "Tidak ada konten yang diterima.";
        
        } catch (error) {
            console.error("Fetch Error:", error);
            return `Terjadi kesalahan saat menghubungi asisten AI: ${error.message}.`;
        }
    }

    // --- Menambahkan Event Listener ke Tombol ---
    domElements.geminiWarmupBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        
        showModal("Ide Pemanasan Kreatif", '<p class="text-center">Meminta ide dari Asisten... 🧠</p>');
        
        const prompt = `Sebagai seorang ahli pedagogi PJOK untuk anak SD, berikan saya 3 ide permainan pemanasan yang kreatif, menyenangkan, dan relevan untuk materi "${materiJudul}" dengan fokus pada "${materiSpesifik}" untuk siswa kelas ${kelas} (Fase ${fase}). Untuk setiap ide, gunakan format berikut: **Nama Permainan**, * Cara Bermain (langkah-langkah jelas), dan * Hubungan dengan Materi.`;
        
        const result = await callGemini(prompt);
        
        showModal("Ide Pemanasan Kreatif", result);
    });
    
    domElements.geminiModalClose.addEventListener('click', hideModal);
});
