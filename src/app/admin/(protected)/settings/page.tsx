'use client';

import { useEffect, useState } from 'react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useRouter } from 'next/navigation';

export default function AdminSettings() {
  const { isAuthenticated } = useAdminAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    adminEmail: localStorage.getItem('adminEmail') || 'admin@example.com',
    siteName: 'Heejra Rumah Digital',
    contactEmail: 'contact@heejra.com',
    phoneNumber: '+62 123 4567 8900',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda akan menyimpan pengaturan ke database
    console.log('Pengaturan disimpan:', formData);
    alert('Pengaturan berhasil disimpan!');
  };

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Pengaturan</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email Admin
            </label>
            <input
              type="email"
              id="adminEmail"
              name="adminEmail"
              value={formData.adminEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Situs
            </label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email Kontak
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Telepon
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Simpan Pengaturan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}