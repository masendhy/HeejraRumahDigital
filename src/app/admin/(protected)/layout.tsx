'use client';

import { useEffect } from 'react';
import useAdminAuth from '@/hooks/useAdminAuth';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

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

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    router.push('/admin/login');
  };

  // Menu navigasi admin
  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Proyek', href: '/admin/projects' },
    { name: 'Pengguna', href: '/admin/users' },
    { name: 'Pesan', href: '/admin/messages' },
    { name: 'Pengaturan', href: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-10">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded-md text-sm font-medium ${
                      pathname === item.href
                        ? 'bg-purple-100 text-purple-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  {pathname.includes('dashboard') && 'Dashboard'}
                  {pathname.includes('projects') && 'Kelola Proyek'}
                  {pathname.includes('users') && 'Kelola Pengguna'}
                  {pathname.includes('messages') && 'Pesan Masuk'}
                  {pathname.includes('settings') && 'Pengaturan'}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {localStorage.getItem('adminEmail') || 'Admin'}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>
      </div>
    </div>
  );
}