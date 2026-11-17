/*
 * BANK SOAL QUIZLAB C++
 * Materi: dasar program, variabel & tipe data, operator, percabangan, dan perulangan.
 * Bank berisi 60 soal. Satu sesi mengambil 30 soal secara acak.
 * Komposisi sesi: 7 mudah, 16 sedang, dan 7 sulit.
 * answer adalah indeks jawaban benar (0–3).
 */
window.QUIZ_CONFIG = {
  "id": "quizlab-cpp",
  "title": "Kuis Dasar C++",
  "description": "Asesmen dasar pemrograman C++: program dasar, variabel dan operator, percabangan, serta perulangan.",
  "questionsPerSession": 30,
  "sessionDurationMinutes": 45,
  "deadlineISO": "2026-11-17T12:30:00+07:00",
  "googleAppsScriptUrl": "https://script.google.com/macros/s/AKfycbzRAqVPOOe982Rozm6K--1n2ZvKUqx5gYnVYjqs-zFtvYrgVvWMzNDNn1NHO1UAKTll/exec",
  "shuffleQuestions": true,
  "shuffleOptions": true,
  "showExplanation": true,
  "selectionPlan": [
    {
      "topicId": "dasar-cpp",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 2
      }
    },
    {
      "topicId": "variabel-operator",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 2
      }
    },
    {
      "topicId": "percabangan",
      "difficulties": {
        "mudah": 2,
        "sedang": 4,
        "sulit": 1
      }
    },
    {
      "topicId": "perulangan",
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
    "id": "dc01",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "mudah",
    "question": "Bahasa C++ termasuk bahasa pemrograman yang digunakan untuk ....",
    "options": [
      "membuat program komputer",
      "mengedit foto saja",
      "mengolah dokumen saja",
      "menggambar tanpa instruksi"
    ],
    "answer": 0,
    "explanation": "C++ adalah bahasa pemrograman yang dapat digunakan untuk membuat berbagai jenis aplikasi dan program."
  },
  {
    "id": "dc02",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "mudah",
    "question": "Header yang umum digunakan agar program dapat memakai cout dan cin adalah ....",
    "options": [
      "<math.h>",
      "<iostream>",
      "<photo.h>",
      "<word.h>"
    ],
    "answer": 1,
    "explanation": "Header iostream menyediakan fasilitas input dan output stream seperti cin dan cout."
  },
  {
    "id": "dc03",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "mudah",
    "question": "Fungsi utama yang menjadi titik awal eksekusi program C++ biasanya adalah ....",
    "options": [
      "start()",
      "begin()",
      "main()",
      "print()"
    ],
    "answer": 2,
    "explanation": "Program C++ standar memulai eksekusi dari fungsi main()."
  },
  {
    "id": "dc04",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "mudah",
    "question": "Perintah yang digunakan untuk menampilkan teks ke layar adalah ....",
    "options": [
      "cin",
      "cout",
      "input",
      "read"
    ],
    "answer": 1,
    "explanation": "cout digunakan untuk mengirim keluaran ke layar atau output stream."
  },
  {
    "id": "dc05",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Apa fungsi operator << pada perintah cout?",
    "options": [
      "menerima masukan dari keyboard",
      "membandingkan dua angka",
      "mengirim data ke output stream",
      "mengakhiri program"
    ],
    "answer": 2,
    "explanation": "Operator << pada cout memasukkan nilai atau teks ke aliran keluaran."
  },
  {
    "id": "dc06",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Untuk membaca sebuah bilangan yang diketik pengguna ke variabel nilai, perintah yang tepat adalah ....",
    "options": [
      "cout << nilai;",
      "cin >> nilai;",
      "read(nilai);",
      "input << nilai;"
    ],
    "answer": 1,
    "explanation": "cin >> nilai membaca masukan dari input stream dan menyimpannya ke variabel nilai."
  },
  {
    "id": "dc07",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Perintah `cout << \"Halo\" << endl;` menggunakan endl untuk ....",
    "options": [
      "menghapus tulisan Halo",
      "memindahkan kursor ke baris baru",
      "mengulang program",
      "menghentikan komputer"
    ],
    "answer": 1,
    "explanation": "endl mengakhiri baris keluaran dan membuat baris baru."
  },
  {
    "id": "dc08",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Tanda titik koma (;) pada C++ umumnya digunakan untuk ....",
    "options": [
      "mengakhiri sebuah pernyataan",
      "membuka fungsi",
      "menulis komentar",
      "menentukan nama variabel"
    ],
    "answer": 0,
    "explanation": "Sebagian besar statement C++ diakhiri dengan tanda titik koma."
  },
  {
    "id": "dc09",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Penulisan komentar satu baris pada C++ diawali dengan ....",
    "options": [
      "##",
      "<!--",
      "//",
      "**"
    ],
    "answer": 2,
    "explanation": "Dua garis miring // digunakan untuk membuat komentar satu baris yang tidak dieksekusi."
  },
  {
    "id": "dc10",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Pasangan tanda kurung yang membatasi isi sebuah fungsi atau blok kode adalah ....",
    "options": [
      "( )",
      "[ ]",
      "{ }",
      "< >"
    ],
    "answer": 2,
    "explanation": "Kurung kurawal membuka dan menutup blok fungsi, percabangan, serta perulangan."
  },
  {
    "id": "dc11",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sedang",
    "question": "Apa kegunaan `return 0;` pada akhir fungsi main() dalam contoh program dasar?",
    "options": [
      "mengulang fungsi main",
      "menandakan program selesai dengan status sukses",
      "menampilkan angka 0 ke layar",
      "menghapus semua variabel"
    ],
    "answer": 1,
    "explanation": "return 0 mengakhiri fungsi main dan secara konvensi menunjukkan program selesai dengan sukses."
  },
  {
    "id": "dc12",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sulit",
    "question": "Perhatikan kode berikut:\n`int main() {\n  cout << \"Belajar\";\n  cout << \"C++\";\n  return 0;\n}`\nApa keluaran program tersebut?",
    "options": [
      "Belajar C++ pada dua baris",
      "BelajarC++ pada satu baris",
      "C++Belajar pada satu baris",
      "Tidak menghasilkan keluaran"
    ],
    "answer": 1,
    "explanation": "Kedua perintah cout menampilkan teks berurutan. Tidak ada spasi atau endl di antara keduanya."
  },
  {
    "id": "dc13",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sulit",
    "question": "Perhatikan kode berikut:\n`int main() {\n  cout << \"A\" << 5 << \"B\";\n  return 0;\n}`\nApa hasil yang ditampilkan?",
    "options": [
      "A 5 B",
      "5AB",
      "A5B",
      "A dan B saja"
    ],
    "answer": 2,
    "explanation": "Operator << mengirim setiap bagian secara berurutan tanpa menambahkan spasi secara otomatis."
  },
  {
    "id": "dc14",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sulit",
    "question": "C++ bersifat case-sensitive. Apa akibatnya jika variabel dibuat dengan nama `nilai`, tetapi dipanggil sebagai `Nilai`?",
    "options": [
      "Keduanya selalu dianggap sama",
      "Program otomatis mengubah huruf besar menjadi kecil",
      "Keduanya dianggap sebagai nama yang berbeda",
      "Variabel berubah menjadi konstanta"
    ],
    "answer": 2,
    "explanation": "C++ membedakan huruf besar dan kecil, sehingga nilai dan Nilai merupakan identifier yang berbeda."
  },
  {
    "id": "dc15",
    "chapter": "C++ — Dasar Program",
    "topicId": "dasar-cpp",
    "category": "DASAR C++",
    "difficulty": "sulit",
    "question": "Perhatikan kode berikut:\n`int angka = 4;\nangka = angka + 3;\ncout << angka;`\nApa keluaran program?",
    "options": [
      "4",
      "3",
      "7",
      "43"
    ],
    "answer": 2,
    "explanation": "Nilai awal angka adalah 4. Pernyataan berikutnya menambahkan 3 sehingga nilainya menjadi 7."
  },
  {
    "id": "vo01",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "mudah",
    "question": "Tipe data yang paling sesuai untuk menyimpan bilangan bulat seperti 12 adalah ....",
    "options": [
      "int",
      "char",
      "bool",
      "string"
    ],
    "answer": 0,
    "explanation": "int digunakan untuk menyimpan bilangan bulat."
  },
  {
    "id": "vo02",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "mudah",
    "question": "Tipe data yang digunakan untuk menyimpan satu karakter seperti huruf A adalah ....",
    "options": [
      "float",
      "char",
      "bool",
      "int"
    ],
    "answer": 1,
    "explanation": "char menyimpan satu karakter dan biasanya ditulis dengan tanda petik tunggal, misalnya 'A'."
  },
  {
    "id": "vo03",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "mudah",
    "question": "Tipe data untuk menyimpan teks seperti nama siswa adalah ....",
    "options": [
      "bool",
      "int",
      "string",
      "char"
    ],
    "answer": 2,
    "explanation": "string digunakan untuk menyimpan rangkaian karakter atau teks."
  },
  {
    "id": "vo04",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "mudah",
    "question": "Tipe data yang hanya memiliki nilai true atau false adalah ....",
    "options": [
      "double",
      "string",
      "char",
      "bool"
    ],
    "answer": 3,
    "explanation": "bool menyimpan nilai logika true atau false."
  },
  {
    "id": "vo05",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Perhatikan deklarasi `double tinggi = 165.5;`. Mengapa tipe double sesuai digunakan?",
    "options": [
      "karena menyimpan bilangan pecahan dengan presisi lebih tinggi daripada float",
      "karena hanya menyimpan huruf",
      "karena menyimpan nilai true atau false",
      "karena hanya menyimpan bilangan bulat"
    ],
    "answer": 0,
    "explanation": "double digunakan untuk bilangan floating-point dan umumnya memiliki presisi lebih tinggi daripada float."
  },
  {
    "id": "vo06",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Operator aritmetika untuk mendapatkan sisa hasil pembagian bilangan bulat adalah ....",
    "options": [
      "/",
      "%",
      "*",
      "+"
    ],
    "answer": 1,
    "explanation": "Operator modulus (%) menghasilkan sisa pembagian bilangan bulat."
  },
  {
    "id": "vo07",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Apa hasil dari ekspresi `8 + 3 * 2`?",
    "options": [
      "22",
      "14",
      "16",
      "13"
    ],
    "answer": 1,
    "explanation": "Perkalian dikerjakan lebih dahulu: 3 × 2 = 6, lalu 8 + 6 = 14."
  },
  {
    "id": "vo08",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Perhatikan kode `int a = 7, b = 2; cout << a / b;`. Apa hasilnya?",
    "options": [
      "3.5",
      "4",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "Karena a dan b bertipe int, pembagian bilangan bulat menghasilkan 3 dan bagian desimal dibuang."
  },
  {
    "id": "vo09",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Operator yang digunakan untuk membandingkan apakah dua nilai sama adalah ....",
    "options": [
      "=",
      "==",
      "!=",
      "<="
    ],
    "answer": 1,
    "explanation": "Operator == membandingkan kesamaan. Operator = digunakan untuk memberikan nilai."
  },
  {
    "id": "vo10",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Operator `!=` berarti ....",
    "options": [
      "lebih besar dari",
      "sama dengan",
      "tidak sama dengan",
      "lebih kecil atau sama dengan"
    ],
    "answer": 2,
    "explanation": "!= menghasilkan true jika kedua nilai tidak sama."
  },
  {
    "id": "vo11",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sedang",
    "question": "Operator logika AND dalam C++ ditulis dengan ....",
    "options": [
      "||",
      "&&",
      "!",
      "%%"
    ],
    "answer": 1,
    "explanation": "&& menghasilkan true jika kedua kondisi bernilai true."
  },
  {
    "id": "vo12",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`int x = 5;\nint y = 2;\ncout << x % y + x;`\nApa hasilnya?",
    "options": [
      "1",
      "2",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "5 % 2 menghasilkan 1. Kemudian 1 + 5 menghasilkan 6."
  },
  {
    "id": "vo13",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sulit",
    "question": "Diketahui `int nilai = 80;`. Apa hasil dari ekspresi `nilai >= 75 && nilai < 90`?",
    "options": [
      "true",
      "false",
      "80",
      "error"
    ],
    "answer": 0,
    "explanation": "80 memenuhi kedua kondisi: lebih besar atau sama dengan 75 dan lebih kecil dari 90."
  },
  {
    "id": "vo14",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`int x = 10;\nx += 4;\nx *= 2;\ncout << x;`\nApa keluaran program?",
    "options": [
      "18",
      "24",
      "28",
      "14"
    ],
    "answer": 2,
    "explanation": "x += 4 menjadikan x = 14, lalu x *= 2 menjadikan x = 28."
  },
  {
    "id": "vo15",
    "chapter": "C++ — Variabel, Tipe Data, dan Operator",
    "topicId": "variabel-operator",
    "category": "VARIABEL & OPERATOR",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`int a = 9;\nint b = 4;\ncout << a / b << \" \" << a % b;`\nApa keluaran program?",
    "options": [
      "2 1",
      "2 0",
      "2.25 1",
      "1 2"
    ],
    "answer": 0,
    "explanation": "Pembagian integer 9 / 4 menghasilkan 2 dan modulus 9 % 4 menghasilkan sisa 1."
  },
  {
    "id": "pc01",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "mudah",
    "question": "Struktur `if` digunakan untuk ....",
    "options": [
      "mengulang perintah berkali-kali",
      "menjalankan kode ketika kondisi bernilai benar",
      "menyimpan data ke file",
      "menampilkan gambar"
    ],
    "answer": 1,
    "explanation": "if menjalankan blok kode jika kondisi yang diperiksa bernilai true."
  },
  {
    "id": "pc02",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "mudah",
    "question": "Bagian `else` pada struktur if-else dijalankan ketika ....",
    "options": [
      "kondisi if bernilai false",
      "kondisi if selalu true",
      "program baru dimulai",
      "perulangan selesai"
    ],
    "answer": 0,
    "explanation": "else menjadi pilihan alternatif ketika kondisi pada if tidak terpenuhi."
  },
  {
    "id": "pc03",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "mudah",
    "question": "Struktur yang digunakan untuk memeriksa beberapa kondisi secara berurutan adalah ....",
    "options": [
      "for",
      "else if",
      "cout",
      "return"
    ],
    "answer": 1,
    "explanation": "else if memungkinkan program memeriksa kondisi alternatif secara berurutan."
  },
  {
    "id": "pc04",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "mudah",
    "question": "Kata kunci untuk memilih salah satu cabang berdasarkan nilai sebuah ekspresi adalah ....",
    "options": [
      "switch",
      "while",
      "include",
      "continue"
    ],
    "answer": 0,
    "explanation": "switch digunakan untuk memilih cabang berdasarkan nilai ekspresi yang dibandingkan dengan case."
  },
  {
    "id": "pc05",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kode:\n`int nilai = 80;\nif (nilai >= 75) cout << \"Lulus\";\nelse cout << \"Remedial\";`\nApa keluarannya?",
    "options": [
      "Remedial",
      "Lulus",
      "80",
      "Tidak ada keluaran"
    ],
    "answer": 1,
    "explanation": "Nilai 80 memenuhi kondisi nilai >= 75 sehingga program menampilkan Lulus."
  },
  {
    "id": "pc06",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Manakah operator yang berarti OR (salah satu kondisi benar sudah cukup)?",
    "options": [
      "&&",
      "||",
      "!",
      "=="
    ],
    "answer": 1,
    "explanation": "Operator || menghasilkan true apabila minimal salah satu kondisi bernilai true."
  },
  {
    "id": "pc07",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Kapan nested if digunakan?",
    "options": [
      "ketika sebuah if berada di dalam blok if lainnya",
      "ketika program tidak memiliki kondisi",
      "untuk mengganti semua perulangan",
      "hanya untuk menampilkan teks"
    ],
    "answer": 0,
    "explanation": "Nested if adalah struktur percabangan yang menempatkan if di dalam blok percabangan lain."
  },
  {
    "id": "pc08",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Apa fungsi `break` pada struktur switch-case?",
    "options": [
      "mengulang case sebelumnya",
      "mengakhiri eksekusi switch agar tidak lanjut ke case berikutnya",
      "mengubah nilai variabel",
      "membuat kondisi menjadi true"
    ],
    "answer": 1,
    "explanation": "break menghentikan eksekusi switch sehingga tidak terjadi fall-through ke case setelahnya."
  },
  {
    "id": "pc09",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Bagian `default` pada switch dijalankan ketika ....",
    "options": [
      "semua case cocok",
      "tidak ada case yang cocok dengan nilai ekspresi",
      "case pertama selalu dipilih",
      "program mengalami error"
    ],
    "answer": 1,
    "explanation": "default merupakan pilihan cadangan ketika tidak ada label case yang sesuai."
  },
  {
    "id": "pc10",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kode:\n`int angka = 4;\nif (angka > 5) cout << \"A\";\nelse if (angka > 2) cout << \"B\";\nelse cout << \"C\";`\nApa hasilnya?",
    "options": [
      "A",
      "B",
      "C",
      "AB"
    ],
    "answer": 1,
    "explanation": "angka > 5 salah, tetapi angka > 2 benar. Maka program menampilkan B."
  },
  {
    "id": "pc11",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kondisi `umur >= 12 && umur <= 15`. Kondisi tersebut bernilai true ketika ....",
    "options": [
      "umur kurang dari 12",
      "umur lebih dari 15",
      "umur berada di antara 12 sampai 15 termasuk batasnya",
      "umur harus tepat 12 saja"
    ],
    "answer": 2,
    "explanation": "Operator && mengharuskan kedua kondisi benar, sehingga rentangnya 12 hingga 15 termasuk kedua batas."
  },
  {
    "id": "pc12",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sulit",
    "question": "Perhatikan kode nested if berikut:\n`int nilai = 85;\nif (nilai >= 75) {\n  if (nilai >= 90) cout << \"A\";\n  else cout << \"B\";\n} else cout << \"C\";`\nApa keluarannya?",
    "options": [
      "A",
      "B",
      "C",
      "AB"
    ],
    "answer": 1,
    "explanation": "Nilai 85 memenuhi kondisi pertama, tetapi tidak memenuhi nilai >= 90. Maka cabang else di dalam if dijalankan dan menampilkan B."
  },
  {
    "id": "pc13",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sulit",
    "question": "Apa keluaran kode berikut?\n`int x = 2;\nswitch (x) {\n  case 1: cout << \"Satu\"; break;\n  case 2: cout << \"Dua\";\n  case 3: cout << \"Tiga\"; break;\n  default: cout << \"Lain\";\n}`",
    "options": [
      "Dua",
      "DuaTiga",
      "Tiga",
      "DuaTigaLain"
    ],
    "answer": 1,
    "explanation": "Karena case 2 tidak memiliki break, eksekusi berlanjut ke case 3. Setelah break pada case 3, switch berhenti."
  },
  {
    "id": "pc14",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sulit",
    "question": "Sebuah program memberi kategori: nilai 90 ke atas A, 80–89 B, 70–79 C, selain itu D. Urutan kondisi else if yang paling tepat adalah ....",
    "options": [
      "nilai >= 70, lalu >= 80, lalu >= 90",
      "nilai < 70, lalu < 80, lalu < 90",
      "nilai >= 90, lalu >= 80, lalu >= 70",
      "semua kondisi menggunakan nilai == 90"
    ],
    "answer": 2,
    "explanation": "Memeriksa dari rentang tertinggi ke terendah mencegah nilai yang memenuhi kategori lebih tinggi tertangkap oleh kondisi yang lebih umum."
  },
  {
    "id": "pc15",
    "chapter": "C++ — Percabangan",
    "topicId": "percabangan",
    "category": "PERCABANGAN",
    "difficulty": "sulit",
    "question": "Perhatikan kondisi `!(nilai < 60 || nilai > 100)`. Kondisi tersebut setara dengan ....",
    "options": [
      "nilai di bawah 60 atau di atas 100",
      "nilai antara 60 sampai 100 termasuk batas",
      "nilai tepat 60 saja",
      "semua nilai selain 100"
    ],
    "answer": 1,
    "explanation": "Dengan hukum De Morgan, negasi OR menjadi AND: nilai >= 60 dan nilai <= 100."
  },
  {
    "id": "pr01",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "mudah",
    "question": "Perulangan yang biasanya digunakan ketika jumlah pengulangan sudah diketahui adalah ....",
    "options": [
      "if",
      "for",
      "switch",
      "cout"
    ],
    "answer": 1,
    "explanation": "for cocok digunakan ketika pola pengulangan dan batas jumlah iterasi sudah diketahui."
  },
  {
    "id": "pr02",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "mudah",
    "question": "Perintah `while` akan mengulang selama ....",
    "options": [
      "kondisi bernilai true",
      "kondisi bernilai false",
      "program belum memiliki variabel",
      "komputer belum dimatikan"
    ],
    "answer": 0,
    "explanation": "while menguji kondisi sebelum menjalankan blok. Selama kondisi true, perulangan berlanjut."
  },
  {
    "id": "pr03",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "mudah",
    "question": "Perbedaan penting do-while dibanding while adalah ....",
    "options": [
      "do-while tidak memiliki kondisi",
      "do-while menjalankan blok setidaknya satu kali sebelum memeriksa kondisi",
      "do-while hanya bisa menghitung mundur",
      "do-while tidak dapat menggunakan variabel"
    ],
    "answer": 1,
    "explanation": "Kondisi do-while diperiksa setelah blok dijalankan, sehingga blok pasti dieksekusi minimal satu kali."
  },
  {
    "id": "pr04",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "mudah",
    "question": "Kata kunci untuk menghentikan perulangan sebelum kondisi normalnya berakhir adalah ....",
    "options": [
      "skip",
      "stop",
      "break",
      "case"
    ],
    "answer": 2,
    "explanation": "break menghentikan perulangan yang sedang berjalan."
  },
  {
    "id": "pr05",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kode:\n`for (int i = 1; i <= 3; i++) {\n  cout << i;\n}`\nApa keluarannya?",
    "options": [
      "012",
      "123",
      "1234",
      "321"
    ],
    "answer": 1,
    "explanation": "Perulangan dimulai dari 1 dan berjalan selama i <= 3, sehingga menampilkan 1, 2, lalu 3."
  },
  {
    "id": "pr06",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Bagian ketiga pada struktur `for (inisialisasi; kondisi; perubahan)` digunakan untuk ....",
    "options": [
      "mendeklarasikan header",
      "memeriksa kondisi awal",
      "mengubah nilai variabel perulangan setiap iterasi",
      "menutup program"
    ],
    "answer": 2,
    "explanation": "Bagian ketiga biasanya menaikkan atau menurunkan variabel kontrol setelah setiap iterasi."
  },
  {
    "id": "pr07",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kode:\n`int i = 1;\nwhile (i <= 3) {\n  cout << i;\n  i++;\n}`\nApa keluaran program?",
    "options": [
      "123",
      "012",
      "1234",
      "333"
    ],
    "answer": 0,
    "explanation": "i dimulai dari 1, lalu bertambah satu setiap pengulangan sampai nilai 3."
  },
  {
    "id": "pr08",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Jika kondisi do-while langsung bernilai false pada pemeriksaan pertama, berapa kali blok do dijalankan?",
    "options": [
      "0 kali",
      "1 kali",
      "2 kali",
      "terus-menerus"
    ],
    "answer": 1,
    "explanation": "Blok do-while dijalankan terlebih dahulu sebelum kondisi diperiksa, sehingga minimal satu kali."
  },
  {
    "id": "pr09",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Apa fungsi `continue` pada sebuah perulangan?",
    "options": [
      "menghentikan seluruh program",
      "melewati sisa perintah pada iterasi saat ini dan melanjutkan iterasi berikutnya",
      "mengulang dari awal fungsi main tanpa syarat",
      "mengakhiri semua perulangan bersarang"
    ],
    "answer": 1,
    "explanation": "continue melewati sisa statement pada iterasi sekarang, kemudian melanjutkan ke iterasi berikutnya."
  },
  {
    "id": "pr10",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Perhatikan kode:\n`for (int i = 1; i <= 5; i += 2) {\n  cout << i << \" \";\n}`\nApa yang ditampilkan?",
    "options": [
      "1 2 3 4 5",
      "1 3 5",
      "2 4",
      "5 3 1"
    ],
    "answer": 1,
    "explanation": "i dimulai dari 1 dan bertambah 2 sehingga nilainya 1, 3, dan 5."
  },
  {
    "id": "pr11",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sedang",
    "question": "Variabel yang digunakan untuk menjumlahkan nilai dalam perulangan sering disebut ....",
    "options": [
      "accumulator",
      "header",
      "operator",
      "condition"
    ],
    "answer": 0,
    "explanation": "Accumulator adalah variabel penampung hasil penjumlahan yang diperbarui pada setiap iterasi."
  },
  {
    "id": "pr12",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`int total = 0;\nfor (int i = 1; i <= 4; i++) {\n  total += i;\n}\ncout << total;`\nApa hasil akhirnya?",
    "options": [
      "4",
      "6",
      "10",
      "15"
    ],
    "answer": 2,
    "explanation": "Total dihitung 1 + 2 + 3 + 4 = 10."
  },
  {
    "id": "pr13",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sulit",
    "question": "Berapa kali teks `*` ditampilkan oleh kode berikut?\n`for (int i = 1; i <= 3; i++) {\n  for (int j = 1; j <= 2; j++) {\n    cout << \"*\";\n  }\n}`",
    "options": [
      "2 kali",
      "3 kali",
      "5 kali",
      "6 kali"
    ],
    "answer": 3,
    "explanation": "Perulangan luar berjalan 3 kali dan setiap iterasi menjalankan perulangan dalam 2 kali. Total 3 × 2 = 6."
  },
  {
    "id": "pr14",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`int i = 1;\nwhile (i < 10) {\n  cout << i << \" \";\n  i += 3;\n}`\nApa keluaran program?",
    "options": [
      "1 4 7",
      "1 4 7 10",
      "3 6 9",
      "1 2 3 4 5 6 7 8 9"
    ],
    "answer": 0,
    "explanation": "Nilai i yang memenuhi i < 10 adalah 1, 4, dan 7. Setelah menjadi 10, kondisi bernilai false."
  },
  {
    "id": "pr15",
    "chapter": "C++ — Perulangan",
    "topicId": "perulangan",
    "category": "PERULANGAN",
    "difficulty": "sulit",
    "question": "Perhatikan kode:\n`for (int i = 1; i <= 5; i++) {\n  if (i == 3) continue;\n  cout << i << \" \";\n}`\nApa hasil yang ditampilkan?",
    "options": [
      "1 2 3 4 5",
      "1 2 4 5",
      "3",
      "1 2"
    ],
    "answer": 1,
    "explanation": "Saat i bernilai 3, continue melewati perintah cout. Nilai lainnya ditampilkan."
  }
];
