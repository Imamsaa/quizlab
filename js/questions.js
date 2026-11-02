/*
 * BANK SOAL UJIAN KHUSUS 9A — INFORMATIKA KELAS IX SEMESTER 1
 * Berbasis materi dan latihan dalam buku Informatika Kelas IX Semester 1.
 * Setiap soal memuat chapter, topicId, difficulty, dan sourcePages.
 * answer adalah indeks jawaban benar (0–3). Satu sesi mengambil tepat 30 soal
 * menggunakan selectionPlan agar cakupan topik dan tingkat kesulitan konsisten.
 */
window.QUIZ_CONFIG = {
  id: 'quiz-informatika-smp',
  title: 'Ujian Khusus 9A',
  description: 'Asesmen Informatika kelas IX semester 1 berdasarkan materi dan latihan dalam buku.',
  questionsPerSession: 30,
  sessionDurationMinutes: 45,
  googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbzRAqVPOOe982Rozm6K--1n2ZvKUqx5gYnVYjqs-zFtvYrgVvWMzNDNn1NHO1UAKTll/exec',
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: true,
  selectionPlan: [
  {
    "topicId": "struktur-data",
    "difficulties": {
      "mudah": 2,
      "sedang": 2,
      "sulit": 1
    }
  },
  {
    "topicId": "ekspresi-logika",
    "difficulties": {
      "mudah": 2,
      "sedang": 2,
      "sulit": 1
    }
  },
  {
    "topicId": "algoritma",
    "difficulties": {
      "mudah": 1,
      "sedang": 3,
      "sulit": 1
    }
  },
  {
    "topicId": "analisis-integrasi",
    "difficulties": {
      "mudah": 1,
      "sedang": 3,
      "sulit": 1
    }
  },
  {
    "topicId": "blog",
    "difficulties": {
      "mudah": 1,
      "sedang": 3,
      "sulit": 1
    }
  },
  {
    "topicId": "vlog",
    "difficulties": {
      "mudah": 1,
      "sedang": 3,
      "sulit": 1
    }
  }
]
};

window.QUIZ_QUESTIONS = [
  {
    "id": "sd01",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "mudah",
    "sourcePages": "3–8",
    "question": "Dalam informatika, struktur data digunakan untuk ....",
    "options": [
      "mengatur, menyimpan, dan mengelola data agar mudah digunakan",
      "memperbesar ukuran layar komputer",
      "mengganti sistem operasi secara otomatis",
      "menghubungkan komputer ke sumber listrik"
    ],
    "answer": 0,
    "explanation": "Struktur data adalah cara atau metode untuk menyusun, menyimpan, dan mengorganisasi data agar dapat diakses serta dikelola secara efisien."
  },
  {
    "id": "sd02",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "mudah",
    "sourcePages": "3–8",
    "question": "Kumpulan data yang disimpan pada lokasi memori yang berdekatan dan dapat diakses melalui indeks disebut ....",
    "options": [
      "Queue",
      "Array",
      "Graph",
      "Tree"
    ],
    "answer": 1,
    "explanation": "Array menyimpan kumpulan data pada lokasi memori yang berdekatan. Elemen dapat diakses menggunakan indeks."
  },
  {
    "id": "sd03",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "mudah",
    "sourcePages": "3–8",
    "question": "Pada linked list, setiap elemen atau node umumnya menyimpan data dan ....",
    "options": [
      "alamat atau referensi ke node berikutnya",
      "warna latar belakang komputer",
      "nama sistem operasi",
      "ukuran layar"
    ],
    "answer": 0,
    "explanation": "Node pada linked list memuat data dan pointer atau referensi yang menghubungkannya ke node lain."
  },
  {
    "id": "sd04",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "mudah",
    "sourcePages": "3–8",
    "question": "Struktur data yang menerapkan aturan LIFO (Last In, First Out) adalah ....",
    "options": [
      "Queue",
      "Graph",
      "Stack",
      "Array"
    ],
    "answer": 2,
    "explanation": "Stack menggunakan aturan LIFO: data yang terakhir dimasukkan akan menjadi data pertama yang dikeluarkan."
  },
  {
    "id": "sd05",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "mudah",
    "sourcePages": "3–8",
    "question": "Struktur data yang menerapkan aturan FIFO (First In, First Out) adalah ....",
    "options": [
      "Tree",
      "Queue",
      "Stack",
      "Graph"
    ],
    "answer": 1,
    "explanation": "Queue menggunakan aturan FIFO: data yang pertama masuk akan menjadi data pertama yang keluar."
  },
  {
    "id": "sd06",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Mengapa elemen array dapat diakses secara langsung menggunakan indeks?",
    "options": [
      "Karena semua elemennya selalu bernilai sama",
      "Karena array menyimpan elemen pada lokasi memori yang berdekatan",
      "Karena setiap elemen harus dicari dari awal",
      "Karena array tidak memiliki urutan"
    ],
    "answer": 1,
    "explanation": "Penyimpanan elemen array pada lokasi memori yang berdekatan memungkinkan akses berdasarkan indeks secara langsung."
  },
  {
    "id": "sd07",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Pada singly linked list, satu node biasanya memiliki referensi menuju ....",
    "options": [
      "node sebelumnya dan sesudahnya",
      "semua node sekaligus",
      "node berikutnya saja",
      "root pada sebuah tree"
    ],
    "answer": 2,
    "explanation": "Singly linked list memiliki satu tautan dari setiap node menuju node berikutnya."
  },
  {
    "id": "sd08",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Apa kelebihan utama doubly linked list dibanding singly linked list?",
    "options": [
      "Dapat bergerak melalui tautan ke node sebelumnya maupun berikutnya",
      "Tidak membutuhkan node",
      "Selalu menggunakan memori lebih sedikit",
      "Tidak memiliki urutan data"
    ],
    "answer": 0,
    "explanation": "Doubly linked list memiliki tautan ke node sebelumnya dan berikutnya sehingga penelusuran dapat dilakukan dua arah."
  },
  {
    "id": "sd09",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Pada circular linked list, node terakhir menunjuk ke ....",
    "options": [
      "node yang tidak memiliki data",
      "node pertama sehingga membentuk lingkaran",
      "node dengan indeks terkecil di array lain",
      "root dari tree"
    ],
    "answer": 1,
    "explanation": "Pada circular linked list, tautan node terakhir kembali ke node pertama dan membentuk struktur melingkar."
  },
  {
    "id": "sd10",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Operasi untuk menambahkan data ke dalam queue disebut ..., sedangkan mengambil data disebut ....",
    "options": [
      "push dan pop",
      "enqueue dan dequeue",
      "insert dan search",
      "root dan leaf"
    ],
    "answer": 1,
    "explanation": "Penambahan data ke queue disebut enqueue, sedangkan pengambilan data disebut dequeue."
  },
  {
    "id": "sd11",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Dalam struktur data tree, node yang berada paling atas disebut ....",
    "options": [
      "Leaf",
      "Sibling",
      "Root",
      "Edge"
    ],
    "answer": 2,
    "explanation": "Root adalah node yang terletak di bagian paling atas sebuah tree."
  },
  {
    "id": "sd12",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sedang",
    "sourcePages": "3–8",
    "question": "Dalam struktur data graph, vertex dan edge masing-masing berarti ....",
    "options": [
      "data dan indeks",
      "simpul dan sisi penghubung",
      "root dan leaf",
      "baris dan kolom"
    ],
    "answer": 1,
    "explanation": "Graph terdiri dari vertex (simpul) dan edge (sisi) yang menghubungkan pasangan simpul."
  },
  {
    "id": "sd13",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sulit",
    "sourcePages": "3–8",
    "question": "Aplikasi catatan menyimpan riwayat tindakan. Ketika pengguna menekan Undo, tindakan paling baru harus dibatalkan lebih dahulu. Struktur data yang paling sesuai adalah ....",
    "options": [
      "Queue, karena data pertama harus keluar lebih dahulu",
      "Stack, karena tindakan terakhir dibatalkan lebih dahulu",
      "Tree, karena data harus memiliki root",
      "Array, karena semua data harus diurutkan alfabetis"
    ],
    "answer": 1,
    "explanation": "Undo mengikuti pola LIFO. Stack cocok karena tindakan terakhir yang dimasukkan akan diambil atau dibatalkan terlebih dahulu."
  },
  {
    "id": "sd14",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sulit",
    "sourcePages": "3–8",
    "question": "Sebuah peta jalan menghubungkan banyak lokasi. Satu lokasi dapat terhubung ke beberapa lokasi lain tanpa harus membentuk hubungan induk-anak. Struktur data yang paling tepat adalah ....",
    "options": [
      "Tree",
      "Stack",
      "Graph",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Graph memodelkan hubungan antarsimpul melalui edge dan tidak harus memiliki hierarki parent-child seperti tree."
  },
  {
    "id": "sd15",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "struktur-data",
    "category": "STRUKTUR DATA",
    "difficulty": "sulit",
    "sourcePages": "3–8",
    "question": "Pada sebuah tree, node A memiliki anak B dan C. Node B memiliki anak D dan E, sedangkan C tidak memiliki anak. Pernyataan yang benar adalah ....",
    "options": [
      "A adalah leaf dan C adalah root",
      "D dan E adalah parent node",
      "C, D, dan E adalah leaf node",
      "B dan C adalah sibling sekaligus leaf"
    ],
    "answer": 2,
    "explanation": "Leaf node adalah node yang tidak mempunyai turunan. Pada struktur tersebut C, D, dan E tidak memiliki anak."
  },
  {
    "id": "lg01",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "mudah",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Ekspresi yang menggunakan operator penjumlahan, pengurangan, perkalian, atau pembagian disebut ekspresi ....",
    "options": [
      "relasional",
      "aritmatika",
      "string",
      "logika"
    ],
    "answer": 1,
    "explanation": "Ekspresi aritmatika memuat operator untuk operasi hitung seperti tambah, kurang, kali, dan bagi."
  },
  {
    "id": "lg02",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "mudah",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Ekspresi relasional digunakan untuk ....",
    "options": [
      "membandingkan nilai dan menghasilkan benar atau salah",
      "menyimpan gambar ke dalam folder",
      "menghubungkan node pada linked list",
      "mengulangi perintah tanpa kondisi"
    ],
    "answer": 0,
    "explanation": "Ekspresi relasional membandingkan dua nilai dan menghasilkan nilai Boolean, yaitu true atau false."
  },
  {
    "id": "lg03",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "mudah",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operator NOT berfungsi untuk ....",
    "options": [
      "menjumlahkan dua bilangan",
      "membalik nilai kebenaran",
      "menghasilkan true jika kedua input true",
      "menggabungkan dua teks"
    ],
    "answer": 1,
    "explanation": "NOT merupakan operator negasi yang membalik nilai Boolean: true menjadi false dan false menjadi true."
  },
  {
    "id": "lg04",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "mudah",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operator AND menghasilkan true apabila ....",
    "options": [
      "kedua input bernilai true",
      "setidaknya satu input bernilai true",
      "kedua input bernilai false",
      "input pertama selalu false"
    ],
    "answer": 0,
    "explanation": "AND menghasilkan true hanya jika kedua operand bernilai true."
  },
  {
    "id": "lg05",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "mudah",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operator OR menghasilkan false apabila ....",
    "options": [
      "kedua input bernilai true",
      "salah satu input bernilai true",
      "kedua input bernilai false",
      "input pertama bernilai true"
    ],
    "answer": 2,
    "explanation": "OR menghasilkan false hanya ketika semua input bernilai false."
  },
  {
    "id": "lg06",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Diketahui A = TRUE dan B = FALSE. Nilai dari A AND (NOT B) adalah ....",
    "options": [
      "TRUE",
      "FALSE",
      "tidak terdefinisi",
      "bergantung pada tipe data"
    ],
    "answer": 0,
    "explanation": "NOT B bernilai TRUE. Karena A juga TRUE, maka TRUE AND TRUE menghasilkan TRUE."
  },
  {
    "id": "lg07",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Jika A = 1 dan B = 0, hasil operasi A AND B adalah ....",
    "options": [
      "1",
      "0",
      "2",
      "tidak terdefinisi"
    ],
    "answer": 1,
    "explanation": "AND hanya menghasilkan 1 jika kedua input bernilai 1. Karena B bernilai 0, hasilnya 0."
  },
  {
    "id": "lg08",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Jika A = 0 dan B = 0, hasil operasi A OR B adalah ....",
    "options": [
      "1",
      "2",
      "0",
      "tidak terdefinisi"
    ],
    "answer": 2,
    "explanation": "OR menghasilkan 0 ketika kedua input bernilai 0."
  },
  {
    "id": "lg09",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operator Exclusive OR (XOR) menghasilkan true ketika ....",
    "options": [
      "kedua input sama",
      "kedua input berbeda",
      "kedua input selalu false",
      "salah satu input tidak diperiksa"
    ],
    "answer": 1,
    "explanation": "XOR bernilai true ketika kedua input berbeda, dan false ketika keduanya sama."
  },
  {
    "id": "lg10",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operasi NAND merupakan kombinasi dari operasi ....",
    "options": [
      "AND kemudian NOT",
      "OR kemudian NOT",
      "XOR kemudian OR",
      "NOT kemudian XOR"
    ],
    "answer": 0,
    "explanation": "NAND adalah negasi dari AND. Hasil AND dibalik menggunakan NOT."
  },
  {
    "id": "lg11",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Operasi NOR merupakan kombinasi dari operasi ....",
    "options": [
      "AND dan OR",
      "OR dan NOT",
      "XOR dan NOT",
      "AND dan XOR"
    ],
    "answer": 1,
    "explanation": "NOR adalah negasi dari OR, yaitu hasil operasi OR yang dibalik."
  },
  {
    "id": "lg12",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sedang",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Ekspresi yang menggabungkan dua teks, misalnya \"Informatika\" dan \"9A\", termasuk ekspresi ....",
    "options": [
      "aritmatika",
      "relasional",
      "string",
      "tree"
    ],
    "answer": 2,
    "explanation": "Ekspresi string mengolah teks. Salah satu contohnya adalah penggabungan dua teks atau concatenation."
  },
  {
    "id": "lg13",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sulit",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Diketahui A = FALSE, B = TRUE, dan C = FALSE. Nilai dari (A OR B) AND (NOT C) adalah ....",
    "options": [
      "FALSE",
      "TRUE",
      "0,5",
      "tidak dapat ditentukan"
    ],
    "answer": 1,
    "explanation": "A OR B bernilai TRUE. NOT C juga TRUE. Maka TRUE AND TRUE menghasilkan TRUE."
  },
  {
    "id": "lg14",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sulit",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Pernyataan yang membedakan XOR dan OR ketika kedua input bernilai TRUE adalah ....",
    "options": [
      "XOR dan OR sama-sama menghasilkan FALSE",
      "XOR menghasilkan FALSE, sedangkan OR menghasilkan TRUE",
      "XOR menghasilkan TRUE, sedangkan OR menghasilkan FALSE",
      "Keduanya tidak menghasilkan nilai Boolean"
    ],
    "answer": 1,
    "explanation": "OR bernilai true jika minimal satu input true. XOR hanya true jika input berbeda; karena kedua input sama-sama true, XOR bernilai false."
  },
  {
    "id": "lg15",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "ekspresi-logika",
    "category": "EKSPRESI & OPERASI LOGIKA",
    "difficulty": "sulit",
    "sourcePages": "8–10, 16–18, 20–23",
    "question": "Jika A = TRUE dan B = TRUE, hasil operasi NAND adalah ....",
    "options": [
      "TRUE",
      "FALSE",
      "2",
      "tidak terdefinisi"
    ],
    "answer": 1,
    "explanation": "TRUE AND TRUE menghasilkan TRUE. NAND membalik hasil tersebut sehingga menjadi FALSE."
  },
  {
    "id": "al01",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "mudah",
    "sourcePages": "10–16, 21–23",
    "question": "Urutan langkah yang logis dan sistematis untuk menyelesaikan suatu masalah disebut ....",
    "options": [
      "algoritma",
      "perangkat keras",
      "jaringan",
      "antarmuka"
    ],
    "answer": 0,
    "explanation": "Algoritma adalah langkah atau metode yang direncanakan secara matang untuk menyelesaikan masalah atau mencapai tujuan."
  },
  {
    "id": "al02",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "mudah",
    "sourcePages": "10–16, 21–23",
    "question": "Deskripsi umum mengenai cara kerja algoritma yang tidak terikat pada bahasa pemrograman tertentu disebut ....",
    "options": [
      "source code",
      "pseudocode",
      "database",
      "compiler"
    ],
    "answer": 1,
    "explanation": "Pseudocode menjelaskan alur algoritma dengan bahasa sederhana dan terstruktur tanpa harus mengikuti sintaks bahasa pemrograman tertentu."
  },
  {
    "id": "al03",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "mudah",
    "sourcePages": "10–16, 21–23",
    "question": "Data yang diberikan kepada algoritma untuk diproses disebut ....",
    "options": [
      "output",
      "proses akhir",
      "input",
      "komentar"
    ],
    "answer": 2,
    "explanation": "Input merupakan data atau masukan yang akan diolah oleh algoritma."
  },
  {
    "id": "al04",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "mudah",
    "sourcePages": "10–16, 21–23",
    "question": "Hasil yang dikeluarkan setelah algoritma memproses masukan disebut ....",
    "options": [
      "input",
      "output",
      "variabel sementara",
      "kode sumber"
    ],
    "answer": 1,
    "explanation": "Output adalah hasil atau keluaran yang dihasilkan setelah algoritma memproses input."
  },
  {
    "id": "al05",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "mudah",
    "sourcePages": "10–16, 21–23",
    "question": "Karakteristik finiteness pada algoritma berarti algoritma harus ....",
    "options": [
      "memiliki langkah yang tidak terbatas",
      "selalu menggunakan internet",
      "berhenti setelah sejumlah langkah yang terbatas",
      "hanya dapat ditulis dengan satu bahasa"
    ],
    "answer": 2,
    "explanation": "Finiteness berarti algoritma harus berakhir atau berhenti setelah sejumlah langkah yang terbatas."
  },
  {
    "id": "al06",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Karakteristik definiteness pada algoritma menuntut setiap langkah agar ....",
    "options": [
      "jelas dan tidak bermakna ganda",
      "memiliki banyak kemungkinan tafsir",
      "selalu menghasilkan gambar",
      "tidak memerlukan urutan"
    ],
    "answer": 0,
    "explanation": "Definiteness berarti setiap proses atau instruksi harus didefinisikan dengan jelas dan tidak ambigu."
  },
  {
    "id": "al07",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Algoritma yang mencoba setiap kemungkinan solusi satu per satu disebut ....",
    "options": [
      "Greedy",
      "Brute Force",
      "Dynamic Programming",
      "Divide and Conquer"
    ],
    "answer": 1,
    "explanation": "Brute Force mencoba setiap kemungkinan kombinasi atau solusi secara langsung sampai menemukan hasil."
  },
  {
    "id": "al08",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Strategi yang membagi masalah besar menjadi beberapa submasalah lebih kecil untuk diselesaikan disebut ....",
    "options": [
      "Backtracking",
      "Greedy",
      "Divide and Conquer",
      "Brute Force"
    ],
    "answer": 2,
    "explanation": "Divide and Conquer memecah masalah menjadi bagian yang lebih kecil, menyelesaikannya, lalu menggabungkan hasilnya."
  },
  {
    "id": "al09",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Algoritma Greedy memilih langkah berikutnya berdasarkan ....",
    "options": [
      "manfaat atau pilihan terbaik pada langkah tersebut",
      "hasil acak tanpa pertimbangan",
      "urutan node pada tree saja",
      "semua kemungkinan secara lengkap"
    ],
    "answer": 0,
    "explanation": "Greedy memilih keputusan yang tampak paling menguntungkan pada setiap tahap berdasarkan informasi saat itu."
  },
  {
    "id": "al10",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Dynamic Programming dapat mempercepat penyelesaian masalah dengan cara ....",
    "options": [
      "menghapus seluruh hasil perhitungan",
      "menyimpan hasil submasalah agar dapat digunakan kembali",
      "mengulang semua perhitungan dari awal",
      "mengubah algoritma menjadi perangkat keras"
    ],
    "answer": 1,
    "explanation": "Dynamic Programming menyimpan hasil penyelesaian submasalah agar tidak perlu menghitung ulang bagian yang sama."
  },
  {
    "id": "al11",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Teknik yang mencoba pilihan secara bertahap dan kembali ke langkah sebelumnya ketika pilihan tidak berhasil disebut ....",
    "options": [
      "Greedy",
      "Brute Force",
      "Backtracking",
      "Output"
    ],
    "answer": 2,
    "explanation": "Backtracking mengeksplorasi pilihan secara bertahap dan melakukan backtrack ketika suatu jalur tidak menghasilkan solusi."
  },
  {
    "id": "al12",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sedang",
    "sourcePages": "10–16, 21–23",
    "question": "Saat merancang algoritma, langkah awal yang paling tepat adalah ....",
    "options": [
      "langsung menulis kode tanpa memahami soal",
      "memahami masalah dan tujuan yang ingin dicapai",
      "memilih warna tampilan program",
      "menghapus semua data masukan"
    ],
    "answer": 1,
    "explanation": "Buku menempatkan pemahaman masalah sebagai langkah awal sebelum menganalisis masalah, menyusun pseudocode, dan menerjemahkannya ke kode."
  },
  {
    "id": "al13",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sulit",
    "sourcePages": "10–16, 21–23",
    "question": "Sebuah pencarian memiliki banyak cabang pilihan. Program ingin menghentikan penelusuran pada cabang yang sudah pasti tidak memenuhi syarat, lalu mencoba pilihan lain. Pendekatan yang paling sesuai adalah ....",
    "options": [
      "Backtracking",
      "Greedy",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "Backtracking mencoba pilihan bertahap dan kembali ke keputusan sebelumnya ketika sebuah jalur tidak mungkin menghasilkan solusi."
  },
  {
    "id": "al14",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sulit",
    "sourcePages": "10–16, 21–23",
    "question": "Sebuah perhitungan memiliki banyak submasalah yang sama dan hasil submasalah tersebut sering dibutuhkan kembali. Pendekatan yang paling tepat adalah ....",
    "options": [
      "Brute Force tanpa penyimpanan",
      "Dynamic Programming",
      "Greedy tanpa melihat hasil sebelumnya",
      "pencarian acak"
    ],
    "answer": 1,
    "explanation": "Dynamic Programming sesuai ketika submasalah berulang karena hasil yang sudah dihitung dapat disimpan dan digunakan kembali."
  },
  {
    "id": "al15",
    "chapter": "Elemen 1 — Berpikir Komputasional",
    "topicId": "algoritma",
    "category": "ALGORITMA",
    "difficulty": "sulit",
    "sourcePages": "10–16, 21–23",
    "question": "Seorang programmer menyusun algoritma yang langkah-langkahnya tidak ambigu, menerima masukan, menghasilkan keluaran, dan pasti berhenti. Kesimpulan yang tepat adalah ....",
    "options": [
      "algoritma tersebut memenuhi beberapa karakteristik penting algoritma",
      "algoritma harus selalu memakai bahasa C++",
      "algoritma tidak membutuhkan pengujian",
      "algoritma hanya berlaku untuk aplikasi web"
    ],
    "answer": 0,
    "explanation": "Kejelasan langkah (definiteness), input, output, dan keterbatasan langkah (finiteness) merupakan karakteristik penting algoritma."
  },
  {
    "id": "ai01",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "mudah",
    "sourcePages": "25–33",
    "question": "Analisis konten adalah kegiatan untuk ....",
    "options": [
      "membaca judul saja tanpa memeriksa isi",
      "meneliti dan mengolah informasi agar dapat dipahami serta dievaluasi",
      "menghapus semua data digital",
      "mengubah dokumen menjadi perangkat keras"
    ],
    "answer": 1,
    "explanation": "Analisis konten merupakan teknik penelitian untuk mengumpulkan, memeriksa, dan mengolah informasi dalam teks, gambar, atau video."
  },
  {
    "id": "ai02",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "mudah",
    "sourcePages": "25–33",
    "question": "Dalam analisis konten, memilih sebagian data yang mewakili keseluruhan data disebut ....",
    "options": [
      "penghapusan",
      "pengacakan",
      "pemilihan sampel",
      "penggandaan"
    ],
    "answer": 2,
    "explanation": "Pada tahap desain, sampel dipilih agar data yang dianalisis mewakili fokus penelitian dan dapat dikelola."
  },
  {
    "id": "ai03",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "mudah",
    "sourcePages": "25–33",
    "question": "Pada Mail Merge, dokumen utama yang berisi teks tetap seperti isi surat disebut ....",
    "options": [
      "Main Document",
      "Data Source",
      "Merge Field",
      "Clipboard"
    ],
    "answer": 0,
    "explanation": "Main Document adalah dokumen utama yang berisi teks statis dan tempat field data akan disisipkan."
  },
  {
    "id": "ai04",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Analisis tren dalam konten digital bertujuan untuk ....",
    "options": [
      "mengetahui topik yang sedang populer atau sering dibicarakan",
      "mengganti kata sandi pengguna",
      "menghapus informasi yang berbeda",
      "mengukur kecepatan prosesor"
    ],
    "answer": 0,
    "explanation": "Analisis tren membantu melihat topik yang sedang populer atau sering dibicarakan dalam kurun waktu tertentu."
  },
  {
    "id": "ai05",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Ketika memeriksa apakah informasi digital benar atau hoaks, kegiatan tersebut disebut ....",
    "options": [
      "sentiment analysis",
      "fact checking",
      "mail merge",
      "linking"
    ],
    "answer": 1,
    "explanation": "Fact checking bertujuan mendeteksi bias atau ketidakakuratan informasi sebelum digunakan sebagai dasar keputusan."
  },
  {
    "id": "ai06",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Analisis yang digunakan untuk mengetahui perasaan atau opini publik terhadap suatu isu disebut ....",
    "options": [
      "analisis korelasi",
      "analisis sampel",
      "analisis sentimen",
      "analisis struktur data"
    ],
    "answer": 2,
    "explanation": "Analisis sentimen digunakan untuk mengetahui perasaan atau opini publik terhadap suatu topik atau isu."
  },
  {
    "id": "ai07",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Visualisasi yang menampilkan kata-kata paling dominan dengan ukuran berbeda disebut ....",
    "options": [
      "Word Cloud",
      "Mail Merge",
      "Main Document",
      "Footer"
    ],
    "answer": 0,
    "explanation": "Word Cloud menampilkan kata yang paling sering atau dominan dengan ukuran visual yang lebih besar."
  },
  {
    "id": "ai08",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Pada tahap desain analisis konten, hal pertama yang perlu ditetapkan adalah ....",
    "options": [
      "warna latar dokumen",
      "tujuan analisis",
      "jenis printer",
      "ukuran monitor"
    ],
    "answer": 1,
    "explanation": "Tahap persiapan atau desain dimulai dengan menetapkan tujuan: hal apa yang ingin diketahui atau dibuktikan."
  },
  {
    "id": "ai09",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Dalam analisis konten, coding scheme digunakan untuk ....",
    "options": [
      "menyusun kategori atau kode untuk mengelompokkan data",
      "mengirim dokumen ke printer",
      "mengubah video menjadi audio",
      "menambah kapasitas penyimpanan"
    ],
    "answer": 0,
    "explanation": "Coding scheme merupakan buku kode berisi kategori dan definisi untuk mengelompokkan unit analisis."
  },
  {
    "id": "ai10",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Tahap ketika peneliti mulai menerapkan kode pada data mentah dan mengelompokkan konten disebut ....",
    "options": [
      "pelaporan",
      "coding process",
      "fact checking",
      "mail merge"
    ],
    "answer": 1,
    "explanation": "Coding process adalah proses menerapkan buku kode pada data mentah, melakukan pilot testing, dan mengklasifikasikan data."
  },
  {
    "id": "ai11",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Aplikasi yang fungsi utamanya mengolah data dalam bentuk tabel baris dan kolom adalah ....",
    "options": [
      "pengolah kata",
      "aplikasi presentasi",
      "spreadsheet",
      "pengolah gambar"
    ],
    "answer": 2,
    "explanation": "Spreadsheet digunakan untuk mengelola data dalam bentuk lembar kerja yang terdiri dari baris, kolom, dan sel."
  },
  {
    "id": "ai12",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sedang",
    "sourcePages": "25–33",
    "question": "Fitur Cut, Copy, dan Paste memanfaatkan clipboard yang berfungsi sebagai ....",
    "options": [
      "tempat penampung sementara data yang dipotong atau disalin",
      "tempat menyimpan dokumen secara permanen",
      "alat untuk menghubungkan jaringan",
      "fitur untuk membuat grafik otomatis"
    ],
    "answer": 0,
    "explanation": "Clipboard menjadi tempat penampung sementara data saat pengguna melakukan Cut atau Copy sebelum Paste."
  },
  {
    "id": "ai13",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sulit",
    "sourcePages": "25–33",
    "question": "Sebuah grafik di Word mengambil data dari file Excel. Pengguna ingin grafik di Word ikut berubah ketika data sumber Excel diperbarui. Teknik OLE yang paling tepat adalah ....",
    "options": [
      "Embedding, karena objek diputus dari file sumber",
      "Linking, karena objek tetap terhubung ke file sumber",
      "mengubah grafik menjadi gambar statis",
      "menyalin layar menggunakan screenshot"
    ],
    "answer": 1,
    "explanation": "Linking menyimpan tautan ke file sumber. Jika data sumber berubah, objek di file tujuan dapat diperbarui."
  },
  {
    "id": "ai14",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sulit",
    "sourcePages": "25–33",
    "question": "Saat mengatur Mail Merge, daftar nama, alamat, dan jabatan penerima yang menjadi sumber pengisian field disebut ....",
    "options": [
      "Main Document",
      "Merge Field",
      "Data Source",
      "Footer"
    ],
    "answer": 2,
    "explanation": "Data Source adalah dokumen atau tabel berisi data penerima, misalnya nama, alamat, dan jabatan."
  },
  {
    "id": "ai15",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "analisis-integrasi",
    "category": "ANALISIS KONTEN & INTEGRASI APLIKASI",
    "difficulty": "sulit",
    "sourcePages": "25–33",
    "question": "Sebuah tim ingin menganalisis ribuan komentar, mencari kategori tema, menghitung frekuensi, lalu menyajikan hasilnya. Urutan kerja yang sesuai dengan materi buku adalah ....",
    "options": [
      "menetapkan tujuan dan sampel, membuat coding scheme, mengodekan data, menganalisis, lalu melaporkan",
      "langsung membuat kesimpulan sebelum membaca data",
      "menghapus komentar yang tidak sesuai pendapat tim",
      "menyalin semua komentar ke slide tanpa pengelompokan"
    ],
    "answer": 0,
    "explanation": "Buku menjelaskan tahap desain (tujuan, sampel, kategori), coding scheme, coding process, analisis dan interpretasi, kemudian pelaporan hasil."
  },
  {
    "id": "bl01",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "mudah",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Blog adalah ....",
    "options": [
      "media online yang berisi konten seperti artikel, video, atau foto dan dikelola oleh blogger",
      "program untuk mengolah angka saja",
      "perangkat keras untuk merekam suara",
      "sistem operasi pada komputer"
    ],
    "answer": 0,
    "explanation": "Blog merupakan website atau media online yang berisi konten seperti artikel, video, dan foto yang dikelola oleh blogger."
  },
  {
    "id": "bl02",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "mudah",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Bagian blog yang biasanya berisi judul, deskripsi, dan menu blog disebut ....",
    "options": [
      "Footer",
      "Header",
      "Sidebar",
      "Main Document"
    ],
    "answer": 1,
    "explanation": "Header adalah bagian atas blog yang berisi judul, deskripsi, dan menu blog."
  },
  {
    "id": "bl03",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "mudah",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Bagian blog yang menjadi tempat utama menampilkan konten artikel adalah ....",
    "options": [
      "Navbar",
      "Footer",
      "Main blog",
      "Sidebar"
    ],
    "answer": 2,
    "explanation": "Main blog merupakan bagian utama tempat artikel atau konten blog ditampilkan."
  },
  {
    "id": "bl04",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Bagian blog yang membantu pengunjung memilih dan menjelajahi konten melalui menu disebut ....",
    "options": [
      "Navbar",
      "Footer",
      "Data Source",
      "Word Cloud"
    ],
    "answer": 0,
    "explanation": "Navbar berisi menu atau navigasi untuk membantu pengunjung memilih dan menjelajahi konten blog."
  },
  {
    "id": "bl05",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Bagian blog yang dapat memuat informasi tambahan seperti profil, arsip, atau widget disebut ....",
    "options": [
      "Header",
      "Sidebar",
      "Main Document",
      "Merge Field"
    ],
    "answer": 1,
    "explanation": "Sidebar berada di samping konten utama dan dapat berisi informasi tambahan seperti profil, arsip, dan widget."
  },
  {
    "id": "bl06",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Bagian blog yang biasanya berada di bawah dan dapat berisi informasi hak cipta atau kontak disebut ....",
    "options": [
      "Navbar",
      "Header",
      "Footer",
      "Main blog"
    ],
    "answer": 2,
    "explanation": "Footer merupakan bagian bawah blog yang dapat memuat informasi penutup, kontak, dan informasi terkait."
  },
  {
    "id": "bl07",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Blog yang dibuat untuk berbagi pengalaman, cerita, atau jurnal pribadi termasuk ....",
    "options": [
      "blog pribadi/personal",
      "blog perusahaan",
      "blog profesional",
      "blog berita resmi"
    ],
    "answer": 0,
    "explanation": "Blog pribadi atau personal berisi pengalaman, cerita, dan pandangan pribadi pemiliknya."
  },
  {
    "id": "bl08",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Seseorang menulis artikel khusus untuk menunjukkan keahlian di bidang desain dan membangun reputasi profesional. Jenis blog yang paling sesuai adalah ....",
    "options": [
      "blog pribadi saja",
      "blog profesional",
      "blog anak-anak",
      "blog perjalanan"
    ],
    "answer": 1,
    "explanation": "Blog profesional berfokus pada keahlian atau bidang tertentu untuk membangun reputasi dan menunjukkan kompetensi."
  },
  {
    "id": "bl09",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Platform blog yang dikembangkan oleh Google dan memungkinkan pengguna membuat blog dengan mudah adalah ....",
    "options": [
      "WordPress",
      "Microsoft Excel",
      "Blogger",
      "PowerPoint"
    ],
    "answer": 2,
    "explanation": "Blogger merupakan platform CMS milik Google yang memudahkan pengguna membuat dan mengelola blog."
  },
  {
    "id": "bl10",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Salah satu manfaat blog menurut materi buku adalah sebagai ....",
    "options": [
      "sarana publikasi dan portofolio online",
      "pengganti seluruh perangkat komputer",
      "alat untuk mengukur suhu",
      "sistem penyimpanan RAM"
    ],
    "answer": 0,
    "explanation": "Blog dapat dimanfaatkan sebagai sarana publikasi, portofolio online, branding, serta promosi produk atau jasa."
  },
  {
    "id": "bl11",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Upaya mengoptimalkan artikel agar lebih mudah ditemukan melalui mesin pencari dikenal sebagai ....",
    "options": [
      "CTA",
      "SEO",
      "OLE",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "SEO atau Search Engine Optimization merupakan upaya optimasi konten agar lebih mudah ditemukan melalui mesin pencari."
  },
  {
    "id": "bl12",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sedang",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Kalimat yang mengajak pembaca melakukan tindakan tertentu, misalnya mendaftar atau membeli produk, disebut ....",
    "options": [
      "Header",
      "Sidebar",
      "Call to Action",
      "Coding Scheme"
    ],
    "answer": 2,
    "explanation": "Call to Action (CTA) merupakan ajakan kepada pembaca untuk melakukan tindakan tertentu."
  },
  {
    "id": "bl13",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sulit",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Seorang blogger mengambil artikel orang lain, menyalinnya hampir seluruhnya, lalu mengaku sebagai karya sendiri. Tindakan ini berisiko ....",
    "options": [
      "mendapat penalti atau masalah plagiarisme",
      "meningkatkan kualitas konten secara otomatis",
      "membuat blog selalu berada di halaman pertama",
      "mengubah blog menjadi spreadsheet"
    ],
    "answer": 0,
    "explanation": "Buku mengingatkan agar tidak melakukan copy-paste artikel tanpa izin atau atribusi karena dapat dianggap plagiarisme dan berisiko terkena penalti."
  },
  {
    "id": "bl14",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sulit",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Pemilik blog memasang terlalu banyak animasi, iklan, dan widget sehingga halaman lambat dan pembaca sulit fokus. Tindakan terbaik adalah ....",
    "options": [
      "menambah widget agar semakin ramai",
      "menyeleksi widget yang benar-benar diperlukan agar blog tetap nyaman dikunjungi",
      "menghapus semua artikel",
      "mengubah semua teks menjadi gambar"
    ],
    "answer": 1,
    "explanation": "Widget berlebihan dapat mengganggu konsentrasi membaca dan kenyamanan pengunjung. Tampilan perlu dijaga agar tetap sederhana dan sesuai kebutuhan."
  },
  {
    "id": "bl15",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "blog",
    "category": "BLOG",
    "difficulty": "sulit",
    "sourcePages": "34–39, 44–49, 50–54",
    "question": "Seorang penulis ingin mengembangkan blog edukasi secara konsisten. Rangkaian tugas yang paling sesuai dengan materi pengelolaan blog adalah ....",
    "options": [
      "menulis tanpa menentukan topik dan tidak pernah memperbarui artikel",
      "hanya memasang animasi pada halaman utama",
      "menentukan topik, menyusun artikel, melakukan optimasi SEO, memperbarui konten, dan berinteraksi dengan pembaca",
      "menyalin artikel situs lain agar jumlah tulisan cepat bertambah"
    ],
    "answer": 2,
    "explanation": "Pengelola blog perlu menentukan topik, menulis dan memperbarui artikel, melakukan optimasi SEO, serta menjaga interaksi dengan pembaca."
  },
  {
    "id": "vl01",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "mudah",
    "sourcePages": "40–46, 52–54",
    "question": "Vlog merupakan konten berbentuk ....",
    "options": [
      "video yang dibuat untuk berbagi pengalaman, ide, atau pengetahuan",
      "tabel angka dalam lembar kerja",
      "daftar node pada linked list",
      "surat otomatis dari Mail Merge"
    ],
    "answer": 0,
    "explanation": "Vlog adalah singkatan dari video blog, yaitu konten video untuk berbagi pengalaman, ide, dan pengetahuan melalui platform video."
  },
  {
    "id": "vl02",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "mudah",
    "sourcePages": "40–46, 52–54",
    "question": "Vlog yang berfokus pada perjalanan dan pengalaman mengunjungi berbagai tempat disebut ....",
    "options": [
      "Food Vlog",
      "Travel Vlog",
      "Gaming Vlog",
      "Review Vlog"
    ],
    "answer": 1,
    "explanation": "Travel vlog berfokus pada cerita perjalanan dan pengalaman mengunjungi berbagai destinasi."
  },
  {
    "id": "vl03",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "mudah",
    "sourcePages": "40–46, 52–54",
    "question": "Vlog yang bertujuan memberikan pengetahuan atau materi pembelajaran kepada pemirsa disebut ....",
    "options": [
      "Challenge Vlog",
      "Daily Vlog",
      "Vlog Edukasi",
      "Beauty Vlog"
    ],
    "answer": 2,
    "explanation": "Vlog edukasi dibuat untuk memberikan pengetahuan dan wawasan kepada pemirsa melalui konten video."
  },
  {
    "id": "vl04",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Vlog yang membahas pengalaman bermain permainan video termasuk jenis ....",
    "options": [
      "Gaming Vlog",
      "Food Vlog",
      "Family Vlog",
      "Travel Vlog"
    ],
    "answer": 0,
    "explanation": "Gaming vlog berfokus pada konten permainan video, termasuk pengalaman bermain dan komentar pembuatnya."
  },
  {
    "id": "vl05",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Pembuat konten mengulas kelebihan dan kekurangan sebuah produk untuk membantu penonton mempertimbangkan produk tersebut. Jenis vlog yang sesuai adalah ....",
    "options": [
      "Daily Vlog",
      "Review Vlog",
      "Cinematic Vlog",
      "Kids Vlog"
    ],
    "answer": 1,
    "explanation": "Review vlog menyampaikan pendapat dan evaluasi terhadap produk atau layanan untuk memberikan informasi kepada pemirsa."
  },
  {
    "id": "vl06",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Vlog yang berfokus pada makanan, minuman, restoran, atau tempat makan disebut ....",
    "options": [
      "Tech Vlog",
      "Music Vlog",
      "Food Vlog",
      "Challenge Vlog"
    ],
    "answer": 2,
    "explanation": "Food vlog mengeksplorasi makanan dan minuman, misalnya pengalaman mencoba makanan di restoran atau tempat makan."
  },
  {
    "id": "vl07",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Saat merekam vlog menggunakan smartphone, posisi mikrofon perlu diperhatikan agar ....",
    "options": [
      "suara pembicara dapat terekam dengan jelas",
      "kamera otomatis memiliki resolusi lebih tinggi",
      "baterai menjadi lebih awet",
      "video langsung terunggah ke blog"
    ],
    "answer": 0,
    "explanation": "Buku menyarankan memperhatikan posisi mikrofon agar suara pembicara terdengar jelas dan tidak terganggu."
  },
  {
    "id": "vl08",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Mengapa smartphone disarankan dipegang menggunakan dua tangan saat merekam?",
    "options": [
      "agar video otomatis menjadi lebih terang",
      "agar pengambilan gambar lebih stabil dan tidak mudah bergoyang",
      "agar suara tidak perlu diedit",
      "agar ukuran file menjadi lebih kecil"
    ],
    "answer": 1,
    "explanation": "Penggunaan dua tangan membantu menjaga kestabilan smartphone sehingga hasil rekaman tidak terlalu goyang."
  },
  {
    "id": "vl09",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Mengapa penggunaan fitur zoom digital sebaiknya dihindari saat merekam video?",
    "options": [
      "karena membuat mikrofon tidak berfungsi",
      "karena membuat baterai tidak dapat diisi",
      "karena dapat menurunkan kualitas gambar dan membuat hasil kurang tajam",
      "karena menghapus file video"
    ],
    "answer": 2,
    "explanation": "Materi buku menyarankan menghindari zoom digital karena dapat memengaruhi kualitas gambar."
  },
  {
    "id": "vl10",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Saat memilih lokasi pengambilan gambar, hal yang perlu diperhatikan agar hasil rekaman baik adalah ....",
    "options": [
      "pencahayaan dan kontras yang tidak terlalu tinggi",
      "jumlah aplikasi di smartphone",
      "warna ikon aplikasi",
      "jumlah kontak pada telepon"
    ],
    "answer": 0,
    "explanation": "Pemilihan lokasi dan kontras perlu diperhatikan agar hasil rekaman tetap nyaman dilihat dan tidak terlalu terang atau gelap."
  },
  {
    "id": "vl11",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Mengapa pengambilan gambar dapat dilakukan beberapa kali (retake)?",
    "options": [
      "agar durasi video selalu bertambah",
      "agar dapat memilih hasil rekaman yang paling baik dan memperbaiki bagian yang kurang",
      "agar kualitas kamera berubah",
      "agar video tidak perlu diedit"
    ],
    "answer": 1,
    "explanation": "Tahap pengambilan gambar dapat diulang untuk memperoleh hasil terbaik dan memperbaiki bagian yang kurang memuaskan."
  },
  {
    "id": "vl12",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sedang",
    "sourcePages": "40–46, 52–54",
    "question": "Setelah proses perekaman selesai, langkah berikutnya dalam pembuatan vlog adalah ....",
    "options": [
      "menghapus semua bahan rekaman",
      "membuat coding scheme",
      "melakukan proses editing video",
      "mengubah video menjadi spreadsheet"
    ],
    "answer": 2,
    "explanation": "Setelah merekam, pembuat vlog melakukan editing untuk menyusun potongan video, suara, dan elemen pendukung."
  },
  {
    "id": "vl13",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sulit",
    "sourcePages": "40–46, 52–54",
    "question": "Seorang siswa merekam vlog edukasi dengan suara yang kurang jelas dan gambar bergoyang. Perbaikan yang paling sesuai dengan materi buku adalah ....",
    "options": [
      "mendekatkan posisi mikrofon, memegang smartphone dengan dua tangan, lalu mengambil ulang bagian yang kurang baik",
      "menambahkan zoom digital maksimum pada semua rekaman",
      "memperbanyak animasi tanpa memperbaiki rekaman",
      "menghapus audio dan tidak menggantinya"
    ],
    "answer": 0,
    "explanation": "Materi menekankan posisi mikrofon, kestabilan dengan dua tangan, serta pengulangan pengambilan gambar untuk hasil yang lebih baik."
  },
  {
    "id": "vl14",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sulit",
    "sourcePages": "40–46, 52–54",
    "question": "Pembuat vlog ingin menampilkan detail objek tanpa mengorbankan kualitas gambar akibat zoom digital. Pilihan yang lebih tepat adalah ....",
    "options": [
      "memperbesar video dengan zoom digital setinggi mungkin",
      "mengatur posisi kamera atau mendekat secara fisik ke objek dengan tetap memperhatikan komposisi",
      "merekam dalam keadaan kamera bergerak cepat",
      "menurunkan resolusi sebelum merekam"
    ],
    "answer": 1,
    "explanation": "Karena buku menyarankan menghindari zoom digital, pembuat dapat mengatur posisi pengambilan gambar secara langsung dan menjaga komposisi."
  },
  {
    "id": "vl15",
    "chapter": "Elemen 2 — Literasi Digital",
    "topicId": "vlog",
    "category": "VLOG",
    "difficulty": "sulit",
    "sourcePages": "40–46, 52–54",
    "question": "Sebuah kelompok akan membuat vlog kegiatan sekolah. Urutan kerja yang paling masuk akal agar hasil video terencana adalah ....",
    "options": [
      "mengunggah video lebih dahulu, lalu menentukan topik",
      "merekam secara acak, kemudian menghapus semua bahan",
      "menentukan tema dan tujuan, merencanakan pengambilan gambar, merekam, mengedit, lalu membagikan video",
      "hanya memilih musik tanpa menyiapkan isi video"
    ],
    "answer": 2,
    "explanation": "Pembuatan vlog memerlukan perencanaan topik dan tujuan, proses pengambilan gambar, editing, dan kemudian publikasi atau berbagi video."
  }
];
