# Panduan Reset Otentikasi MySQL Root

Jika Anda tidak bisa login ke MySQL sebagai root tanpa password, ikuti langkah berikut untuk mengatur ulang otentikasi.

## Metode 1: Menggunakan safe mode (jika MySQL berjalan sebagai layanan)

1. Hentikan layanan MySQL:
   - Jika menggunakan Homebrew: `brew services stop mysql`
   - Atau: `sudo /usr/local/mysql/support-files/mysql.server stop`

2. Jalankan MySQL dalam safe mode tanpa otentikasi:
```
sudo mysqld_safe --skip-grant-tables &
```

3. Hubungkan ke MySQL tanpa password:
```
mysql -u root
```

4. Dalam MySQL CLI, ganti password root:
```sql
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;
EXIT;
```

5. Restart MySQL layanan:
   - Jika menggunakan Homebrew: `brew services start mysql`

## Metode 2: Menggunakan file konfigurasi

Buat file konfigurasi sementara:

1. Buat file `/tmp/mysql-reset.cnf`:
```
[mysqld]
skip-grant-tables
skip-networking
```

2. Hentikan MySQL dan jalankan dengan konfigurasi ini:
```
sudo mysqld --defaults-file=/tmp/mysql-reset.cnf &
```

3. Hubungkan ke MySQL dan reset password:
```
mysql -u root
```

4. Setelah login tanpa password, jalankan SQL untuk reset password seperti di atas

## Metode 3: Jika Anda tahu password root

Jika Anda sebenarnya memiliki password root, ganti file `.env.local`:
```
DATABASE_URL="mysql://root:[PASSWORD_ANDA]@127.0.0.1:3306/heejra_rumah_digital"
```

## Setelah mengatur ulang otentikasi

Setelah berhasil mengatur ulang otentikasi root, jalankan script setup kita:
```
./setup_db.sh
```

## Verifikasi instalasi MySQL

Untuk mengecek status MySQL:
- `brew services list | grep mysql` (jika menggunakan Homebrew)
- `ps aux | grep mysql` (untuk melihat proses MySQL)
- `sudo lsof -i :3306` (untuk melihat apakah MySQL mendengarkan di port 3306)