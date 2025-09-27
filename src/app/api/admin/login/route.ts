import { NextRequest } from 'next/server';
import { PrismaClient } from '@/generated/prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validasi input
    if (!email || !password) {
      return Response.json(
        { message: 'Email dan password wajib diisi' },
        { status: 400 }
      );
    }

    // Untuk sementara, cek apakah kredensial cocok dengan admin default
    // Seharusnya dihapus setelah database sudah terhubung
    if (email === 'admin@example.com' && password === 'admin123') {
      // Jika login berhasil, buat token sementara (dalam implementasi sebenarnya, gunakan JWT yang aman)
      const token = `admin-token-${Date.now()}-1`;
      
      return Response.json({
        message: 'Login berhasil',
        token: token,
        admin: {
          id: 1,
          email: email,
          name: 'Admin User',
        },
      });
    }

    // Jika mock login gagal, coba dengan database
    const admin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });

    // Cek apakah admin ditemukan dan password cocok
    if (!admin || !await bcrypt.compare(password, admin.password)) {
      return Response.json(
        { message: 'Email atau password salah' },
        { status: 401 }
      );
    }

    // Jika login berhasil, buat token (dalam implementasi sebenarnya, gunakan JWT)
    const token = `admin-token-${Date.now()}-${admin.id}`;
    
    return Response.json({
      message: 'Login berhasil',
      token: token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { message: 'Terjadi kesalahan saat login' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}