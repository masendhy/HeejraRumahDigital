import { redirect } from 'next/navigation';

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect ke halaman login jika mencoba mengakses halaman admin root
  if (typeof window !== 'undefined') {
    // Client-side redirect
    redirect('/admin/login');
  }

  return children;
}