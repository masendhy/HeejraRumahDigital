'use client';

import { useEffect } from 'react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useRouter } from 'next/navigation';

export default function AdminUsers() {
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
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Kelola Pengguna</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Terdaftar
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  john@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10 Agu 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-purple-600 hover:text-purple-900 mr-4">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Hapus</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  jane@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12 Agu 2024
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
    </div>
  );
}