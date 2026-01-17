# Website Pendaftaran Event Creative Talk UI/UX

Website ini dibuat sebagai Mini Project UAS mata kuliah Pemrograman Web.  
Tujuan dari website ini adalah untuk menampilkan informasi event serta menyediakan sistem pendaftaran peserta secara interaktif tanpa menggunakan backend.

## Deskripsi Singkat
Creative Talk UI/UX merupakan event pembelajaran mengenai dasar UI/UX menggunakan Figma yang diselenggarakan secara offline di STIKOM El Rahma. Website ini menampilkan detail event, form pendaftaran, serta daftar peserta yang mendaftar.

## Fitur Website
- Menampilkan informasi event (judul, tanggal, lokasi, dan kuota)
- Form pendaftaran peserta (nama, email, nomor HP, kategori)
- Validasi input menggunakan JavaScript
- Pembatasan kuota maksimal 50 peserta
- Menampilkan pesan berhasil atau gagal saat pendaftaran
- Menampilkan daftar dan jumlah peserta secara realtime
- Data peserta disimpan menggunakan localStorage

## Teknologi yang Digunakan
- HTML untuk struktur halaman
- CSS untuk tampilan dan layout
- JavaScript untuk validasi form, pengaturan kuota, dan manipulasi DOM

## Alur Kerja Program
1. Pengguna mengisi form pendaftaran
2. JavaScript melakukan validasi input
3. Jika data valid dan kuota tersedia, data disimpan ke localStorage
4. Data peserta ditampilkan ke halaman tanpa reload
5. Jika kuota penuh, form pendaftaran otomatis ditutup
