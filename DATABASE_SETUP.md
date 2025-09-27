# Panduan Konfigurasi Database

## Konfigurasi Database MySQL

Aplikasi HeejraRumahDigital menggunakan database MySQL untuk menyimpan data. Untuk menjalankan migrasi database, Anda perlu mengkonfigurasi database terlebih dahulu.

### Persyaratan:
- MySQL Server harus terinstall dan berjalan di sistem Anda
- Pastikan MySQL server berjalan di port default (3306)

### Konfigurasi Koneksi Database:

File `.env.local` harus berisi URL koneksi database:

```
DATABASE_URL="mysql://username:password@127.0.0.1:3306/nama_database"
```

Contoh dengan user `root` yang memiliki password `password123`:
```
DATABASE_URL="mysql://root:password123@127.0.0.1:3306/heejra_rumah_digital"
```

Gantilah:
- `username`: nama user MySQL Anda
- `password`: password untuk user MySQL
- `nama_database`: nama database yang akan digunakan (default: heejra_rumah_digital)

### Migrasi Database:

Setelah mengkonfigurasi koneksi database, jalankan perintah berikut:

```bash
npx prisma migrate dev
```

### Membuat User Admin Awal:

Untuk membuat user admin pertama kali, Anda bisa menggunakan perintah Prisma:

```bash
npx prisma db seed
```

Namun, Anda perlu membuat skrip seeding terlebih dahulu jika ingin membuat admin default.

### Jika Database Belum Dibuat:

Prisma akan mencoba membuat database jika belum ada. Namun, dalam beberapa kasus Anda mungkin perlu membuatnya secara manual dari klien MySQL:

```sql
CREATE DATABASE heejra_rumah_digital;
```