import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hapus semua admin yang sudah ada (opsional)
  await prisma.admin.deleteMany({});

  // Hash password sebelum menyimpan
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Buat admin default
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: hashedPassword,
    },
  });

  console.log(`Admin user created with ID: ${admin.id}`);
  console.log(`Email: ${admin.email}`);
  console.log(`Name: ${admin.name}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });