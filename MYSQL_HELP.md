# Panduan Konfigurasi Database MySQL

Jika Anda mengalami masalah otentikasi saat menjalankan migrasi Prisma, Anda perlu mengkonfigurasi MySQL dengan benar.

## Opsi 1: Membuat user database baru untuk aplikasi

Jalankan perintah berikut di MySQL CLI Anda (sesuaikan password sesuai kebutuhan Anda):

```sql
CREATE USER 'heejra_user'@'localhost' IDENTIFIED BY 'heejra_password123';
CREATE DATABASE heejra_rumah_digital;
GRANT ALL PRIVILEGES ON heejra_rumah_digital.* TO 'heejra_user'@'localhost';
FLUSH PRIVILEGES;
```

Lalu update file .env.local dengan:
```
DATABASE_URL="mysql://heejra_user:heejra_password123@127.0.0.1:3306/heejra_rumah_digital"
```

## Opsi 2: Mengganti otentikasi untuk user root

Jika Anda ingin tetap menggunakan user root, Anda bisa mengganti metode otentikasinya:

1. Login ke MySQL sebagai root (dengan cara yang bekerja di sistem Anda):
```bash
mysql -u root -p
```

2. Dalam MySQL CLI, jalankan:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
FLUSH PRIVILEGES;
```

3. Lalu update .env.local:
```
DATABASE_URL="mysql://root:@127.0.0.1:3306/heejra_rumah_digital"
```

## Opsi 3: Menggunakan file socket (jika di Unix/Linux)

Beberapa sistem menggunakan socket file untuk otentikasi. Dalam kasus ini, URL akan berbeda.

## Informasi tambahan

Jika Anda menggunakan Homebrew di macOS, Anda bisa menginstal dan menjalankan MySQL dengan perintah berikut:

```bash
brew install mysql
brew services start mysql
```

Setelah diinstal, biasanya Anda bisa login ke MySQL tanpa password setelah instalasi pertama:
```bash
mysql -u root
```

## Solusi untuk sistem Anda

Silakan coba perintah MySQL berikut dan beri tahu saya hasilnya:
- `mysql -u root -p` (lalu masukkan password jika diminta)
- `mysql -u root --protocol=tcp -h 127.0.0.1 -P 3306`