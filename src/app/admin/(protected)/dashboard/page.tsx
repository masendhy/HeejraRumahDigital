'use client';

import { useEffect } from 'react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { isAuthenticated } = useAdminAuth();
  const router = useRouter();

  // Jika sedang memverifikasi auth atau tidak terotentikasi, jangan tampilkan konten
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Memverifikasi sesi...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    // Jika tidak terotentikasi, hook akan redirect otomatis
    return null;
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Statistik Proyek</h2>
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-sm text-gray-500 mt-1">Proyek aktif</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Statistik Pengguna</h2>
          <p className="text-3xl font-bold text-purple-600">142</p>
          <p className="text-sm text-gray-500 mt-1">Pengguna terdaftar</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Pesan Masuk</h2>
          <p className="text-3xl font-bold text-purple-600">24</p>
          <p className="text-sm text-gray-500 mt-1">Pesan belum dibaca</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Aksi Cepat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => router.push('/admin/projects')}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Kelola Proyek
          </button>
          <button
            onClick={() => router.push('/admin/users')}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Kelola Pengguna
          </button>
          <button
            onClick={() => router.push('/admin/messages')}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Pesan Masuk
          </button>
          <button
            onClick={() => router.push('/admin/settings')}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
}