'use client';

import { useEffect } from 'react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useRouter } from 'next/navigation';

export default function AdminProjects() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Kelola Proyek</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Admin</span>
              <button
                onClick={() => {
                  localStorage.removeItem('adminToken');
                  localStorage.removeItem('adminEmail');
                  router.push('/admin/login');
                }}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Daftar Proyek</h2>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600">
              Tambah Proyek Baru
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal Dibuat
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Website Showroom
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Showroom digital modern untuk produk
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 Agu 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-4">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Landing Page Startup
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Landing page untuk startup teknologi
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20 Agu 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-4">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}