# Panduan Lengkap Setup Database Admin

File ini berisi panduan lengkap untuk menyelesaikan setup database admin Anda.

## Status Saat Ini
- Model Admin sudah ditambahkan ke schema Prisma
- API endpoint login admin sudah dibuat
- Login page admin sudah diperbarui (tanpa link "Kembali ke beranda")
- Seed script sudah dibuat untuk membuat data admin awal
- Setup script sudah disiapkan
- Prisma Studio bisa diakses di http://localhost:5555 (setelah database aktif)

## Langkah-langkah Lengkap untuk Menyelesaikan Setup

### 1. Atasi Masalah Otentikasi MySQL
Salah satu dari dua cara ini:

#### Opsi A: Gunakan Homebrew (jika Anda belum menginstal MySQL)
```bash
# Instal dan mulai MySQL
brew install mysql
brew services start mysql

# Login tanpa password (seharusnya bisa setelah instalasi baru)
mysql -u root

# Dari dalam MySQL CLI, set password kosong untuk root:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
FLUSH PRIVILEGES;
EXIT;
```

#### Opsi B: Reset Otentikasi (jika MySQL sudah terinstal)
Lihat instruksi di MYSQL_RESET.md untuk cara reset otentikasi MySQL

### 2. Jalankan Setup Script
Setelah MySQL bisa diakses tanpa password:
```bash
./setup_db.sh
```

### 3. Verifikasi Setup
Jika setup berhasil:
- Database `heejra_rumah_digital` akan dibuat
- Tabel `Admin` akan berisi data admin default
- Anda bisa login admin di http://localhost:3000/admin/login

### 4. Akses Data Admin
Setelah setup selesai, Anda bisa mengakses data admin melalui:

#### Prisma Studio (GUI)
```bash
npx prisma studio
```
Lalu buka http://localhost:5555

#### MySQL CLI
```bash
mysql -u root heejra_rumah_digital
```

#### PHPMyAdmin (jika Anda menginstalnya)
- Login ke PHPMyAdmin
- Pilih database `heejra_rumah_digital`
- Lihat tabel `Admin`

## Kredensial Default
- Email: admin@example.com
- Password: admin123

## Troubleshooting

### Jika Prisma Studio tidak bisa terhubung:
- Pastikan MySQL server berjalan
- Pastikan variabel DATABASE_URL di .env.local benar
- Jalankan Prisma Studio dengan perintah:
```bash
DATABASE_URL="mysql://root@127.0.0.1:3306/heejra_rumah_digital" npx prisma studio
```

### Jika migrasi gagal:
- Pastikan MySQL bisa diakses: `mysql -u root -e "SHOW DATABASES;"`
- Pastikan database user bisa dibuat: `mysql -u root -e "CREATE DATABASE test; DROP DATABASE test;"`

### Jika login admin gagal:
- Pastikan seed telah berjalan dengan sukses
- Pastikan API route bisa mengakses database
- Cek browser console untuk error

## Setelah Setup Selesai
Setelah semua selesai dan database aktif, sistem login admin akan:
1. Menerima kredensial dari form login
2. Memverifikasi kredensial terhadap tabel Admin di database
3. Membuat sesi untuk pengguna yang berhasil login
4. Mengarahkan ke dashboard admin

Semua ini berjalan dengan sistem otentikasi yang aman menggunakan bcrypt untuk hashing password.