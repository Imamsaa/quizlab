# QuizLab — Kuis Interaktif untuk GitHub Pages

QuizLab adalah web kuis statis berbasis HTML, Tailwind CSS, CSS, dan JavaScript. Situs hasil build tidak membutuhkan backend atau server aplikasi dan dapat di-host menggunakan GitHub Pages. Node.js hanya diperlukan ketika mengembangkan source dan membangun ulang CSS Tailwind.

## Fitur

- Antarmuka responsif bergaya Material Design dengan layout utility-first Tailwind CSS dan elemen visual yang difokuskan pada informasi serta tindakan penting.
- Alur persiapan peserta → konfirmasi tes → ruang ujian → hasil dan pembahasan.
- Identitas peserta wajib diisi sebelum ujian.
- Satu sesi tetap berisi 30 soal dengan batas waktu total 45 menit.
- Navigasi nomor soal dengan status aktif, terjawab, belum dijawab, dan ragu-ragu.
- Konteks bacaan opsional pada soal melalui properti `context`.
- Pengaturan ukuran font soal dan pintasan keyboard A–D / panah kiri-kanan.
- Dialog konfirmasi sebelum mengakhiri ujian dan pengakhiran otomatis saat waktu habis.
- Pengacakan urutan soal dan pilihan jawaban.
- Skor, rekor terbaik lokal, dan pembahasan setiap soal.
- Sesi aktif disimpan di `localStorage` (urutan soal, jawaban, tanda ragu-ragu, posisi, dan batas waktu) sehingga dapat dipulihkan setelah refresh.
- Tombol selesai tes hanya aktif setelah semua soal dijawab dan semua tanda ragu-ragu dihapus. Waktu yang habis tetap mengakhiri ujian otomatis.
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

## Menambah atau mengedit soal

Semua soal berada di dalam array `window.QUIZ_QUESTIONS` pada file `js/questions.js`.

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
- Rekor hanya tersimpan pada browser/perangkat yang digunakan. Hasil peserta tidak otomatis terkumpul ke guru.
- Jika nanti membutuhkan rekap nilai terpusat, autentikasi, atau dashboard guru, tambahkan backend seperti Firebase atau Google Apps Script.
- Google Fonts digunakan untuk tipografi. Jika font eksternal tidak dapat diakses, browser akan memakai font cadangan.
