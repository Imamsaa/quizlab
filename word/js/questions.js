/*
 * BANK SOAL QUIZLAB WORD
 * Materi: Microsoft Word — Home, Insert, Layout, dan Mail Merge.
 * Satu sesi mengambil 30 soal secara acak dari bank 60 soal.
 * Komposisi: 7 mudah, 16 sedang, dan 7 sulit.
 * answer adalah indeks jawaban benar (0–3).
 */
window.QUIZ_CONFIG = {
  "id": "quizlab-word",
  "title": "Kuis Microsoft Word",
  "description": "Asesmen fitur Microsoft Word pada tab Home, Insert, Layout, dan Mail Merge.",
  "questionsPerSession": 30,
  "sessionDurationMinutes": 45,
  "googleAppsScriptUrl": "https://script.google.com/macros/s/AKfycbzRAqVPOOe982Rozm6K--1n2ZvKUqx5gYnVYjqs-zFtvYrgVvWMzNDNn1NHO1UAKTll/exec",
  "shuffleQuestions": true,
  "shuffleOptions": true,
  "showExplanation": true,
  "selectionPlan": [
    {
      "topicId": "home",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 2
      }
    },
    {
      "topicId": "insert",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 2
      }
    },
    {
      "topicId": "layout",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 1
      }
    },
    {
      "topicId": "mailmerge",
      "difficulties": {
        "mudah": 1,
        "sedang": 4,
        "sulit": 2
      }
    }
  ]
};

window.QUIZ_QUESTIONS = [
  {
    "id": "hm01",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "mudah",
    "question": "Tab Home pada Microsoft Word terutama digunakan untuk ....",
    "options": [
      "mengatur pemformatan teks dan paragraf",
      "menambahkan video dari internet",
      "mengatur ukuran kertas dan margin",
      "membuat daftar penerima surat"
    ],
    "answer": 0,
    "explanation": "Tab Home berisi perintah pemformatan seperti Font, Paragraph, Styles, dan Editing."
  },
  {
    "id": "hm02",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "mudah",
    "question": "Fungsi tombol Bold (B) adalah ....",
    "options": [
      "memiringkan teks",
      "menebalkan teks",
      "memberi garis bawah pada teks",
      "mengubah warna halaman"
    ],
    "answer": 1,
    "explanation": "Bold membuat karakter yang dipilih tampil lebih tebal."
  },
  {
    "id": "hm03",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "mudah",
    "question": "Untuk mengubah ukuran huruf, kita menggunakan kotak ....",
    "options": [
      "Font Color",
      "Text Highlight Color",
      "Font Size",
      "Line Spacing"
    ],
    "answer": 2,
    "explanation": "Font Size digunakan untuk menentukan ukuran huruf, biasanya dalam satuan point."
  },
  {
    "id": "hm04",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "mudah",
    "question": "Perintah Numbering pada grup Paragraph digunakan untuk ....",
    "options": [
      "membuat daftar bernomor secara berurutan",
      "menyisipkan nomor halaman",
      "menghitung jumlah kata",
      "mengurutkan halaman dokumen"
    ],
    "answer": 0,
    "explanation": "Numbering membuat daftar dengan nomor otomatis, misalnya 1, 2, 3."
  },
  {
    "id": "hm05",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Kamu ingin mengganti semua kata “sekolah” menjadi “madrasah” dalam dokumen. Perintah yang paling tepat adalah ....",
    "options": [
      "Select All",
      "Replace",
      "Format Painter",
      "Sort"
    ],
    "answer": 1,
    "explanation": "Replace pada grup Editing mencari teks tertentu lalu menggantinya dengan teks lain."
  },
  {
    "id": "hm06",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Fitur Format Painter berguna untuk ....",
    "options": [
      "menyalin format dari satu bagian teks ke bagian lain",
      "menyalin isi dokumen ke printer",
      "mengubah dokumen menjadi gambar",
      "menghapus semua format dokumen"
    ],
    "answer": 0,
    "explanation": "Format Painter menyalin pemformatan seperti jenis huruf, ukuran, warna, dan gaya."
  },
  {
    "id": "hm07",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Untuk mengatur jarak antarbaris paragraf, gunakan perintah ....",
    "options": [
      "Shading",
      "Borders",
      "Line and Paragraph Spacing",
      "Change Case"
    ],
    "answer": 2,
    "explanation": "Line and Paragraph Spacing mengatur jarak antarbaris serta jarak paragraf."
  },
  {
    "id": "hm08",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Agar teks rata pada sisi kiri dan kanan sekaligus, pilih perataan ....",
    "options": [
      "Align Left",
      "Center",
      "Align Right",
      "Justify"
    ],
    "answer": 3,
    "explanation": "Justify meratakan teks terhadap margin kiri dan kanan dengan menyesuaikan spasi antar kata."
  },
  {
    "id": "hm09",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Perintah Clear All Formatting digunakan ketika kita ingin ....",
    "options": [
      "menghapus pemformatan langsung dan mengembalikan teks ke format dasar",
      "menghapus seluruh isi dokumen",
      "menghapus halaman kosong",
      "menghapus komentar"
    ],
    "answer": 0,
    "explanation": "Clear All Formatting menghapus format karakter dan paragraf yang diterapkan secara langsung."
  },
  {
    "id": "hm10",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Untuk membuat daftar yang menggunakan simbol titik atau tanda tertentu, gunakan ....",
    "options": [
      "Sort",
      "Bullets",
      "Borders",
      "Find"
    ],
    "answer": 1,
    "explanation": "Bullets membuat daftar berpoin, sedangkan Numbering membuat daftar bernomor."
  },
  {
    "id": "hm11",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sedang",
    "question": "Mengapa Styles seperti Heading 1 dan Heading 2 sebaiknya digunakan pada judul?",
    "options": [
      "agar judul otomatis berubah menjadi gambar",
      "agar struktur dokumen konsisten dan dapat digunakan untuk navigasi atau daftar isi",
      "agar ukuran file selalu lebih kecil",
      "agar semua teks menjadi rata tengah"
    ],
    "answer": 1,
    "explanation": "Styles memberi struktur semantik dan format konsisten sehingga judul dapat dikenali oleh Navigation Pane dan daftar isi otomatis."
  },
  {
    "id": "hm12",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sulit",
    "question": "Kamu akan membuat daftar isi otomatis dari judul bab dan subbab. Langkah paling tepat sebelum membuka Table of Contents adalah ....",
    "options": [
      "menerapkan Styles Heading 1, Heading 2, dan seterusnya pada judul yang sesuai",
      "menebalkan semua judul secara manual",
      "memberi warna berbeda pada setiap judul",
      "menyusun titik-titik menggunakan tombol spasi"
    ],
    "answer": 0,
    "explanation": "Daftar isi otomatis membaca struktur heading, bukan sekadar teks yang dicetak tebal atau diperbesar."
  },
  {
    "id": "hm13",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sulit",
    "question": "Saat mencari kata “Word”, kamu hanya ingin menemukan kata utuh, bukan bagian dari kata “WordPress”. Pengaturan pencarian yang paling sesuai adalah ....",
    "options": [
      "Match case saja",
      "Use wildcards",
      "Find whole words only",
      "Reading Highlight"
    ],
    "answer": 2,
    "explanation": "Find whole words only membatasi hasil pada kata utuh sehingga bagian dari kata yang lebih panjang tidak ikut terpilih."
  },
  {
    "id": "hm14",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sulit",
    "question": "Sebuah paragraf harus memiliki indentasi hanya pada baris pertamanya. Cara yang paling konsisten adalah ....",
    "options": [
      "menekan spasi berkali-kali di awal paragraf",
      "menekan Tab pada setiap baris",
      "menggeser seluruh paragraf dengan Align Right",
      "mengatur Special: First line pada dialog Paragraph"
    ],
    "answer": 3,
    "explanation": "Pengaturan Special: First line membuat indentasi baris pertama secara konsisten, termasuk saat teks berubah atau dibungkus ke baris berikutnya."
  },
  {
    "id": "hm15",
    "chapter": "Microsoft Word — Home",
    "topicId": "home",
    "category": "HOME TAB",
    "difficulty": "sulit",
    "question": "Untuk membuat daftar bab bertingkat yang nomornya mengikuti struktur Heading 1 dan Heading 2, fitur yang paling tepat adalah ....",
    "options": [
      "Bullets biasa",
      "Multilevel List yang ditautkan ke Heading Styles",
      "Text Highlight Color",
      "Increase Font Size"
    ],
    "answer": 1,
    "explanation": "Multilevel List dapat dihubungkan dengan level Heading sehingga penomoran bab dan subbab mengikuti struktur dokumen."
  },
  {
    "id": "in01",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "mudah",
    "question": "Tab Insert digunakan untuk ....",
    "options": [
      "menyisipkan objek atau elemen ke dalam dokumen",
      "mengatur ukuran margin saja",
      "mengubah tema Windows",
      "memeriksa ejaan saja"
    ],
    "answer": 0,
    "explanation": "Tab Insert menyediakan perintah untuk menambahkan tabel, gambar, tautan, header, nomor halaman, dan objek lain."
  },
  {
    "id": "in02",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "mudah",
    "question": "Untuk menambahkan tabel ke dokumen, pilih perintah ....",
    "options": [
      "WordArt",
      "Table",
      "Bookmark",
      "Equation"
    ],
    "answer": 1,
    "explanation": "Table digunakan untuk menyisipkan tabel dengan jumlah baris dan kolom yang dibutuhkan."
  },
  {
    "id": "in03",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "mudah",
    "question": "Untuk memasukkan foto dari komputer ke dokumen, gunakan ....",
    "options": [
      "Page Color",
      "SmartArt",
      "Pictures",
      "Columns"
    ],
    "answer": 2,
    "explanation": "Pictures digunakan untuk menyisipkan gambar dari perangkat atau sumber yang tersedia."
  },
  {
    "id": "in04",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "mudah",
    "question": "Bagian dokumen yang tampil berulang di area atas setiap halaman disebut ....",
    "options": [
      "Footer",
      "Caption",
      "Text Box",
      "Header"
    ],
    "answer": 3,
    "explanation": "Header berada di bagian atas halaman dan dapat memuat teks, logo, atau informasi berulang."
  },
  {
    "id": "in05",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Kamu ingin memulai isi bab baru tepat pada halaman berikutnya tanpa menekan Enter berkali-kali. Gunakan ....",
    "options": [
      "Page Break",
      "Page Color",
      "Drop Cap",
      "Bookmark"
    ],
    "answer": 0,
    "explanation": "Page Break memaksa konten setelah titik tersebut dimulai pada halaman baru."
  },
  {
    "id": "in06",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Untuk membuat teks tertentu dapat diklik dan membuka sebuah situs web, gunakan ....",
    "options": [
      "Symbol",
      "Hyperlink",
      "Header",
      "Page Number"
    ],
    "answer": 1,
    "explanation": "Hyperlink menghubungkan teks atau objek dengan alamat web, file, alamat email, atau lokasi dalam dokumen."
  },
  {
    "id": "in07",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Nomor halaman yang otomatis mengikuti urutan halaman dapat ditambahkan melalui ....",
    "options": [
      "Text Box",
      "WordArt",
      "Page Number",
      "Screenshot"
    ],
    "answer": 2,
    "explanation": "Page Number menyisipkan nomor halaman pada posisi yang dipilih dan memperbarui urutannya secara otomatis."
  },
  {
    "id": "in08",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Jika ingin menempatkan kutipan atau informasi dalam kotak yang dapat dipindahkan secara terpisah, gunakan ....",
    "options": [
      "Columns",
      "Page Break",
      "Symbol",
      "Text Box"
    ],
    "answer": 3,
    "explanation": "Text Box membuat area teks tersendiri yang dapat diposisikan dan diformat terpisah dari alur teks utama."
  },
  {
    "id": "in09",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Perintah Shapes digunakan untuk ....",
    "options": [
      "menambahkan bentuk seperti panah, persegi, dan lingkaran",
      "mengubah ukuran kertas",
      "mengatur jarak baris",
      "mengirim email massal"
    ],
    "answer": 0,
    "explanation": "Shapes menyediakan objek grafis seperti garis, panah, bentuk geometri, dan callout."
  },
  {
    "id": "in10",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Kamu ingin membuat bagan proses yang terdiri dari beberapa kotak dan panah. Fitur yang paling sesuai adalah ....",
    "options": [
      "Page Number",
      "SmartArt",
      "Footer",
      "Find"
    ],
    "answer": 1,
    "explanation": "SmartArt menyediakan diagram siap pakai untuk proses, hierarki, siklus, dan hubungan."
  },
  {
    "id": "in11",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sedang",
    "question": "Untuk menyajikan data angka menjadi diagram batang atau lingkaran, gunakan ....",
    "options": [
      "WordArt",
      "Bookmark",
      "Chart",
      "Drop Cap"
    ],
    "answer": 2,
    "explanation": "Chart membuat grafik yang dapat diisi dan diedit datanya untuk menyajikan informasi secara visual."
  },
  {
    "id": "in12",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sulit",
    "question": "Dua atau lebih sel tabel akan dijadikan satu sel besar untuk judul tabel. Setelah memilih sel-sel tersebut, gunakan ....",
    "options": [
      "Split Cells",
      "Repeat Header Rows",
      "Sort",
      "Merge Cells"
    ],
    "answer": 3,
    "explanation": "Merge Cells menggabungkan beberapa sel terpilih menjadi satu sel."
  },
  {
    "id": "in13",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sulit",
    "question": "Kamu ingin membuat tautan menuju bagian tertentu dalam dokumen yang panjang. Urutan fitur yang tepat adalah ....",
    "options": [
      "membuat Bookmark pada lokasi tujuan, lalu membuat Hyperlink menuju bookmark tersebut",
      "menambahkan Footer lalu memilih Page Number",
      "membuat Shape lalu mengubah ukurannya",
      "menggunakan Page Color lalu memilih warna"
    ],
    "answer": 0,
    "explanation": "Bookmark menandai lokasi dalam dokumen. Hyperlink dapat diarahkan ke bookmark itu agar pembaca melompat ke lokasi tujuan."
  },
  {
    "id": "in14",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sulit",
    "question": "Untuk menulis rumus matematika seperti pecahan bertingkat atau integral dengan tata letak khusus, gunakan ....",
    "options": [
      "WordArt",
      "Equation",
      "Screenshot",
      "Text Highlight"
    ],
    "answer": 1,
    "explanation": "Equation menyediakan editor persamaan dengan struktur matematika seperti pecahan, akar, integral, dan simbol."
  },
  {
    "id": "in15",
    "chapter": "Microsoft Word — Insert",
    "topicId": "insert",
    "category": "INSERT TAB",
    "difficulty": "sulit",
    "question": "Kamu perlu memasukkan grafik yang datanya dapat diedit kembali setelah disisipkan ke Word. Pilihan paling tepat adalah ....",
    "options": [
      "mengambil foto grafik dari layar",
      "menggambar grafik menggunakan spasi",
      "menyisipkan Chart lalu mengedit data grafiknya",
      "mengetik label sumbu secara manual"
    ],
    "answer": 2,
    "explanation": "Objek Chart menyimpan struktur grafik dan data yang mendasarinya sehingga grafik dapat diperbarui tanpa menggambar ulang."
  },
  {
    "id": "ly01",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "mudah",
    "question": "Perintah Margins digunakan untuk mengatur ....",
    "options": [
      "jarak tepi halaman dengan area pengetikan",
      "warna huruf",
      "jenis daftar berpoin",
      "nomor halaman"
    ],
    "answer": 0,
    "explanation": "Margins mengatur ruang kosong pada sisi atas, bawah, kiri, dan kanan halaman."
  },
  {
    "id": "ly02",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "mudah",
    "question": "Orientasi halaman mendatar disebut ....",
    "options": [
      "Portrait",
      "Landscape",
      "A4",
      "Narrow"
    ],
    "answer": 1,
    "explanation": "Landscape adalah orientasi mendatar, sedangkan Portrait adalah orientasi tegak."
  },
  {
    "id": "ly03",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "mudah",
    "question": "Untuk mengatur ukuran kertas menjadi A4, pilih perintah ....",
    "options": [
      "Columns",
      "Breaks",
      "Size",
      "Indent"
    ],
    "answer": 2,
    "explanation": "Size menyediakan pilihan ukuran kertas, termasuk A4, Letter, dan Legal."
  },
  {
    "id": "ly04",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "mudah",
    "question": "Perintah Columns digunakan untuk ....",
    "options": [
      "mengubah warna halaman",
      "menambahkan komentar",
      "mengatur ukuran huruf",
      "membagi teks ke dalam beberapa kolom"
    ],
    "answer": 3,
    "explanation": "Columns membagi area teks menjadi dua atau lebih kolom seperti pada buletin atau koran."
  },
  {
    "id": "ly05",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Sebuah dokumen harus memiliki satu halaman Landscape di tengah halaman lain yang Portrait. Fitur yang paling penting untuk digunakan adalah ....",
    "options": [
      "Section Break",
      "Page Color",
      "Format Painter",
      "WordArt"
    ],
    "answer": 0,
    "explanation": "Section Break memisahkan bagian dokumen sehingga pengaturan orientasi dapat diterapkan hanya pada section tertentu."
  },
  {
    "id": "ly06",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Gambar yang disisipkan menutupi teks dan sulit dipindahkan. Pengaturan yang membantu mengatur hubungan gambar dengan teks adalah ....",
    "options": [
      "Line Spacing",
      "Wrap Text",
      "Font Size",
      "Numbering"
    ],
    "answer": 1,
    "explanation": "Wrap Text mengatur apakah teks berada sebaris, mengelilingi, di belakang, atau di depan objek."
  },
  {
    "id": "ly07",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Untuk menempatkan objek tepat di tengah area halaman secara horizontal, gunakan pengaturan ....",
    "options": [
      "Margins",
      "Hyphenation",
      "Align pada Arrange",
      "Page Number"
    ],
    "answer": 2,
    "explanation": "Pengaturan Align pada kelompok Arrange membantu menyelaraskan objek terhadap halaman, margin, atau objek lain."
  },
  {
    "id": "ly08",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Agar jarak antara paragraf satu dan paragraf berikutnya lebih renggang tanpa menekan Enter tambahan, ubah ....",
    "options": [
      "Font Color",
      "Columns",
      "Page Size",
      "Spacing Before/After"
    ],
    "answer": 3,
    "explanation": "Spacing Before dan After mengatur jarak sebelum atau sesudah paragraf secara terukur."
  },
  {
    "id": "ly09",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Indent Left dan Indent Right pada kelompok Paragraph digunakan untuk ....",
    "options": [
      "menggeser batas paragraf dari margin kiri atau kanan",
      "mengubah arah orientasi halaman",
      "menambahkan nomor halaman",
      "membuat tautan"
    ],
    "answer": 0,
    "explanation": "Indent mengatur posisi paragraf terhadap margin, berbeda dari margin yang mengatur seluruh area halaman."
  },
  {
    "id": "ly10",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Sebuah artikel perlu dibaca seperti koran dengan tiga lajur teks. Fitur yang digunakan adalah ....",
    "options": [
      "Margins",
      "Columns",
      "Orientation",
      "Size"
    ],
    "answer": 1,
    "explanation": "Columns membagi teks menjadi lajur-lajur yang mengalir dari satu kolom ke kolom berikutnya."
  },
  {
    "id": "ly11",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sedang",
    "question": "Apa perbedaan utama Page Break dan Section Break?",
    "options": [
      "keduanya selalu membuat dokumen menjadi dua file",
      "Page Break mengubah ukuran kertas, Section Break mengubah font",
      "Page Break memulai halaman baru, Section Break memulai bagian baru yang dapat memiliki pengaturan berbeda",
      "Section Break hanya digunakan untuk menyisipkan gambar"
    ],
    "answer": 2,
    "explanation": "Section Break membagi dokumen menjadi section yang dapat memiliki format halaman, header, footer, atau kolom berbeda."
  },
  {
    "id": "ly12",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sulit",
    "question": "Kamu hanya ingin halaman ketiga menjadi Landscape, sedangkan halaman kedua dan keempat tetap Portrait. Prosedur yang paling tepat adalah ....",
    "options": [
      "mengubah Orientation ke Landscape tanpa memilih teks",
      "mengatur ukuran Font pada halaman ketiga",
      "menambahkan Page Break satu kali saja",
      "membuat Section Break sebelum dan sesudah halaman ketiga, lalu mengubah orientasi pada section tersebut"
    ],
    "answer": 3,
    "explanation": "Section Break di kedua sisi halaman ketiga mengisolasi halaman itu ke section tersendiri sehingga orientasinya dapat diubah tanpa memengaruhi halaman lain."
  },
  {
    "id": "ly13",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sulit",
    "question": "Dokumen akan dicetak seperti buku dengan halaman berhadapan. Pengaturan margin yang sesuai adalah ....",
    "options": [
      "Mirror Margins",
      "Narrow",
      "Columns",
      "Line Numbers"
    ],
    "answer": 0,
    "explanation": "Mirror Margins membuat margin dalam dan luar saling mencerminkan pada halaman berhadapan, sesuai kebutuhan penjilidan."
  },
  {
    "id": "ly14",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sulit",
    "question": "Kamu ingin menerapkan dua kolom hanya pada satu bagian teks di tengah dokumen, sementara paragraf sebelum dan sesudahnya tetap satu kolom. Langkah terbaik adalah ....",
    "options": [
      "memilih seluruh dokumen lalu mengatur Columns",
      "membatasi bagian tersebut dengan Section Break, lalu menerapkan Columns pada section itu",
      "mengubah ukuran kertas menjadi A3",
      "menggeser teks menggunakan spasi"
    ],
    "answer": 1,
    "explanation": "Section Break membatasi cakupan pengaturan kolom agar bagian lain tidak ikut berubah."
  },
  {
    "id": "ly15",
    "chapter": "Microsoft Word — Layout",
    "topicId": "layout",
    "category": "LAYOUT TAB",
    "difficulty": "sulit",
    "question": "Saat mengatur Columns untuk bagian tertentu, pilihan Apply to: Selected text atau This section penting karena ....",
    "options": [
      "menentukan warna kolom",
      "mengubah semua font menjadi sama",
      "menentukan cakupan bagian dokumen yang terkena perubahan kolom",
      "menyisipkan tabel baru"
    ],
    "answer": 2,
    "explanation": "Cakupan Apply to menentukan apakah pengaturan diterapkan pada teks terpilih, section aktif, atau seluruh dokumen."
  },
  {
    "id": "mm01",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "mudah",
    "question": "Mail Merge pada Microsoft Word digunakan untuk ....",
    "options": [
      "membuat banyak dokumen personal dari satu template dan sumber data",
      "mengatur margin halaman",
      "menggabungkan dua gambar",
      "membuat animasi"
    ],
    "answer": 0,
    "explanation": "Mail Merge menggabungkan dokumen utama dengan data penerima agar surat, label, atau email dapat dibuat secara massal dan personal."
  },
  {
    "id": "mm02",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "mudah",
    "question": "Sumber data penerima Mail Merge sering disiapkan menggunakan ....",
    "options": [
      "Paint",
      "Microsoft Excel",
      "Calculator",
      "Media Player"
    ],
    "answer": 1,
    "explanation": "Excel umum digunakan karena data penerima tersusun rapi dalam kolom dan baris."
  },
  {
    "id": "mm03",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "mudah",
    "question": "Teks seperti «Nama» pada dokumen utama Mail Merge disebut ....",
    "options": [
      "Page Break",
      "Footer",
      "Merge Field",
      "WordArt"
    ],
    "answer": 2,
    "explanation": "Merge Field adalah penanda yang akan diganti dengan nilai dari kolom sumber data untuk setiap penerima."
  },
  {
    "id": "mm04",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "mudah",
    "question": "Setelah memeriksa hasil penggabungan, perintah untuk menghasilkan dokumen akhir adalah ....",
    "options": [
      "Insert Table",
      "Page Layout",
      "Format Painter",
      "Finish & Merge"
    ],
    "answer": 3,
    "explanation": "Finish & Merge menyelesaikan proses dan dapat menghasilkan dokumen individual, mencetak, atau mengirim email."
  },
  {
    "id": "mm05",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Urutan awal Mail Merge yang paling tepat adalah ....",
    "options": [
      "memilih jenis dokumen, memilih daftar penerima, lalu menulis atau menyiapkan dokumen utama",
      "mencetak dokumen kosong, lalu menambahkan data",
      "mengatur warna halaman, lalu membuat tabel",
      "menyimpan dokumen sebagai gambar, lalu mengirimnya"
    ],
    "answer": 0,
    "explanation": "Alur umum dimulai dengan memilih jenis dokumen, menghubungkan penerima, menyusun dokumen utama, dan menyisipkan merge field."
  },
  {
    "id": "mm06",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Untuk memakai daftar penerima yang sudah dibuat pada file Excel, pilih ....",
    "options": [
      "Use Existing List",
      "Start New Page",
      "Insert Caption",
      "Track Changes"
    ],
    "answer": 0,
    "explanation": "Use an Existing List menghubungkan Mail Merge dengan sumber data yang sudah tersedia seperti workbook Excel."
  },
  {
    "id": "mm07",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Pada file Excel sumber Mail Merge, baris pertama sebaiknya berisi ....",
    "options": [
      "data penerima pertama",
      "judul kolom seperti Nama, Alamat, dan Kota",
      "rumus total seluruh penerima",
      "gambar logo"
    ],
    "answer": 1,
    "explanation": "Baris pertama berisi nama field atau header kolom sehingga Word dapat mengenali data yang akan dipanggil."
  },
  {
    "id": "mm08",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Fungsi Preview Results adalah ....",
    "options": [
      "menghapus sumber data",
      "mengurutkan semua halaman Word",
      "melihat contoh hasil merge dengan data penerima sebenarnya",
      "mengubah dokumen utama menjadi PDF otomatis"
    ],
    "answer": 2,
    "explanation": "Preview Results menampilkan dokumen dengan nilai dari baris penerima sehingga kesalahan field atau tata letak dapat diperiksa."
  },
  {
    "id": "mm09",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Jika ingin setiap surat hasil Mail Merge dapat diedit satu per satu sebelum dicetak, pilih ....",
    "options": [
      "Insert Page Number",
      "Edit Individual Documents",
      "Change Orientation",
      "Format Painter"
    ],
    "answer": 1,
    "explanation": "Edit Individual Documents membuat dokumen gabungan yang berisi hasil untuk penerima sehingga dapat diperiksa dan disunting."
  },
  {
    "id": "mm10",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Kamu hanya ingin mengirim surat kepada penerima dari kecamatan tertentu. Fitur yang digunakan adalah ....",
    "options": [
      "Filter Recipients",
      "Insert Symbol",
      "Page Break",
      "Text Highlight"
    ],
    "answer": 0,
    "explanation": "Filter pada daftar penerima membatasi baris data yang akan digunakan berdasarkan kriteria tertentu."
  },
  {
    "id": "mm11",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sedang",
    "question": "Untuk menyusun penerima berdasarkan nama dari A sampai Z sebelum proses merge, gunakan ....",
    "options": [
      "Preview Results",
      "Sort pada daftar penerima",
      "Insert Merge Field",
      "Finish & Merge"
    ],
    "answer": 1,
    "explanation": "Sort mengurutkan baris penerima berdasarkan field yang dipilih, misalnya nama secara alfabetis."
  },
  {
    "id": "mm12",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sulit",
    "question": "Sebuah surat harus menampilkan sapaan “Bapak” atau “Ibu” sesuai nilai pada kolom JenisKelamin. Fitur Mail Merge yang dapat membuat kondisi seperti itu adalah ....",
    "options": [
      "Insert Page Number",
      "Rules: If...Then...Else",
      "Change Case",
      "Track Changes"
    ],
    "answer": 1,
    "explanation": "Rule If...Then...Else menampilkan teks berbeda berdasarkan kondisi pada field sumber data."
  },
  {
    "id": "mm13",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sulit",
    "question": "Kamu ingin mencetak alamat pada lembar stiker yang berisi banyak label dalam satu halaman. Jenis dokumen Mail Merge yang tepat adalah ....",
    "options": [
      "Letters",
      "E-mail Messages",
      "Labels",
      "Directory of Images"
    ],
    "answer": 2,
    "explanation": "Labels dirancang untuk menempatkan data penerima pada format label dengan beberapa label per halaman."
  },
  {
    "id": "mm14",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sulit",
    "question": "Satu template surat memuat field «Nama» dan «Alamat». Namun, saat Preview Results, kolom alamat justru muncul di bagian nama. Hal pertama yang sebaiknya diperiksa adalah ....",
    "options": [
      "pemetaan dan nama field pada sumber data serta posisi Merge Field di dokumen utama",
      "warna font pada tab Home",
      "ukuran kertas pada tab Layout",
      "jumlah halaman dokumen"
    ],
    "answer": 0,
    "explanation": "Kesalahan isi field biasanya disebabkan oleh pemilihan kolom yang tidak sesuai atau penempatan Merge Field yang tertukar."
  },
  {
    "id": "mm15",
    "chapter": "Microsoft Word — Mail Merge",
    "topicId": "mailmerge",
    "category": "MAIL MERGE",
    "difficulty": "sulit",
    "question": "Saat membuat Mail Merge untuk tanggal undangan, nilai tanggal dari Excel tampil dengan format angka yang tidak diharapkan. Tindakan yang paling tepat adalah ....",
    "options": [
      "menghapus seluruh kolom tanggal",
      "memeriksa format data sumber dan mengatur format field tanggal pada dokumen merge",
      "mengubah semua tanggal menjadi gambar",
      "mengganti semua penerima dengan data manual"
    ],
    "answer": 1,
    "explanation": "Format tanggal dapat dipengaruhi format sel sumber dan switch format pada field merge. Keduanya perlu diperiksa agar tampilan tanggal konsisten."
  }
];
