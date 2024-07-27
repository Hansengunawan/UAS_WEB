# Layanan Smart City Jakarta Berbasis *Location-based Service*
Dibuat sebagai pemenuhan tugas pemrograman web Universitas Esa Unggul, Semester 2 TA 2023-2024.

## Anggota
| NIM         | Nama                      |
|-------------|---------------------------|
| 20210801355 | Hansen                    |
| 20220801462 | Steven Christy            |
| 20230801470 | Nathaniel Evan Gunawan    |
| 20230801497 | Fathimah Azzahro Hasni R. |

## How to run?
- Jalankan `npm install` baik di *root folder* maupun folder `api` untuk menginstal *dependency-dependency* yang digunakan.
- *Export SQL dump* ke basis data relasional lokal. Disarankan menggunakan MariaDB/MySQL.
- Jalankan `npm start` di *root folder* untuk menjalankan front-end React.js.
- Jalankan `node app.js` di folder `api` untuk menjalankan back-end Express.js
    + Pastikan bahwa nama basis data, nama dan kata sandi pengguna yang didefinisikan di *file* `api/routes/auth.js` sudah benar.
