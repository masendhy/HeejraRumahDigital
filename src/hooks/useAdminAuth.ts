import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = sedang memverifikasi
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Hanya jalankan di sisi client

    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        // Tidak ada token, redirect ke login
        setIsAuthenticated(false);
        router.push('/admin/login');
      } else {
        // Ada token, user terotentikasi
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [isClient, router]);

  return { isAuthenticated };
};

export default useAdminAuth;