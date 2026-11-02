/*
 * BANK SOAL QUIZLAB
 * ------------------------------------------------------------
 * Cara menambah soal:
 * 1. Duplikat salah satu object soal di bawah.
 * 2. Ganti id menjadi unik.
 * 3. Isi pertanyaan dan empat pilihan jawaban.
 * 4. Isi answer dengan INDEX jawaban benar: 0, 1, 2, atau 3.
 * 5. Isi explanation dengan pembahasan singkat.
 *
 * Catatan: indeks 0 = pilihan pertama, 1 = pilihan kedua,
 * 2 = pilihan ketiga, dan 3 = pilihan keempat.
 */
window.QUIZ_CONFIG = {
  id: 'quiz-informatika-smp',
  title: 'Kuis Informatika',
  description: 'Asah logika dan pengetahuan digitalmu melalui kuis singkat ini.',
  questionsPerSession: 30,
  sessionDurationMinutes: 45,
  googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbzRAqVPOOe982Rozm6K--1n2ZvKUqx5gYnVYjqs-zFtvYrgVvWMzNDNn1NHO1UAKTll/exec',
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: true
};

window.QUIZ_QUESTIONS = [
  {
    id: 'q01', category: 'PERANGKAT KERAS',
    question: 'Komponen komputer yang bertugas menjalankan instruksi dan mengolah data disebut ....',
    options: ['RAM', 'Prosesor (CPU)', 'Hard disk', 'Power supply'], answer: 1,
    explanation: 'Prosesor atau CPU mengeksekusi instruksi program dan melakukan operasi pengolahan data. RAM menyimpan data sementara, sedangkan hard disk menyimpan data secara permanen.'
  },
  {
    id: 'q02', category: 'SISTEM KOMPUTER',
    question: 'Manakah perangkat berikut yang termasuk perangkat keluaran (output device)?',
    options: ['Keyboard', 'Mouse', 'Monitor', 'Scanner'], answer: 2,
    explanation: 'Monitor menampilkan hasil pemrosesan komputer kepada pengguna sehingga termasuk perangkat keluaran. Keyboard, mouse, dan scanner merupakan perangkat masukan.'
  },
  {
    id: 'q03', category: 'SISTEM BILANGAN',
    question: 'Bilangan biner 1010 jika dikonversi ke bilangan desimal bernilai ....',
    options: ['8', '10', '12', '14'], answer: 1,
    explanation: '1010₂ = (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1) = 10₁₀.'
  },
  {
    id: 'q04', category: 'LOGIKA PEMROGRAMAN',
    question: 'Dalam algoritma, struktur yang digunakan untuk menjalankan perintah berdasarkan suatu kondisi adalah ....',
    options: ['Percabangan', 'Perulangan', 'Urutan biasa', 'Deklarasi variabel'], answer: 0,
    explanation: 'Percabangan (selection), seperti if-else, memilih tindakan berdasarkan kondisi yang bernilai benar atau salah.'
  },
  {
    id: 'q05', category: 'PEMROGRAMAN',
    question: 'Perhatikan pseudocode berikut: x = 4, lalu x = x + 3. Berapakah nilai akhir x?',
    options: ['3', '4', '7', '12'], answer: 2,
    explanation: 'Nilai awal x adalah 4. Instruksi x = x + 3 menambahkan 3 ke nilai sebelumnya, sehingga nilai akhir x adalah 7.'
  },
  {
    id: 'q06', category: 'INTERNET',
    question: 'Layanan yang menerjemahkan nama domain seperti example.com menjadi alamat IP disebut ....',
    options: ['HTTP', 'DNS', 'HTML', 'USB'], answer: 1,
    explanation: 'DNS (Domain Name System) membantu menerjemahkan nama domain yang mudah dibaca manusia menjadi alamat IP yang digunakan perangkat untuk menemukan server.'
  },
  {
    id: 'q07', category: 'KEAMANAN DIGITAL',
    question: 'Tindakan paling tepat ketika menerima tautan mencurigakan yang meminta kata sandi akun adalah ....',
    options: ['Segera mengisi data agar akun aman', 'Meneruskan tautan ke semua teman', 'Membuka tautan dan mencoba kata sandi lama', 'Tidak membuka tautan dan memeriksa sumber resminya'], answer: 3,
    explanation: 'Tautan yang meminta kata sandi dapat menjadi upaya phishing. Jangan memasukkan data pribadi; periksa informasi melalui situs atau kanal resmi.'
  },
  {
    id: 'q08', category: 'WEB DESIGN',
    question: 'Bahasa yang digunakan untuk menyusun struktur konten halaman web adalah ....',
    options: ['HTML', 'CSS', 'SQL', 'Python'], answer: 0,
    explanation: 'HTML (HyperText Markup Language) digunakan untuk menyusun struktur dan konten halaman web. CSS mengatur tampilan, sedangkan JavaScript menambahkan interaktivitas.'
  },
  {
    id: 'q09', category: 'LOGIKA',
    question: 'Sebuah program menjalankan perintah cetak sebanyak 5 kali menggunakan perulangan. Struktur yang paling sesuai adalah ....',
    options: ['if-else', 'for', 'switch-case', 'break'], answer: 1,
    explanation: 'Perulangan for cocok digunakan ketika jumlah pengulangan diketahui, misalnya menjalankan perintah sebanyak lima kali.'
  },
  {
    id: 'q10', category: 'PEMROGRAMAN',
    question: 'Dalam pemrograman, variabel digunakan untuk ....',
    options: ['Menghubungkan komputer ke internet', 'Menghapus sistem operasi', 'Menyimpan nilai atau data yang dapat digunakan program', 'Mengubah perangkat keras menjadi perangkat lunak'], answer: 2,
    explanation: 'Variabel adalah tempat bernama untuk menyimpan nilai atau data yang dapat dibaca dan, sesuai aturan bahasa pemrograman, diubah selama program berjalan.'
  },
  {
    id: 'q11', category: 'INTERNET',
    question: 'Manakah contoh kata sandi yang paling kuat di antara pilihan berikut?',
    options: ['password123', '12345678', 'andi2009', 'M4tahari!Biru_72'], answer: 3,
    explanation: 'Kata sandi yang panjang dan menggabungkan huruf besar-kecil, angka, serta simbol umumnya lebih sulit ditebak. Jangan gunakan contoh kata sandi ini untuk akun pribadi karena sudah ditampilkan dalam kuis.'
  },
  {
    id: 'q12', category: 'ALGORITMA',
    question: 'Urutan instruksi yang logis dan sistematis untuk menyelesaikan suatu masalah disebut ....',
    options: ['Algoritma', 'Aplikasi', 'Jaringan', 'Antarmuka'], answer: 0,
    explanation: 'Algoritma merupakan urutan langkah yang logis, terstruktur, dan berhingga untuk menyelesaikan masalah atau mencapai tujuan tertentu.'
  }
  ,
  {
    id: 'q13', category: 'APLIKASI PERKANTORAN',
    question: 'Saat mengedit dokumen, kombinasi tombol keyboard yang umum digunakan untuk menyimpan perubahan adalah ....',
    options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + C', 'Ctrl + V'], answer: 1,
    explanation: 'Ctrl + S adalah pintasan untuk menyimpan dokumen atau file. Ctrl + P digunakan untuk mencetak, Ctrl + C untuk menyalin, dan Ctrl + V untuk menempel.'
  },
  {
    id: 'q14', category: 'WEB DESIGN',
    question: 'Ekstensi file yang paling umum digunakan untuk menyimpan dokumen HTML adalah ....',
    options: ['.html', '.css', '.jpg', '.mp3'], answer: 0,
    explanation: 'File HTML umumnya disimpan dengan ekstensi .html atau .htm. File CSS menggunakan .css, gambar dapat menggunakan .jpg, dan audio dapat menggunakan .mp3.'
  },
  {
    id: 'q15', category: 'CSS',
    question: 'Dalam CSS, properti yang digunakan untuk mengubah warna teks adalah ....',
    options: ['font-style', 'background', 'color', 'display'], answer: 2,
    explanation: 'Properti color mengatur warna teks. Properti background mengatur latar, font-style mengatur gaya huruf, dan display mengatur perilaku tata letak elemen.'
  },
  {
    id: 'q16', category: 'JAVASCRIPT',
    question: 'Dalam JavaScript, kata kunci yang digunakan untuk membuat variabel dengan cakupan blok dan nilainya dapat diubah kembali adalah ....',
    options: ['const', 'return', 'let', 'function'], answer: 2,
    explanation: 'let digunakan untuk mendeklarasikan variabel dengan block scope yang nilainya dapat diubah. const juga memiliki block scope, tetapi tidak dapat diisi ulang dengan nilai baru.'
  },
  {
    id: 'q17', category: 'ARRAY',
    question: 'Jika sebuah array berisi [12, 18, 25, 30], elemen pertama berada pada indeks ....',
    options: ['0', '1', '2', '3'], answer: 0,
    explanation: 'Pada JavaScript dan banyak bahasa pemrograman lain, indeks array dimulai dari 0. Karena itu, elemen pertama berada pada indeks 0.'
  },
  {
    id: 'q18', category: 'PERCABANGAN',
    question: 'Perintah if pada program akan menjalankan blok kode di dalamnya ketika ....',
    options: ['Program selalu dimulai', 'Kondisi bernilai benar', 'Kondisi bernilai salah', 'Komputer dimatikan'], answer: 1,
    explanation: 'Percabangan if menjalankan blok perintah ketika ekspresi kondisinya bernilai true atau benar.'
  },
  {
    id: 'q19', category: 'PERULANGAN',
    question: 'Perhatikan pseudocode: for i = 1 sampai 4, tampilkan i. Berapa kali perintah tampilkan dijalankan?',
    options: ['2 kali', '3 kali', '4 kali', '5 kali'], answer: 2,
    explanation: 'Nilai i berjalan dari 1, 2, 3, hingga 4. Jadi, perintah di dalam perulangan dijalankan sebanyak empat kali.'
  },
  {
    id: 'q20', category: 'FUNGSI',
    question: 'Dalam pemrograman, fungsi (function) terutama berguna untuk ....',
    options: ['Menghapus semua file komputer', 'Mengulang kode yang sama secara manual', 'Mengubah monitor menjadi perangkat input', 'Mengelompokkan instruksi agar dapat digunakan kembali'], answer: 3,
    explanation: 'Fungsi mengelompokkan instruksi untuk tugas tertentu sehingga kode lebih terstruktur dan dapat dipanggil kembali tanpa menulis ulang seluruh instruksi.'
  },
  {
    id: 'q21', category: 'TIPE DATA',
    question: 'Jika variabel teks berisi "BELAJAR", berapakah hasil dari operasi panjang teks (length)?',
    options: ['5', '6', '7', '8'], answer: 2,
    explanation: 'Kata BELAJAR terdiri dari tujuh karakter. Properti length pada string menghitung jumlah karakter di dalam teks.'
  },
  {
    id: 'q22', category: 'OPERATOR LOGIKA',
    question: 'Operator logika AND akan menghasilkan nilai benar apabila ....',
    options: ['Kedua kondisi bernilai benar', 'Salah satu kondisi bernilai benar', 'Kedua kondisi bernilai salah', 'Tidak ada kondisi yang diperiksa'], answer: 0,
    explanation: 'Operator AND menghasilkan true hanya jika semua kondisi yang digabungkan bernilai true.'
  },
  {
    id: 'q23', category: 'SCRATCH',
    question: 'Pada Scratch, blok perintah yang biasanya digunakan untuk memulai skrip ketika bendera hijau diklik termasuk kategori ....',
    options: ['Motion', 'Looks', 'Events', 'Operators'], answer: 2,
    explanation: 'Blok ketika bendera hijau diklik termasuk kategori Events karena merespons suatu kejadian atau peristiwa.'
  },
  {
    id: 'q24', category: 'FLOWCHART',
    question: 'Pada flowchart, simbol berbentuk belah ketupat digunakan untuk menunjukkan ....',
    options: ['Mulai atau selesai', 'Keputusan atau percabangan kondisi', 'Proses perhitungan', 'Arah aliran data saja'], answer: 1,
    explanation: 'Simbol belah ketupat menunjukkan decision, yaitu pemeriksaan kondisi yang dapat menghasilkan cabang seperti Ya/Tidak atau Benar/Salah.'
  },
  {
    id: 'q25', category: 'ELEKTRONIKA DASAR',
    question: 'Mengapa LED pada rangkaian Arduino umumnya dipasang bersama resistor?',
    options: ['Agar LED dapat terhubung ke Wi-Fi', 'Agar program berjalan lebih cepat', 'Untuk memperbesar tegangan tanpa batas', 'Untuk membatasi arus agar LED tidak rusak'], answer: 3,
    explanation: 'Resistor membatasi arus yang mengalir melalui LED. Tanpa pembatas arus yang sesuai, LED dapat dialiri arus berlebihan dan rusak.'
  },
  {
    id: 'q26', category: 'ROBOTIKA',
    question: 'Komponen servo motor pada robot umumnya digunakan ketika kita perlu ....',
    options: ['Mengatur posisi atau sudut putaran tertentu', 'Mengukur suhu ruangan', 'Menyimpan program ke internet', 'Mendeteksi warna layar monitor'], answer: 0,
    explanation: 'Servo motor dapat diarahkan ke posisi atau sudut tertentu melalui sinyal kendali, sehingga sering digunakan pada lengan robot, capit, dan mekanisme pengarah.'
  },
  {
    id: 'q27', category: 'SENSOR',
    question: 'Sensor ultrasonik seperti HC-SR04 mengukur jarak objek dengan memanfaatkan ....',
    options: ['Cahaya inframerah yang dipantulkan', 'Gelombang suara ultrasonik dan waktu pantulnya', 'Medan magnet bumi', 'Perubahan warna objek'], answer: 1,
    explanation: 'Sensor ultrasonik mengirim gelombang suara berfrekuensi tinggi dan mengukur waktu hingga pantulannya diterima kembali untuk memperkirakan jarak.'
  },
  {
    id: 'q28', category: 'ROBOTIKA',
    question: 'Pada robot line follower, sensor inframerah biasanya dimanfaatkan untuk ....',
    options: ['Mengukur kapasitas baterai', 'Menghasilkan suara', 'Membedakan pantulan permukaan jalur, misalnya hitam dan putih', 'Menghubungkan robot ke proyektor'], answer: 2,
    explanation: 'Sensor inframerah membaca perbedaan pantulan dari permukaan. Perbedaan ini dapat digunakan robot untuk mengikuti garis pada lintasan.'
  },
  {
    id: 'q29', category: 'PERANGKAT KERAS',
    question: 'Port USB pada komputer umumnya digunakan untuk ....',
    options: ['Mendinginkan prosesor', 'Menambah ukuran layar', 'Mengubah sistem operasi', 'Menghubungkan perangkat dan melakukan transfer data'], answer: 3,
    explanation: 'USB merupakan antarmuka untuk menghubungkan perangkat seperti keyboard, mouse, flash drive, dan perangkat lain, termasuk untuk transfer data dan daya.'
  },
  {
    id: 'q30', category: 'INTERNET',
    question: 'Layanan penyimpanan cloud memungkinkan pengguna untuk ....',
    options: ['Menyimpan dan mengakses file melalui server di internet', 'Memperbesar RAM fisik secara otomatis', 'Menggunakan komputer tanpa sistem operasi', 'Mengubah file digital menjadi perangkat keras'], answer: 0,
    explanation: 'Penyimpanan cloud menyimpan data pada server yang dapat diakses melalui internet menggunakan akun dan izin yang sesuai.'
  }
];
