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
  secondsPerQuestion: 60,
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
];
