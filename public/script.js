// --- DOM Elements ---
const domElements = {
    mainView: document.getElementById('main-view'),
    generateBtn: document.getElementById('generate-btn'),
    outputContainer: document.getElementById('output-modul'),
    placeholder: document.getElementById('placeholder'),
    actionButtons: document.getElementById('action-buttons'),
    copyBtn: document.getElementById('copy-btn'),
    backBtn: document.getElementById('back-btn'),
    faseSelect: document.getElementById('fase'),
    kelasSelect: document.getElementById('kelas'),
    materiPembelajaranSelect: document.getElementById('materi-pembelajaran'),
    elemenCpSelect: document.getElementById('elemen-cp'),
    geminiFeaturesSection: document.getElementById('gemini-features'),
    geminiModal: document.getElementById('gemini-modal'),
    geminiModalTitle: document.getElementById('gemini-modal-title'),
    geminiModalContent: document.getElementById('gemini-modal-content'),
    geminiModalClose: document.getElementById('gemini-modal-close'),
    geminiModalCopy: document.getElementById('gemini-modal-copy'),
    geminiWarmupBtn: document.getElementById('gemini-warmup-btn'),
    geminiMateriBtn: document.getElementById('gemini-materi-btn'),
    geminiQuizBtn: document.getElementById('gemini-quiz-btn'),
    geminiCodingBtn: document.getElementById('gemini-coding-btn')
};

// --- DATABASE (Updated) ---
const capaianPerElemen = { 'Terampil Bergerak': { A: "Peserta didik mempraktikkan keterampilan gerak fundamental dan menerapkannya dalam berbagai situasi gerak yang berbeda. Peserta didik mengeksplorasi berbagai cara menggerakkan tubuh. Peserta didik memanipulasi objek dengan bagian tubuh dan dalam ruang yang berbeda, serta menyimpulkan efektivitasnya.", B: "Peserta didik menghaluskan keterampilan gerak fundamental dan menerapkannya dalam situasi gerak yang baru. Peserta didik menerapkan dan menyesuaikan strategi gerak untuk mendapatkan capaian keterampilan gerak. Peserta didik memeragakan konsep gerak yang dapat diterapkan dalam rangkaian gerak.", C: "Peserta didik menyesuaikan dan memodifikasi keterampilan gerak melintasi berbagai situasi gerak. Peserta didik mentransfer strategi gerak yang sudah dikuasai ke dalam berbagai situasi gerak yang berbeda. Peserta didik menginvestigasi berbagai konsep gerak yang dapat diterapkan untuk meningkatkan capaian keterampilan gerak." }, 'Belajar melalui Gerak': { A: "Peserta didik mentaati dan menerapkan peraturan untuk mengembangkan fair play di dalam berbagai aktivitas jasmani. Peserta didik menerapkan strategi kolaborasi ketika berpartisipasi dalam aktivitas jasmani.", B: "Peserta didik menerapkan strategi gerak sederhana dan memecahkan masalah gerak. Peserta didik menyusun bersama dan menerapkan peraturan untuk mengembangkan fair play ketika berpartisipasi atau merancang aktivitas jasmani. Peserta didik mempertunjukkan berbagai peran dengan cara yang terhormat untuk mendapatkan keberhasilan capaian di dalam aktivitas gerak kelompok atau tim.", C: "Peserta didik memprediksi dan menguji efektivitas penerapan strategi gerak dalam berbagai situasi gerak. Peserta didik merancang dan menguji peraturan alternatif dan modifikasi permainan untuk mendukung fair play dan partisipasi inklusif. Peserta didik berpartisipasi secara positif dalam kelompok atau tim dengan memberi kontribusi pada aktivitas kelompok, mendorong orang lain dan menegosiasikan peran dan tanggung jawab." }, 'Bergaya Hidup Aktif': { A: "Peserta didik berpartisipasi di dalam berbagai aktivitas jasmani dan mengeksplorasi manfaatnya.", B: "Peserta didik berpartisipasi dalam berbagai aktivitas jasmani dan mengenali faktor-faktor yang menyebabkan aktivitas jasmani menyenangkan.", C: "Peserta didik berpartisipasi dalam aktivitas jasmani untuk menggambarkan pengaruh aktivitas jasmani yang teratur terhadap kesehatan. Peserta didik berpartisipasi dalam aktivitas jasmani di luar ruang dan/atau lingkungan alam dan menggambarkan faktor-faktor yang mempengaruhi partisipasi, baik secara pribadi maupun kelompok. Peserta didik mengeksplorasi rekomendasi aktivitas jasmani serta pencegahan perilaku sedenter dan membahas strategi pencapaiannya." }, 'Memilih Hidup yang Menyehatkan': { A: "Peserta didik mengenali gaya hidup aktif dan sehat, manfaat komponen makanan bergizi seimbang dan informasi gizi pada produk makanan yang berdampak pada kesehatan, situasi dan potensi yang berisiko terhadap kesehatan dan keselamatan dan strategi mencari bantuan kepada orang dewasa terpercaya.", B: "Peserta didik mengenali risiko kesehatan akibat gaya hidup dan berbagai aktivitas jasmani untuk pencegahannya, mengeksplorasi pola makan sehat dan bergizi seimbang sesuai rekomendasi kesehatan untuk menunjang aktivitas sehari-hari, serta mempraktikkan penanganan cedera ringan sesuai pemahaman tentang prinsip pertolongan pertama.", C: "Peserta didik mengidentifikasi risiko kesehatan akibat gaya hidup dan pencegahan melalui aktivitas jasmani berdasarkan rekomendasi otoritas kesehatan, memilih makanan sehat untuk menunjang aktivitas jasmani berdasarkan informasi kandungan gizi pada makanan, dan mempraktikkan penanganan cedera sedang sesuai pemahaman tentang prinsip pertolongan pertama." } };
const materiByKelas = {
    '1': { 'lokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-1': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-1': { text: 'Aktivitas Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-1': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-1': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-1': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'hidup-sehat-1': { text: 'Mengenal Gaya Hidup Sehat', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} }, 
    '2': { 'lokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-2': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-2': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-2': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-2': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-2': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'fair-play-2': { text: 'Menerapkan Fair Play', elemenTerkait: 'Belajar melalui Gerak'} }, 
    '3': { 'variasi-lokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-nonlokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-manipulatif-3': { text: 'Aktivitas Variasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-3': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-3': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-3': { text: 'Aktivitas Kebugaran untuk Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'makanan-bergizi-3': { text: 'Memilih Makanan Bergizi', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} }, 
    '4': { 'kombinasi-lokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-nonlokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Non-Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-manipulatif-4': { text: 'Aktivitas Kombinasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-4': { text: 'Aktivitas Senam Lantai', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-4': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'cedera-ringan-4': { text: 'Penanganan Cedera Ringan (P3K)', elemenTerkait: 'Memilih Hidup yang Menyehatkan'}, 'strategi-sederhana-4': { text: 'Strategi Gerak Sederhana', elemenTerkait: 'Belajar melalui Gerak' } }, 
    '5': { 
        'kesadaran-ruang-5': { text: 'Kesadaran Ruang', elemenTerkait: 'Terampil Bergerak' },
        'usaha-5': { text: 'Usaha (Konsep Waktu, Kekuatan, dan Gerak Mengalir)', elemenTerkait: 'Terampil Bergerak' },
        'hubungan-5': { text: 'Hubungan (Gabungan Konsep Gerak)', elemenTerkait: 'Terampil Bergerak' },
        'berpindah-5': { text: 'Berpindah', elemenTerkait: 'Terampil Bergerak' },
        'mengejar-lari-hindar-5': { text: 'Mengejar, Berlari, Menghindar', elemenTerkait: 'Terampil Bergerak' },
        'tekuk-regang-gulung-putar-5': { text: 'Menekuk, Meregang, Menggulung, dan Memutar', elemenTerkait: 'Terampil Bergerak' },
        'lompat-darat-5': { text: 'Melompat dan Mendarat', elemenTerkait: 'Terampil Bergerak' },
        'keseimbangan-5': { text: 'Keseimbangan', elemenTerkait: 'Terampil Bergerak' },
        'alih-berat-guling-5': { text: 'Mengalihkan Berat dan Berguling', elemenTerkait: 'Terampil Bergerak' },
        'tendang-voli-5': { text: 'Menendang dan Memvoli', elemenTerkait: 'Terampil Bergerak' },
        'lempar-tangkap-5': { text: 'Melempar dan Menangkap', elemenTerkait: 'Terampil Bergerak' },
        'oper-giring-5': { text: 'Mengoper dan Menggiring Bola', elemenTerkait: 'Terampil Bergerak' },
        'raket-dayung-5': { text: 'Keterampilan Memukul Menggunakan Raket dan Dayung', elemenTerkait: 'Terampil Bergerak' },
        'stik-panjang-5': { text: 'Keterampilan Memukul Menggunakan Stik/Pemukul Bergagang Panjang', elemenTerkait: 'Terampil Bergerak' },
        'kebugaran-kesehatan-5': { text: 'Pembelajaran Kebugaran Jasmani, Aktivitas Fisik, dan Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' },
        'irama-5': { text: 'Pembelajaran Gerak Berirama', elemenTerkait: 'Terampil Bergerak' },
        'senam-5': { text: 'Pembelajaran Olahraga Senam', elemenTerkait: 'Terampil Bergerak' },
        'permainan-5': { text: 'Pembelajaran dengan Permainan', elemenTerkait: 'Belajar melalui Gerak' },
        'integrasi-kurikulum-5': { text: 'Mengintegrasikan Pendekatan Tema Keterampilan di Seluruh Kurikulum', elemenTerkait: 'Belajar melalui Gerak' },
        'dukungan-program-5': { text: 'Membangun Dukungan untuk Program Pendidikan Jasmani', elemenTerkait: 'Belajar melalui Gerak' },
        'masa-depan-5': { text: 'Pendidikan Jasmani untuk Masa Depan Anak', elemenTerkait: 'Bergaya Hidup Aktif' }
    }, 
    '6': { 
        'invasi-6': { text: 'Aktivitas Permainan Invasi', elemenTerkait: 'Terampil Bergerak' },
        'net-6': { text: 'Aktivitas Permainan Net', elemenTerkait: 'Terampil Bergerak' },
        'lapangan-6': { text: 'Aktivitas Permainan Lapangan', elemenTerkait: 'Terampil Bergerak' },
        'beladiri-6': { text: 'Aktivitas Bela Diri Pencak Silat', elemenTerkait: 'Terampil Bergerak' },
        'senam-dominan-6': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak' },
        'irama-6': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak' },
        'air-6': { text: 'Aktivitas Permainan dan Olahraga di Air', elemenTerkait: 'Terampil Bergerak' },
        'kebugaran-6': { text: 'Aktivitas Kebugaran untuk Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' },
        'bahaya-narkotika-6': { text: 'Mencegah Bahaya Narkotika, Zat-Zat Aditif, dan Obat Berbahaya Lainnya', elemenTerkait: 'Memilih Hidup yang Menyehatkan' }
    }
};
const modelPembelajaranDatabase = { 
    'Direct Instruction': { pendekatan: "Berpusat pada Guru (Teacher-Centered)", metode: ["Demonstrasi", "Latihan Terbimbing (Drill)", "Ceramah", "Imitasi"], deskripsi: "penjelasan dan peragaan langsung dari guru, diikuti oleh latihan yang terstruktur oleh siswa." }, 
    'Tactical Games Model': { pendekatan: "Berpusat pada Siswa (Student-Centered) dan Konstruktivis", metode: ["Permainan Taktis", "Diskusi Terbimbing", "Tanya Jawab", "Pemecahan Masalah"], deskripsi: "pengembangan pemahaman taktis dan pengambilan keputusan dalam konteks permainan." }, 
    'Sport Education Model': { pendekatan: "Berpusat pada Siswa (Student-Centered) dan Pembelajaran Kontekstual", metode: ["Musim Kompetisi", "Peran dalam Tim (Kapten, Wasit, Jurnalis)", "Festival Olahraga"], deskripsi: "pengalaman otentik dalam sebuah musim olahraga, di mana siswa belajar menjadi atlet yang kompeten, terpelajar, dan antusias." },
    'Cooperative Learning': { pendekatan: "Pembelajaran Kolaboratif dan Sosial", metode: ["Kerja Kelompok", "Jigsaw", "Think-Pair-Share", "Turnamen Tim"], deskripsi: "kerjasama siswa dalam kelompok kecil untuk mencapai tujuan belajar bersama." },
    'Project-Based Learning (PjBL)': { pendekatan: "Pembelajaran Berbasis Proyek dan Konstruktivis", metode: ["Proyek", "Penemuan (Discovery)", "Diskusi Kelompok", "Presentasi"], deskripsi: "pengorganisasian pembelajaran di sekitar proyek yang kompleks dan relevan bagi siswa." }, 
    'Problem-Based Learning (PBL)': { pendekatan: "Pembelajaran Berbasis Masalah dan Kontekstual", metode: ["Studi Kasus", "Pemecahan Masalah", "Diskusi", "Riset Mandiri"], deskripsi: "penyajian masalah nyata yang mendorong siswa untuk belajar secara mandiri." }, 
    'Inquiry Learning': { pendekatan: "Pembelajaran Penemuan (Inquiry-Based) dan Berpusat pada Siswa", metode: ["Eksplorasi", "Eksperimen", "Tanya Jawab", "Penemuan Terbimbing"], deskripsi: "siswa didorong untuk mengajukan pertanyaan dan menyelidiki untuk menemukan jawaban." },
    'Discovery Learning': { pendekatan: "Konstruktivis dan Berpusat pada Siswa", metode: ["Eksplorasi Terbuka", "Pemecahan Masalah", "Eksperimen", "Generalisasi Konsep"], deskripsi: "siswa menemukan konsep atau prinsip melalui eksplorasi mandiri dan pemecahan masalah yang disajikan oleh guru." },
    'Experiential Learning': { pendekatan: "Belajar melalui Pengalaman Langsung (Learning by Doing)", metode: ["Simulasi", "Role Playing", "Refleksi Pengalaman", "Aktivitas Outdoor"], deskripsi: "penekanan pada pengalaman konkret sebagai dasar observasi dan refleksi, di mana siswa belajar dari konsekuensi tindakan mereka." },
    'Blended Learning': { pendekatan: "Integrasi Teknologi dan Pembelajaran Tatap Muka", metode: ["Kelas Terbalik (Flipped Classroom)", "Rotasi Stasiun Belajar", "Proyek Online", "Diskusi Forum"], deskripsi: "kombinasi antara pembelajaran tatap muka di kelas dengan pembelajaran online yang memberikan fleksibilitas." }
};
const deepLearningFrameworkDatabase = { A: { lingkungan: "Menciptakan lingkungan belajar yang aman, positif, dan menyenangkan, di mana siswa merasa nyaman untuk bergerak dan bereksplorasi tanpa takut membuat kesalahan.", kemitraan: "Membangun hubungan yang hangat antara guru dan siswa, serta melibatkan orang tua melalui komunikasi sederhana tentang aktivitas anak di sekolah.", teknologi: "Memanfaatkan teknologi digital sederhana seperti pemutar musik untuk mengiringi gerak berirama atau menampilkan video pendek sebagai contoh gerakan yang menarik." }, B: { lingkungan: "Mendesain lingkungan belajar yang mendorong kerja sama dan interaksi positif antar siswa dalam kelompok-kelompok kecil.", kemitraan: "Mengembangkan kemitraan antar siswa melalui tugas-tugas berpasangan atau kelompok, di mana mereka dapat saling memberikan umpan balik sederhana.", teknologi: "Menggunakan video tutorial sebagai referensi untuk variasi gerakan dan stopwatch digital untuk permainan yang melibatkan waktu." }, C: { lingkungan: "Menyediakan lingkungan belajar yang menantang namun tetap suportif, memungkinkan siswa untuk menerapkan taktik dan strategi dalam situasi permainan yang kompetitif secara sehat.", kemitraan: "Mendorong kemitraan yang lebih matang di mana siswa dapat mengambil peran sebagai pemimpin, wasit, atau pencatat skor dalam tim mereka (tutor sebaya).", teknologi: "Memperkenalkan penggunaan aplikasi sederhana untuk mencatat skor atau menggambar strategi permainan sebagai pengayaan pembelajaran." } };
const kegiatanIntiDatabase = { 'lokomotor-1': { 'Direct Instruction': [["Guru memberikan contoh {materi_spesifik} dengan pandangan ke depan.", "Siswa secara klasikal menirukan {materi_spesifik} di tempat, kemudian maju dan mundur.", "Siswa berlatih {materi_spesifik} mengikuti garis lurus atau tali yang dibentangkan di lantai."], ["Guru mendemonstrasikan variasi {materi_spesifik} dengan tempo yang berbeda.", "Siswa bermain 'Lampu Merah, Lampu Hijau' menggunakan {materi_spesifik}.", "Siswa mencoba melakukan {materi_spesifik} sambil mengubah arah sesuai dengan posisi cone."]], 'Tactical Games Model': [["Siswa bermain permainan yang membutuhkan {materi_spesifik}, contoh 'Jelajahi Pulau Harta Karun'.", "Diskusi singkat: 'Bagaimana cara melakukan {materi_spesifik} agar kita tidak tertangkap monster?'", "Siswa mengulangi permainan dengan menerapkan strategi {materi_spesifik} yang telah didiskusikan."]] }, default: { 'Direct Instruction': [["Guru mendemonstrasikan keterampilan dasar {materi_spesifik} dengan benar.", "Siswa meniru gerakan {materi_spesifik} yang dicontohkan guru secara klasikal.", "Guru memberikan umpan balik dan koreksi individual selama siswa berlatih."],], 'Tactical Games Model': [["Siswa bermain permainan sederhana yang dimodifikasi terkait {materi_spesifik}.", "Guru memfasilitasi diskusi singkat tentang taktik atau cara bermain yang efektif menggunakan {materi_spesifik}.", "Siswa kembali bermain dengan menerapkan pemahaman baru terkait {materi_spesifik}."]], 'Cooperative Learning': [["Siswa dibagi dalam kelompok-kelompok kecil.", "Setiap kelompok diberi tugas atau tantangan gerak yang melibatkan {materi_spesifik} untuk diselesaikan bersama.", "Guru menilai proses kerjasama dan komunikasi dalam kelompok saat mempraktikkan {materi_spesifik}."]], 'Project-Based Learning (PjBL)': [["Guru memberikan sebuah proyek sederhana terkait {materi}, contohnya: 'Buatlah permainan baru menggunakan {materi_spesifik}'.", "Siswa secara berkelompok merencanakan dan mempersiapkan proyek mereka.", "Siswa melaksanakan dan mempresentasikan hasil proyek mereka di akhir sesi."]], 'Problem-Based Learning (PBL)': [["Guru menyajikan sebuah masalah atau tantangan gerak terkait {materi_spesifik}.", "Siswa secara berkelompok berdiskusi untuk mencari solusi dari masalah tersebut.", "Setiap kelompok mendemonstrasikan solusi yang mereka temukan."]], 'Inquiry Learning': [["Guru mengajukan pertanyaan yang memancing rasa ingin tahu siswa tentang {materi_spesifik}.", "Siswa didorong untuk bereksplorasi dan menemukan sendiri berbagai cara melakukan {materi_spesifik}.", "Siswa berbagi penemuan mereka dengan teman-temannya."]] } };
const contentDatabase = { default: { pemahaman: "Dengan mampu melakukan gerak dasar secara benar, aku bisa bermain dengan lebih seru, aman, dan menyehatkan badan.", asesmen: { diagnostik: "Tanya jawab singkat atau permainan sederhana untuk melihat kemampuan awal siswa terkait {placeholder}.", formatif: "Observasi partisipasi aktif, semangat, dan kemauan siswa untuk mencoba selama kegiatan inti berlangsung.", sumatif: "Penilaian unjuk kerja kemampuan melakukan gerak dasar {placeholder} dan penilaian sikap.", rubrikPenilaian: `<h4>a. Rubrik Penilaian Unjuk Kerja (Psikomotor)</h4><table class="lkpd-table"><thead><tr><th>Skor</th><th>Deskripsi Kriteria</th></tr></thead><tbody><tr><td>4 (Sangat Baik)</td><td>Mampu melakukan gerak dasar {placeholder} dengan benar dan konsisten tanpa bantuan.</td></tr><tr><td>3 (Baik)</td><td>Mampu melakukan gerak dasar {placeholder} dengan benar, namun terkadang masih perlu diingatkan.</td></tr><tr><td>2 (Cukup)</td><td>Mampu melakukan gerak dasar {placeholder} namun masih dengan bantuan atau contoh.</td></tr><tr><td>1 (Perlu Bimbingan)</td><td>Masih kesulitan dalam melakukan gerak dasar {placeholder}.</td></tr></tbody></table><h4>b. Rubrik Penilaian Sikap (Afektif)</h4><table class="lkpd-table"><thead><tr><th>Predikat</th><th>Deskripsi Kriteria (Kolaborasi, Kemandirian)</th></tr></thead><tbody><tr><td>Sangat Berkembang</td><td>Selalu proaktif berkolaborasi, bersemangat, dan menunjukkan sportivitas tinggi.</td></tr><tr><td>Berkembang</td><td>Berpartisipasi aktif dalam kolaborasi dan permainan, menunjukkan sportivitas.</td></tr><tr><td>Mulai Berkembang</td><td>Berpartisipasi namun cenderung pasif, sesekali perlu diingatkan untuk sportif.</td></tr></tbody></table><h4>c. Pedoman Perhitungan Nilai Akhir</h4><p>Nilai Akhir = (Skor Unjuk Kerja x 70%) + (Konversi Skor Sikap x 30%)</p>` } } };
const saranaDatabase = { default: { media: ["Video contoh gerakan dari YouTube Kids", "Gambar/poster urutan gerakan", "Musik ceria untuk pemanasan"], alat: ["Peralatan sesuai materi", "Cone/penanda", "Peluit", "Papan tulis/spidol"] }, 'lokomotor-1': { media: ["<a href='https://www.youtube.com/results?search_query=contoh+gerak+lokomotor+untuk+anak+sd' target='_blank'>Video contoh gerak lokomotor</a>", "Lagu 'Naik Kereta Api'"], alat: ["Cone berwarna-warni", "Tali rafia", "Simpai", "Peluit"] }, 'senam-6': { media: ["<a href='https://www.youtube.com/results?search_query=tutorial+senam+lantai+untuk+anak+sd' target='_blank'>Video tutorial senam lantai dasar</a>", "Gambar urutan gerakan guling depan"], alat: ["Matras senam", "Balok titian rendah", "Simpai", "Peluit"] } };
const glosariumDatabase = { 'default': { "Gerak Lokomotor": "Gerakan berpindah tempat, seperti berjalan, berlari, melompat.", "Gerak Non-lokomotor": "Gerakan yang dilakukan di tempat, tanpa berpindah, seperti mengayun, membungkuk.", "Gerak Manipulatif": "Gerakan yang melibatkan objek di luar tubuh, seperti melempar, menangkap, menendang bola.", "Koordinasi": "Kemampuan untuk melakukan gerakan dengan berbagai bagian tubuh secara efisien dan harmonis.", "Fair Play": "Sikap sportif, jujur, dan menghormati aturan serta lawan dalam bermain." }, 'lokomotor-1': { "Berjalan": "Gerak melangkahkan kaki secara bergantian dengan salah satu kaki selalu menyentuh tanah.", "Berlari": "Gerak melangkahkan kaki dengan kecepatan tinggi di mana ada saat tubuh melayang di udara." }, 'nonlokomotor-1': { "Membungkuk": "Gerakan menekuk tubuh bagian atas ke bawah atau ke samping.", "Mengayun": "Gerakan anggota tubuh (lengan atau kaki) seperti bandul jam." }, 'manipulatif-1': { "Melempar": "Gerakan menolak suatu objek dengan tangan menjauhi tubuh.", "Menangkap": "Gerakan menghentikan laju objek dengan tangan." }, 'senam-4': { "Senam Lantai": "Cabang senam yang gerakannya dilakukan di atas matras.", "Guling Depan": "Gerakan berguling ke depan dengan menggunakan bagian belakang tubuh, dimulai dari tengkuk.", "Keseimbangan Statis": "Kemampuan mempertahankan posisi tubuh dalam keadaan diam." }, 'kebugaran-3': { "Kebugaran Jasmani": "Kesanggupan tubuh untuk melakukan aktivitas tanpa mengalami kelelahan yang berarti.", "Daya Tahan": "Kemampuan tubuh untuk bekerja dalam waktu yang lama tanpa lelah." }, 'kombinasi-invasi-5': { "Permainan Invasi": "Jenis permainan yang tujuannya adalah menyerang wilayah lawan untuk mencetak skor, contoh: sepak bola, bola basket.", "Menggiring (Dribbling)": "Gerak memantul-mantulkan bola (basket) atau membawanya dengan kaki (sepak bola) sambil bergerak.", "Passing": "Gerak mengoper atau memberikan bola kepada teman satu tim." }, 'kombinasi-net-5': { "Permainan Net": "Jenis permainan yang menggunakan net sebagai pemisah, contoh: bulu tangkis, voli.", "Servis": "Pukulan awal untuk memulai permainan.", "Smash": "Pukulan keras dan menukik ke area lawan." }, 'cedera-ringan-4': { "P3K": "Pertolongan Pertama Pada Kecelakaan; tindakan pertolongan awal yang diberikan kepada korban cedera.", "Kompres": "Metode penanganan cedera dengan menempelkan sesuatu (dingin atau panas) pada area yang sakit." } };
const pustakaDatabase = { 'default': [ "Muhajir. (2021). <i>Buku Panduan Guru Pendidikan Jasmani, Olahraga, dan Kesehatan untuk SD Kelas I</i>. Jakarta: Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi." ] };
const lkpdDatabase = { 'default': { title: "Lembar Kerja Pengamatan Keterampilan Gerak", tujuan: "Mengamati dan menilai kemampuan siswa dalam mempraktikkan keterampilan gerak dasar.", alat: ["Area/lapangan", "Alat tulis"], langkah: [ "Amati setiap siswa saat melakukan demonstrasi.", "Berikan tanda centang (✓) pada kolom yang sesuai dengan tingkat penguasaan siswa.", "Tuliskan catatan atau masukan spesifik pada kolom deskripsi." ], tabel: `<table class="lkpd-table"><thead><tr><th rowspan="2">Nama Siswa</th><th colspan="4">Aspek yang Diamati: Gerak Dasar {placeholder}</th><th rowspan="2">Catatan</th></tr><tr><th>Sikap Awal</th><th>Pelaksanaan</th><th>Sikap Akhir</th><th>Koordinasi</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>` } };
const profilLulusanDatabase = { base: ['Keimanan', 'Kemandirian', 'Kesehatan'], desc: { 'Keimanan': 'Terintegrasi melalui kegiatan berdoa sebelum dan sesudah pelajaran serta menumbuhkan rasa syukur atas kesehatan tubuh.', 'Kewargaan': 'Dikembangkan melalui sportivitas, kepatuhan pada aturan main, dan menghargai teman maupun lawan.', 'Penalaran Kritis': 'Diasah saat siswa menganalisis taktik, mengevaluasi gerakan, dan memecahkan masalah dalam situasi permainan.', 'Kreativitas': 'Didorong saat siswa merancang variasi latihan, strategi permainan, atau menciptakan rangkaian gerak baru.', 'Kolaborasi': 'Dibangun melalui kerja sama tim, komunikasi efektif, dan memberikan umpan balik konstruktif kepada rekan.', 'Kemandirian': 'Tumbuh saat siswa mengambil inisiatif untuk berlatih, mengelola peralatannya sendiri, dan bertanggung jawab atas kemajuan belajarnya.', 'Kesehatan': 'Menjadi fokus utama dengan memahami manfaat aktivitas fisik bagi tubuh dan menerapkan pola hidup sehat.', 'Komunikasi': 'Dilatih secara verbal dan non-verbal saat berinteraksi dengan teman satu tim, menyampaikan ide, dan memahami isyarat dalam permainan.' }, byElemen: { 'Terampil Bergerak': ['Kolaborasi', 'Komunikasi'], 'Belajar melalui Gerak': ['Penalaran Kritis', 'Kreativitas', 'Kewargaan'], 'Bergaya Hidup Aktif': ['Kesehatan', 'Kemandirian'], 'Memilih Hidup yang Menyehatkan': ['Penalaran Kritis', 'Kesehatan'] } };
const quotes = [ "Anak hebat, terus bergerak dan jadi kuat!", "Setiap lompatan membuatmu lebih tinggi, setiap lari membuatmu lebih cepat!", "Bermain bersama teman itu seru dan menyehatkan!", "Jangan takut salah, yang penting berani mencoba!", "Kamu adalah juara kecil hari ini!" ];
const kelasByFase = { A: [1, 2], B: [3, 4], C: [5, 6] };

async function callGemini(prompt) {
    const apiUrl = "/.netlify/functions/gemini"; 
    try {
        const response = await fetch(apiUrl, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ prompt: prompt }) 
        });
        if (!response.ok) { throw new Error(`Error dari server: ${response.status} ${response.statusText}`); }
        const result = await response.json();
        if (result.error) { return `Terjadi kesalahan dari server AI: ${result.error.message}`; }
        if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        }
        return "Maaf, format respons dari AI tidak valid.";
    } catch (error) {
        return `Terjadi kesalahan koneksi: ${error.message}.`;
    }
}

function showModal(title, content) {
    domElements.geminiModalTitle.innerText = title;
    domElements.geminiModalContent.innerHTML = content.replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>').replace(/\n/g, '<br>');
    domElements.geminiModal.classList.remove('hidden');
}

function hideModal() { domElements.geminiModal.classList.add('hidden'); }

function getFormContext() {
    const { faseSelect, kelasSelect, materiPembelajaranSelect, materiSpesifik, modelPembelajaran } = domElements;
    return {
        fase: faseSelect.value,
        kelas: kelasSelect.value,
        materiJudul: materiPembelajaranSelect.options[materiPembelajaranSelect.selectedIndex].text,
        materiSpesifik: document.getElementById('materi-spesifik').value,
        modelPembelajaran: document.getElementById('model-pembelajaran').value
    };
}

function setupEventListeners() {
    const { geminiWarmupBtn, geminiMateriBtn, geminiQuizBtn, geminiCodingBtn, geminiModalClose, geminiModalCopy, faseSelect, kelasSelect, materiPembelajaranSelect, generateBtn, copyBtn, backBtn } = domElements;

    geminiWarmupBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        showModal("Ide Pemanasan Kreatif", '<p class="text-center">Meminta ide dari Asisten... 🧠</p>');
        const prompt = `Sebagai seorang ahli pedagogi PJOK untuk anak SD, berikan saya 3 ide permainan pemanasan yang kreatif, menyenangkan, dan relevan untuk materi "${materiJudul}" dengan fokus pada "${materiSpesifik}" untuk siswa kelas ${kelas} (Fase ${fase}). Untuk setiap ide, gunakan format berikut: **Nama Permainan**, **Cara Bermain** (langkah-langkah jelas), dan **Hubungan dengan Materi**.`;
        const result = await callGemini(prompt);
        showModal("Ide Pemanasan Kreatif", result);
    });

    geminiMateriBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        showModal("Materi Ajar Tambahan", '<p class="text-center">Menyusun naskah materi ajar dengan Asisten... ✍️</p>');
        const prompt = `Sebagai seorang guru PJOK yang pandai bercerita untuk anak-anak, buatkan saya sebuah naskah materi ajar yang menarik untuk disampaikan di kelas. Konteksnya adalah untuk siswa kelas ${kelas} (Fase ${fase}) dengan topik utama "${materiJudul}" dan fokus spesifik pada "${materiSpesifik}". Buatlah narasi yang mudah dipahami anak-anak, gunakan analogi yang relevan, dan sampaikan dalam bentuk cerita atau penjelasan langkah demi langkah yang imajinatif.`;
        const result = await callGemini(prompt);
        showModal("Materi Ajar Tambahan", result);
    });
    
    geminiQuizBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        showModal("Kuis Interaktif", '<p class="text-center">Membuat kuis dengan Asisten... 📝</p>');
        const questionCount = (fase === 'A') ? 5 : ((fase === 'B') ? 7 : 10);
        const prompt = `Sebagai ahli pembuat soal PJOK untuk anak SD, buatkan saya ${questionCount} soal kuis pilihan ganda yang interaktif dan menyenangkan. Kuis ini untuk siswa kelas ${kelas} (Fase ${fase}) mengenai materi "${materiJudul}" dengan fokus pada "${materiSpesifik}". Untuk setiap soal, berikan pertanyaan, 3 pilihan jawaban (A, B, C), dan tandai jawaban yang benar. Terakhir, buat bagian **Kunci Jawaban dan Penjelasan** yang menerangkan mengapa setiap jawaban benar dengan bahasa yang mudah dimengerti anak-anak.`;
        const result = await callGemini(prompt);
        showModal("Kuis Interaktif", result);
    });

    geminiCodingBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
        showModal("Ide Pembelajaran Coding di PJOK", '<p class="text-center">Menghubungkan gerak dan logika... 🤖</p>');
        const prompt = `Sebagai seorang guru inovator yang ahli dalam mengintegrasikan _computational thinking_ ke dalam PJOK, berikan saya 2 ide konkret untuk mengintegrasikan pembelajaran coding tanpa komputer (_unplugged coding_). Konteksnya adalah untuk siswa kelas ${kelas} (Fase ${fase}), dengan materi utama "${materiJudul}" (fokus pada "${materiSpesifik}"), dan model pembelajaran "${modelPembelajaran}". Untuk setiap ide, jelaskan dengan format berikut: **Nama Aktivitas:**, **Konsep Coding yang Diajarkan:**, **Deskripsi Aktivitas:**, **Kaitan dengan Materi PJOK:**`;
        const result = await callGemini(prompt);
        showModal("Ide Pembelajaran Coding di PJOK", result);
    });
    
    geminiModalClose.addEventListener('click', hideModal);
    
    geminiModalCopy.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(domElements.geminiModalContent);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try { document.execCommand('copy'); geminiModalCopy.innerText = 'Tersalin!'; } catch (err) { console.error('Gagal menyalin'); }
        window.getSelection().removeAllRanges();
        setTimeout(() => { geminiModalCopy.innerText = 'Salin Teks'; }, 2000);
    });

    faseSelect.addEventListener('change', populateKelas);
    kelasSelect.addEventListener('change', populateMateri);
    materiPembelajaranSelect.addEventListener('change', (e) => {
        const kelas = kelasSelect.value;
        const materiKey = e.target.value;
        if (materiByKelas[kelas] && materiByKelas[kelas][materiKey]) {
            const elemen = materiByKelas[kelas][materiKey].elemenTerkait;
            if (elemen) domElements.elemenCpSelect.value = elemen;
        }
    });

    generateBtn.addEventListener('click', () => {
        domElements.placeholder.classList.add('hidden');
        domElements.outputContainer.innerHTML = '<p class="text-center">Menyusun Modul Ajar, mohon tunggu... ⚙️</p>';
        domElements.actionButtons.classList.add('hidden');
        domElements.geminiFeaturesSection.classList.add('hidden');
        setTimeout(() => generateModuleContent(), 100);
    });

    copyBtn.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(domElements.outputContainer);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            copyBtn.innerText = 'Disalin!';
        } catch (err) {
            console.error('Gagal menyalin');
        }
        window.getSelection().removeAllRanges();
        setTimeout(() => { copyBtn.innerText = 'Salin Teks & Format'; }, 2000);
    });

    backBtn.addEventListener('click', () => { location.reload(); });
}

function populateKelas() {
    const fase = domElements.faseSelect.value;
    const kelasUntukFase = kelasByFase[fase];
    domElements.kelasSelect.innerHTML = '';
    kelasUntukFase.forEach(k => {
        const option = document.createElement('option');
        option.value = k;
        option.textContent = `Kelas ${k}`;
        domElements.kelasSelect.appendChild(option);
    });
    populateMateri();
}

function populateMateri() {
    const kelas = domElements.kelasSelect.value;
    const materiUntukKelas = materiByKelas[kelas];
    domElements.materiPembelajaranSelect.innerHTML = '';
    if (materiUntukKelas) {
        for (const key in materiUntukKelas) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = materiUntukKelas[key].text;
            domElements.materiPembelajaranSelect.appendChild(option);
        }
    }
    domElements.materiPembelajaranSelect.dispatchEvent(new Event('change'));
}

function generateTujuanPembelajaran(capaianText, materiText) {
    const sentences = capaianText.split('. ').filter(s => s.trim() !== '');
    const tujuanList = sentences.map(sentence => {
        let tujuan = `Peserta didik dapat ${sentence.charAt(0).toLowerCase() + sentence.slice(1)}`;
        if (!tujuan.endsWith('.')) tujuan += '.';
        if (tujuan.toLowerCase().includes("keterampilan gerak") || tujuan.toLowerCase().includes("aktivitas jasmani") || tujuan.toLowerCase().includes("situasi gerak")) {
            tujuan = tujuan.replace(/\.$/, `, khususnya dalam konteks ${materiText}.`);
        }
        return `<li>${tujuan}</li>`;
    });
    return {
        html: `<ul>${tujuanList.join('')}</ul>`,
        list: tujuanList.map(li => li.replace(/<li>|<\/li>/g, ''))
    };
}

function generateATP(tpList) {
    if (!tpList || tpList.length === 0) return "<p>Alur Tujuan Pembelajaran akan dirangkai setelah Tujuan Pembelajaran spesifik ditentukan.</p>";
    let atpHtml = `<p>Alur Tujuan Pembelajaran (ATP) ini dirancang secara sistematis untuk memandu peserta didik mencapai Capaian Pembelajaran. Berikut adalah alur yang akan ditempuh:</p><ol>`;
    tpList.forEach((tp, index) => {
        let stepLabel = (index === 0) ? '<strong>Langkah Awal (Fondasi):</strong> ' : (index === tpList.length - 1) ? '<strong>Puncak Pembelajaran (Aplikasi):</strong> ' : `<strong>Langkah ${index + 1} (Pengembangan):</strong> `;
        atpHtml += `<li>${stepLabel}${tp}</li>`;
    });
    atpHtml += `</ol>`;
    return atpHtml;
}

function generateProfilLulusan(elemenCP) {
    const profilSet = new Set(profilLulusanDatabase.base);
    if (profilLulusanDatabase.byElemen[elemenCP]) {
        profilLulusanDatabase.byElemen[elemenCP].forEach(p => profilSet.add(p));
    }
    return Array.from(profilSet);
}

function generateKegiatanInti(materiKey, model, pertemuanIndex, materiJudulSingkat, materiSpesifik) {
    const db = kegiatanIntiDatabase;
    let steps;
    const placeholderMateri = materiSpesifik || materiJudulSingkat;
    if (db[materiKey] && db[materiKey][model]) {
        steps = db[materiKey][model][pertemuanIndex] || db[materiKey][model][db[materiKey][model].length - 1];
    } else if (db.default[model]) {
        steps = db.default[model][pertemuanIndex] || db.default[model][0];
    } else {
        steps = ["Guru memfasilitasi aktivitas inti sesuai dengan materi dan model pembelajaran yang dipilih."];
    }
    return steps.map(step => step.replace(/{materi_spesifik}/g, placeholderMateri.toLowerCase()).replace(/{materi}/g, materiJudulSingkat.toLowerCase()));
}

function generatePendekatanHTML(modelPembelajaran, fase) {
    const modelData = modelPembelajaranDatabase[modelPembelajaran] || {};
    const frameworkData = deepLearningFrameworkDatabase[fase] || deepLearningFrameworkDatabase['A'];
    const metode = modelData.metode ? modelData.metode.join(', ') : 'Tidak ada';
    return `<p>Modul ini dirancang menggunakan <strong>Pendekatan ${modelData.pendekatan}</strong>. Fokus utama adalah ${modelData.deskripsi}. Model yang digunakan adalah <strong>${modelPembelajaran}</strong>, dengan metode: <strong>${metode}</strong>.</p><div class="deep-learning-box"><p>Implementasi ini didasarkan pada kerangka <strong>Pembelajaran Mendalam (Deep Learning)</strong> yang mengintegrasikan:</p><ul><li><strong>Praktik Pedagogis:</strong> Fokus pada ${modelData.deskripsi}.</li><li><strong>Lingkungan Pembelajaran:</strong> ${frameworkData.lingkungan}</li><li><strong>Kemitraan Pembelajaran:</strong> ${frameworkData.kemitraan}</li><li><strong>Teknologi Digital:</strong> ${frameworkData.teknologi}</li></ul></div>`;
}

function generateModuleContent() {
    const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
    const namaPenyusun = document.getElementById('nama-penyusun').value;
    const guruNip = document.getElementById('guru-nip').value;
    const kepsekNama = document.getElementById('kepsek-nama').value;
    const kepsekNip = document.getElementById('kepsek-nip').value;
    const institusi = document.getElementById('institusi').value;
    const semester = document.getElementById('semester').value;
    const elemenCP = domElements.elemenCpSelect.value;
    const materiKey = domElements.materiPembelajaranSelect.value;
    const jumlahPertemuan = parseInt(document.getElementById('jumlah-pertemuan').value);
    const jpPerPertemuan = parseInt(document.getElementById('jp-per-pertemuan').value);
    const menitPerJP = parseInt(document.getElementById('menit-per-jp').value);
    const lokasiTtd = document.getElementById('lokasi-ttd').value;
    const tanggalTtd = document.getElementById('tanggal-ttd').value;
    const totalJP = jumlahPertemuan * jpPerPertemuan;
    const alokasiWaktuText = `${totalJP} JP (${jumlahPertemuan} Pertemuan @ ${jpPerPertemuan} JP x ${menitPerJP} Menit)`;
    const menitTotalPerPertemuan = jpPerPertemuan * menitPerJP;
    const menitPendahuluan = 10;
    const menitPenutup = 10;
    const menitInti = menitTotalPerPertemuan - menitPendahuluan - menitPenutup > 0 ? menitTotalPerPertemuan - menitPendahuluan - menitPenutup : 50;
    const materiJudulSingkat = materiJudul.replace(/Aktivitas.*?:\s*|Permainan\s*|Kesehatan:\s*|Pembelajaran\s*|Keterampilan\s*/, '').replace(/\s*\(.*\)/, '').trim();
    const placeholderMateri = materiSpesifik || materiJudulSingkat;
    const content = contentDatabase.default;
    const capaianPembelajaran = capaianPerElemen[elemenCP] ? capaianPerElemen[elemenCP][fase] : "Capaian tidak ditemukan.";
    const tujuanData = generateTujuanPembelajaran(capaianPembelajaran, placeholderMateri);
    const generatedTujuanHTML = tujuanData.html;
    const generatedATPHTML = generateATP(tujuanData.list);
    const generatedPertanyaanHTML = `<ul><li>Apa yang kamu ketahui tentang ${placeholderMateri.toLowerCase()}?</li><li>Mengapa penting bisa melakukan ${placeholderMateri.toLowerCase()}?</li></ul>`;
    
    let kegiatanHTML = '';
    for (let i = 0; i < jumlahPertemuan; i++) {
        const pendahuluanItems = [ "Guru menyapa siswa, mengajak berdoa, dan mengecek kehadiran.", `Guru mengajak siswa bernyanyi atau tepuk semangat.`, `Guru bertanya: "<i>Siapa yang suka ${materiJudulSingkat.toLowerCase()}?</i>".`, "Pemanasan dengan permainan sederhana." ];
        const intiItems = generateKegiatanInti(materiKey, modelPembelajaran, i, materiJudulSingkat, materiSpesifik);
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const penutupItems = [ "Pendinginan dengan peregangan ringan.", "Refleksi singkat: '<i>Bagian mana yang paling kalian sukai?</i>'.", "Apresiasi kepada semua siswa.", `Pesan singkat: "<i>${randomQuote}</i>", lalu doa dan salam.` ];
        kegiatanHTML += `<h4>Pertemuan Ke-${i + 1}</h4><p><strong>a. Pendahuluan (${menitPendahuluan} Menit):</strong></p><ol>${pendahuluanItems.map(item => `<li>${item}</li>`).join('')}</ol><p><strong>b. Inti (${menitInti} Menit) - Model: ${modelPembelajaran}:</strong></p><ol>${intiItems.map(item => `<li>${item}</li>`).join('')}</ol><p><strong>c. Penutup (${menitPenutup} Menit):</strong></p><ol>${penutupItems.map(item => `<li>${item}</li>`).join('')}</ol>`;
    }
    
    const lkpdSpesifik = lkpdDatabase[materiKey] || lkpdDatabase['default'];
    const saranaSpesifik = saranaDatabase[materiKey] || saranaDatabase['default'];
    const pendekatanHTML = generatePendekatanHTML(modelPembelajaran, fase);
    const signatureTableHTML = `<table style="width:100%;border:none;margin-top:4rem;page-break-inside:avoid;"><tbody style="border:none;"><tr style="border:none;"><td style="width:50%;text-align:left;vertical-align:top;border:none;padding:0;">Mengetahui,<br>Kepala Sekolah<br><br><br><br><strong><u>${kepsekNama}</u></strong><br>NIP. ${kepsekNip}</td><td style="width:50%;text-align:left;vertical-align:top;border:none;padding:0;">${lokasiTtd}, ${tanggalTtd}<br>Guru Mata Pelajaran<br><br><br><br><strong><u>${namaPenyusun}</u></strong><br>NIP. ${guruNip}</td></tr></tbody></table>`;
    const lkpdHTML = `<h4>a. ${lkpdSpesifik.title}</h4><p><strong>Tujuan:</strong> ${lkpdSpesifik.tujuan}</p><p><strong>Alat & Bahan:</strong> ${lkpdSpesifik.alat.join(', ')}</p><p><strong>Langkah Kerja:</strong></p><ol>${lkpdSpesifik.langkah.map(l => `<li>${l}</li>`).join('')}</ol>${lkpdSpesifik.tabel.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}`;
    const bahanBacaanHTML = `<p>- Buku Teks PJOK Kurikulum Merdeka (<a href="https://buku.kemdikbud.go.id/katalog" target="_blank" class="text-indigo-600 hover:underline">buku.kemdikbud.go.id</a>)<br>- Video pembelajaran di YouTube</p>`;
    
    const finalGlossary = { ...glosariumDatabase.default };
    if (glosariumDatabase[materiKey]) { Object.assign(finalGlossary, glosariumDatabase[materiKey]); }
    const glosariumHTML = Object.entries(finalGlossary).map(([istilah, definisi]) => `<p><strong>${istilah}:</strong> ${definisi}</p>`).join('');

    const pustakaHTML = pustakaDatabase.default.map(sumber => `<p>- ${sumber.replace('Kelas I', `Kelas ${kelas}`)}</p>`).join('');
    const profilLulusan = generateProfilLulusan(elemenCP);
    const profilLulusanHTML = `<ul>${profilLulusan.map(p => `<li><strong>${p}:</strong> ${profilLulusanDatabase.desc[p] || ''}</li>`).join('')}</ul>`;
    const saranaHTML = `<p><strong>Media Pembelajaran:</strong></p><ul>${saranaSpesifik.media.map(m => `<li>${m}</li>`).join('')}</ul><p><strong>Alat dan Bahan:</strong></p><ul>${saranaSpesifik.alat.map(a => `<li>${a}</li>`).join('')}</ul>`;
    const pemahamanBermaknaHTML = (content.pemahaman).replace(/{placeholder}/g, materiJudulSingkat.toLowerCase());
    const asesmenHTML = `<ul><li><strong>Asesmen Diagnostik:</strong> ${content.asesmen.diagnostik.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}</li><li><strong>Formatif:</strong> ${content.asesmen.formatif}</li><li><strong>Sumatif:</strong> ${content.asesmen.sumatif.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}</li></ul>${content.asesmen.rubrikPenilaian.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}`;
    
    const modulHTML = `<h1 class="text-2xl font-bold text-center mb-6">MODUL AJAR PJOK</h1> <h2 class="text-xl font-semibold text-center mb-8">${materiJudul.toUpperCase()} (${materiSpesifik})</h2> <h2>A. INFORMASI UMUM</h2> <table class="w-full text-left mb-6"><tr><td class="font-semibold p-2 w-1/3">Nama Penyusun</td><td class="p-2">: ${namaPenyusun}</td></tr><tr><td class="font-semibold p-2 w-1/3">Institusi</td><td class="p-2">: ${institusi}</td></tr><tr><td class="font-semibold p-2 w-1/3">Tahun Ajaran</td><td class="p-2">: 2025/2026</td></tr><tr><td class="font-semibold p-2 w-1/3">Jenjang Sekolah</td><td class="p-2">: Sekolah Dasar</td></tr><tr><td class="font-semibold p-2 w-1/3">Fase / Kelas</td><td class="p-2">: ${fase} / ${kelas}</td></tr><tr><td class="font-semibold p-2 w-1/3">Semester</td><td class="p-2">: ${semester}</td></tr><tr><td class="font-semibold p-2 w-1/3">Elemen</td><td class="p-2">: ${elemenCP}</td></tr><tr><td class="font-semibold p-2 w-1/3 align-top">Capaian</td><td class="p-2 align-top">: ${capaianPembelajaran}</td></tr><tr><td class="font-semibold p-2 w-1/3">Alokasi Waktu</td><td class="p-2">: ${alokasiWaktuText}</td></tr></table><h2>B. KOMPONEN INTI</h2><h3>1. Tujuan Pembelajaran</h3>${generatedTujuanHTML}<h3>2. Alur Tujuan Pembelajaran</h3>${generatedATPHTML}<h3>3. Pemahaman Bermakna</h3><p>${pemahamanBermaknaHTML}</p><h3>4. Pertanyaan Pemantik</h3>${generatedPertanyaanHTML}<h3>5. Pendekatan, Model, Metode</h3>${pendekatanHTML}<h3>6. Profil Lulusan</h3><p>Aktivitas ini mengembangkan dimensi berikut:</p>${profilLulusanHTML}<h3>7. Sarana dan Prasarana</h3>${saranaHTML}<h3>8. Kegiatan Pembelajaran</h3>${kegiatanHTML}<h3>9. Asesmen / Penilaian</h3>${asesmenHTML}<h2>C. LAMPIRAN</h2><h3>1. Lembar Kerja Peserta Didik</h3>${lkpdHTML}<h3>2. Bahan Bacaan</h3>${bahanBacaanHTML}<h3>3. Glosarium</h3>${glosariumHTML}<h3>4. Daftar Pustaka</h3>${pustakaHTML}${signatureTableHTML}`;
    domElements.outputContainer.innerHTML = modulHTML;
    domElements.actionButtons.classList.remove('hidden');
    domElements.geminiFeaturesSection.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    populateKelas();
    setupEventListeners();
});

    </script>
</body>
</html>