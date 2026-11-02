# QuizLab — Kuis Interaktif untuk GitHub Pages

QuizLab adalah web kuis statis berbasis HTML, Tailwind CSS, CSS, dan JavaScript. Situs hasil build tidak membutuhkan backend atau server aplikasi dan dapat di-host menggunakan GitHub Pages. Node.js hanya diperlukan ketika mengembangkan source dan membangun ulang CSS Tailwind.

## Fitur

- Antarmuka responsif bergaya Material Design dengan layout utility-first Tailwind CSS dan elemen visual yang difokuskan pada informasi serta tindakan penting.
- Alur persiapan peserta → konfirmasi tes → ruang ujian → hasil dan pembahasan.
- Identitas peserta wajib diisi sebelum ujian.
- Bank soal berisi 105 soal yang disusun dari materi dan latihan buku Informatika Kelas IX Semester 1.
- Satu sesi tetap berisi 30 soal dengan batas waktu total 45 menit.
- Komposisi setiap sesi dijaga: 12 soal Elemen 1 (Berpikir Komputasional), 12 soal Elemen 2 (Literasi Digital), dan 6 soal pengayaan dari bagian Asesmen Akhir Semester.
- Enam topik utama masing-masing menyumbang 4 soal: Struktur Data, Ekspresi dan Operasi Logika, Algoritma, Analisis Konten dan Integrasi Aplikasi, Blog, serta Vlog. Enam soal tambahan mencakup Dasar Informatika dan Aplikasi dari latihan Asesmen Akhir Semester.
- Tingkat kesulitan per sesi: 7 mudah, 16 sedang, dan 7 sulit. Soal dipilih acak sesuai kuota topik dan kesulitan, kemudian urutan soal serta pilihan jawabannya diacak.
- Navigasi nomor soal dengan status aktif, terjawab, belum dijawab, dan ragu-ragu.
- Konteks bacaan opsional pada soal melalui properti `context`.
- Pengaturan ukuran font soal dan pintasan keyboard A–D / panah kiri-kanan.
- Dialog konfirmasi sebelum mengakhiri ujian dan pengakhiran otomatis saat waktu habis.
- Pengacakan urutan soal dan pilihan jawaban.
- Skor, rekor terbaik lokal, dan pembahasan setiap soal.
- Sesi aktif disimpan di `localStorage` (urutan soal, jawaban, tanda ragu-ragu, posisi, dan batas waktu) sehingga dapat dipulihkan setelah refresh.
- Tombol selesai tes hanya aktif setelah semua soal dijawab dan semua tanda ragu-ragu dihapus. Waktu yang habis tetap mengakhiri ujian otomatis.
- Proteksi copy/cut/paste dan deteksi perpindahan tab/jendela selama ujian. Setiap pelanggaran terdeteksi mengurangi sisa waktu 5 menit dan menampilkan modal peringatan.
- Deteksi perpindahan tab menggunakan Page Visibility API dan window focus. Proteksi browser tidak dapat mencegah penggunaan kamera atau perangkat lain.
- Hasil terbaik disimpan di `localStorage` browser, bukan dikirim ke server.

## Menjalankan di komputer

1. Clone atau unduh repository.
2. Untuk menjalankan versi yang sudah dibangun, buka situs GitHub Pages atau jalankan `index.html` dengan Live Server.
3. Untuk mengubah utility Tailwind, jalankan `npm install` lalu `npm run build:css`. GitHub Actions juga menjalankan proses ini otomatis setelah perubahan source di-push ke `main`.

## Styling dan Tailwind CSS

QuizLab menggunakan Tailwind CSS v4 yang dikompilasi menjadi file statis `css/tailwind.css`. Ikon antarmuka disimpan lokal dalam satu SVG sprite di `assets/icons.svg`, sehingga tidak perlu mengunduh Material Symbols dari Google Fonts. GitHub Actions membangun ulang file tersebut setiap kali source HTML/JavaScript/Tailwind diubah pada branch `main`. Browser hanya memuat CSS hasil kompilasi dan satu SVG sprite lokal; tidak menjalankan compiler Tailwind atau mengunduh font ikon saat halaman dibuka. Komponen interaktif khusus (radio pilihan, status nomor, dialog, dan ring nilai) berada di `css/style.css`.

Untuk membangun CSS secara lokal, jalankan `npm install` lalu `npm run build:css`. Proses build memerlukan Node.js 20 atau lebih baru. File hasil build tetap dilayani sebagai file statis oleh GitHub Pages.

Tampilan mengadopsi pola Material Design seperti app bar, cards, outlined fields, radio controls, dialogs, dan elevation. Aplikasi ini tetap HTML/CSS/JavaScript biasa, bukan aplikasi resmi Pusmendik/ANBK dan bukan proyek React Material UI.

## Mengubah judul dan pengaturan kuis

Buka `js/questions.js`, lalu edit bagian `window.QUIZ_CONFIG`:

```js
window.QUIZ_CONFIG = {
  id: 'quiz-informatika-smp',
  title: 'Kuis Informatika',
  description: 'Asah logika dan pengetahuan digitalmu.',
  questionsPerSession: 30,
  sessionDurationMinutes: 45,
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: true
};
```

`questionsPerSession` menentukan jumlah soal dalam satu sesi dan `sessionDurationMinutes` menentukan durasi total sesi.

## Komposisi bank dan pemilihan soal

Setiap soal memiliki metadata `chapter`, `topicId`, `difficulty` (`mudah`, `sedang`, atau `sulit`), dan `sourcePages`. Aturan pemilihan terdapat pada `selectionPlan` di `js/questions.js`: 4 soal dari masing-masing enam topik utama, ditambah 6 soal Dasar Informatika dan Aplikasi dari bagian Asesmen Akhir Semester. Aplikasi memeriksa kecukupan setiap kuota sebelum peserta melanjutkan ke konfirmasi ujian.

## Menambah atau mengedit soal

Semua soal berada di dalam array `window.QUIZ_QUESTIONS` pada file `js/questions.js`. Soal baru perlu diberi `id` unik, `topicId` yang sesuai dengan `selectionPlan`, tingkat `difficulty`, empat pilihan, indeks jawaban benar, dan pembahasan.

```js
{
  id: 'q13',
  category: 'JAVASCRIPT',
  question: 'Apa fungsi console.log()?',
  options: [
    'Menampilkan pesan di console',
    'Menghapus file',
    'Mengubah warna browser',
    'Membuat database'
  ],
  answer: 0,
  explanation: 'console.log() digunakan untuk menampilkan informasi di console.'
}
```

Penting: `answer` memakai indeks mulai dari nol. `0` berarti pilihan pertama, `1` pilihan kedua, `2` pilihan ketiga, dan `3` pilihan keempat. Setiap soal wajib memiliki `id` unik dan empat pilihan jawaban.

Untuk soal berbasis bacaan, properti `context` bersifat opsional:

```js
{
  id: 'q13',
  category: 'LITERASI',
  context: 'Teks bacaan atau informasi pendukung ditampilkan sebelum pertanyaan.',
  question: 'Berdasarkan konteks tersebut, ...',
  options: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'],
  answer: 1,
  explanation: 'Alasan jawaban benar.'
}
```

## Integrasi Google Sheets (Apps Script)

QuizLab dapat mengirim rekap hasil setiap peserta ke Google Sheets. Data yang disimpan hanya tiga kolom:

1. Nama peserta
2. Waktu submit (dibuat oleh server Apps Script)
3. Nilai akhir (0–100)

Jawaban tiap soal, urutan soal, data pelanggaran, dan isi localStorage tidak dikirim ke Google Sheets.

### 1. Siapkan spreadsheet dan Apps Script

1. Buat Google Spreadsheet baru.
2. Beri nama misalnya \`Rekap Nilai QuizLab\`.
3. Buka **Extensions → Apps Script** dari spreadsheet tersebut.
4. Buka file \`apps-script/Code.gs\` dari repository QuizLab, salin seluruh isinya ke editor Apps Script, lalu simpan.
5. Karena script dibuat dari spreadsheet yang sama, biarkan \`SPREADSHEET_ID\` kosong. Script akan membuat tab \`Hasil QuizLab\` dan header kolom secara otomatis saat hasil pertama masuk.

Jika Apps Script dibuat sebagai project standalone, isi \`SPREADSHEET_ID\` dengan ID spreadsheet.

### 2. Deploy sebagai Web App

1. Di Apps Script, klik **Deploy → New deployment**.
2. Pilih tipe **Web app**.
3. **Execute as:** Me.
4. **Who has access:** Anyone.
5. Klik **Deploy**, lalu selesaikan otorisasi Google.
6. Salin URL Web App yang berakhiran \`/exec\`.

Untuk penggunaan internal kelas, URL endpoint ini dipasang di konfigurasi frontend. Siapa pun yang memiliki URL Web App dengan akses tersebut dapat mengirim data ke spreadsheet, jadi jangan gunakan endpoint ini untuk data sensitif.

### 3. Hubungkan URL ke QuizLab

Buka \`js/questions.js\`, lalu isi properti berikut pada \`window.QUIZ_CONFIG\`:

\`\`\`js
googleAppsScriptUrl: 'https://script.google.com/macros/s/ID_DEPLOYMENT/exec',
\`\`\`

Ganti URL contoh dengan URL Web App milikmu, simpan, lalu push perubahan ke branch \`main\`. GitHub Actions akan membangun Tailwind dan GitHub Pages akan menerbitkan versi terbaru.

### 4. Cara kerja pengiriman

Saat peserta menyelesaikan ujian (atau waktu habis), QuizLab menghitung nilai akhir dan mengirim nama serta nilai ke Apps Script. Waktu submit dicatat menggunakan waktu server Google. Pengiriman menggunakan form tersembunyi agar tidak membutuhkan konfigurasi CORS atau library tambahan.

Pesan pada layar hasil menyatakan bahwa permintaan pengiriman telah dikirim. Karena respons Apps Script lintas domain tidak dibaca langsung oleh halaman, periksa tab \`Hasil QuizLab\` untuk memastikan baris benar-benar tercatat.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `quiz-informatika`.
2. Upload seluruh isi folder proyek ini ke root repository. Pastikan `index.html` berada langsung di root, bukan di dalam folder bertingkat.
3. Buka **Settings → Pages** pada repository.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi selesai. GitHub akan menampilkan URL situs, biasanya berbentuk `https://USERNAME.github.io/quiz-informatika/`.

Untuk repository khusus `USERNAME.github.io`, URL-nya biasanya `https://USERNAME.github.io/`.

## Catatan penting

- Proyek ini murni frontend. Tidak ada login, database online, atau dashboard admin.
- Rekor terbaik tetap tersimpan pada browser/perangkat. Jika `googleAppsScriptUrl` sudah diisi, rekap nama, waktu submit, dan nilai akhir juga dikirim ke Google Sheets.
- Google Fonts digunakan untuk tipografi. Jika font eksternal tidak dapat diakses, browser akan memakai font cadangan.
