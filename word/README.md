# QuizLab Word

Varian QuizLab untuk latihan Microsoft Word dengan materi empat tab utama:

- **Home** — pemformatan font, paragraf, Styles, dan Editing.
- **Insert** — tabel, gambar, tautan, header/footer, nomor halaman, diagram, dan objek.
- **Layout** — margin, orientasi, ukuran kertas, kolom, indentasi, dan section.
- **Mail Merge** — dokumen utama, daftar penerima, merge field, preview, filter, dan Finish & Merge.

## Menjalankan

Buka folder `word/` melalui GitHub Pages atau jalankan `word/index.html` dengan Live Server.

- Bank soal: `word/js/questions.js`
- Mesin CBT: `word/js/app.js` (salinan mesin dari QuizLab utama)
- Tampilan: `word/css/`
- Ikon: `word/assets/icons.svg`

## Konfigurasi ujian

Satu sesi berisi 30 soal dengan durasi 45 menit. Bank berisi 60 soal (15 soal untuk setiap tab), dengan pemilihan acak berdasarkan topik dan tingkat kesulitan.

## Google Sheets

QuizLab Word **menggunakan URL Google Apps Script yang sama dengan QuizLab utama**. Endpoint tetap mengirim tiga data yang sama: nama peserta, waktu submit dari server, dan nilai akhir. Hasil akan masuk ke spreadsheet/tab yang sama dengan aplikasi utama.

Tidak ada file Apps Script baru dan tidak ada perubahan pada `../apps-script/Code.gs`. Jangan membuat deployment baru. Pastikan URL yang sudah terpasang pada QuizLab utama tetap aktif.

Karena Apps Script yang ada hanya menyimpan nama, waktu submit, dan nilai akhir, baris hasil dari QuizLab Word akan tercatat dengan format yang sama seperti hasil QuizLab utama.
