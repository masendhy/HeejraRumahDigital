#!/bin/bash

# Script konfigurasi database untuk HeejraRumahDigital
echo "Memulai konfigurasi database HeejraRumahDigital..."

# 1. Membuat user database dan database
echo "Membuat user database dan database..."
mysql -u root --protocol=tcp -h 127.0.0.1 -P 3306 -e "
CREATE USER IF NOT EXISTS 'heejra_user'@'localhost' IDENTIFIED BY 'heejra_password123';
CREATE DATABASE IF NOT EXISTS heejra_rumah_digital;
GRANT ALL PRIVILEGES ON heejra_rumah_digital.* TO 'heejra_user'@'localhost';
FLUSH PRIVILEGES;
"

if [ $? -eq 0 ]; then
    echo "User database dan database berhasil dibuat"
else
    echo "Gagal membuat user database dan database"
    echo "Mencoba alternatif login..."
    
    # Mungkin perlu login dengan password kosong
    mysql -u root -p --protocol=tcp -h 127.0.0.1 -P 3306 -e "
CREATE USER IF NOT EXISTS 'heejra_user'@'localhost' IDENTIFIED BY 'heejra_password123';
CREATE DATABASE IF NOT EXISTS heejra_rumah_digital;
GRANT ALL PRIVILEGES ON heejra_rumah_digital.* TO 'heejra_user'@'localhost';
FLUSH PRIVILEGES;
" 2>/dev/null <<< ""

    if [ $? -eq 0 ]; then
        echo "User database dan database berhasil dibuat dengan alternatif login"
    else
        echo "Gagal membuat user database dan database dengan alternatif login"
        echo "Pastikan MySQL server berjalan dan Anda bisa login sebagai root"
        exit 1
    fi
fi

# 2. Update file .env.local
echo "Memperbarui file .env.local..."
cat > .env.local << EOF
DATABASE_URL="mysql://heejra_user:heejra_password123@127.0.0.1:3306/heejra_rumah_digital"
EOF

echo "File .env.local telah diperbarui"

# 3. Generate Prisma client
echo "Meng-generate Prisma client..."
npx prisma generate

if [ $? -eq 0 ]; then
    echo "Prisma client berhasil digenerate"
else
    echo "Gagal meng-generate Prisma client"
    exit 1
fi

# 4. Menjalankan migrasi
echo "Menjalankan migrasi database..."
npx prisma migrate dev --name init

if [ $? -eq 0 ]; then
    echo "Migrasi database berhasil"
else
    echo "Gagal menjalankan migrasi database"
    exit 1
fi

# 5. Install bcryptjs jika belum
echo "Memastikan bcryptjs terinstall..."
npm install bcryptjs

# 6. Membuat data admin awal
echo "Membuat data admin awal..."
npm run db:seed

if [ $? -eq 0 ]; then
    echo "Data admin awal berhasil dibuat"
else
    echo "Gagal membuat data admin awal"
    exit 1
fi

echo "Konfigurasi database selesai!"
echo "Anda sekarang dapat melihat data admin di database MySQL:"
echo "- Database: heejra_rumah_digital"
echo "- Username: heejra_user"
echo "- Password: heejra_password123"
echo ""
echo "Anda bisa mengakses data admin melalui PHPMyAdmin atau klien database lainnya"