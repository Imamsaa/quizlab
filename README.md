# QuizLab — Kuis Interaktif untuk GitHub Pages

QuizLab adalah web kuis statis berbasis HTML, CSS, dan JavaScript. Tidak membutuhkan Node.js, database, backend, framework, atau proses build. Cocok untuk di-host secara gratis menggunakan GitHub Pages.

## Fitur

- Antarmuka responsif bergaya Material Design dengan layout utility-first Tailwind CSS.
- Alur persiapan peserta → konfirmasi tes → ruang ujian → hasil dan pembahasan.
- Identitas peserta wajib diisi sebelum ujian.
- Timer otomatis berdasarkan jumlah soal.
- Navigasi nomor soal dengan status aktif, terjawab, belum dijawab, dan ragu-ragu.
- Konteks bacaan opsional pada soal melalui properti `context`.
- Pengaturan ukuran font soal dan pintasan keyboard A–D / panah kiri-kanan.
- Dialog konfirmasi sebelum mengakhiri ujian dan pengakhiran otomatis saat waktu habis.
- Pengacakan urutan soal dan pilihan jawaban.
- Skor, rekor terbaik lokal, dan pembahasan setiap soal.
- Hasil disimpan di `localStorage` browser, bukan dikirim ke server.

## Menjalankan di komputer

1. Ekstrak folder proyek.
2. Buka `index.html` di browser.
3. Tidak perlu instalasi dependency.

Untuk pengembangan, disarankan menggunakan ekstensi Live Server di VS Code. Namun, proyek ini juga dapat dibuka langsung melalui browser.

## Styling dan Tailwind CSS

QuizLab menggunakan Tailwind CSS Play CDN agar tetap dapat dijalankan langsung dari GitHub Pages tanpa proses build atau Node.js. Karena utilitas Tailwind diproses di browser, halaman membutuhkan koneksi internet untuk memuat CDN Tailwind. Komponen interaktif khusus (radio pilihan, status nomor, dialog, dan ring nilai) berada di `css/style.css`.

Tampilan mengadopsi pola Material Design seperti app bar, cards, outlined fields, radio controls, dialogs, dan elevation. Aplikasi ini tetap HTML/CSS/JavaScript biasa, bukan aplikasi resmi Pusmendik/ANBK dan bukan proyek React Material UI.

## Mengubah judul dan pengaturan kuis

Buka `js/questions.js`, lalu edit bagian `window.QUIZ_CONFIG`:

```js
window.QUIZ_CONFIG = {
  id: 'quiz-informatika-smp',
  title: 'Kuis Informatika',
  description: 'Asah logika dan pengetahuan digitalmu.',
  secondsPerQuestion: 60,
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: true
};
```

`secondsPerQuestion` menentukan batas waktu untuk setiap soal. Contoh: 60 berarti 1 menit per soal.

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
