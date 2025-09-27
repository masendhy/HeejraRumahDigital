import { NextRequest, NextResponse } from 'next/server';

// Middleware untuk melindungi halaman admin
export function middleware(request: NextRequest) {
  // Cek apakah path dimulai dengan /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Untuk sementara, kita hanya memeriksa token di localStorage
    // Dalam implementasi sebenarnya, Anda mungkin ingin memeriksa session di server
    
    // Kita tidak bisa mengakses localStorage di server side, 
    // jadi kita akan memeriksanya di client side di halaman-halaman admin
    // Tapi kita tetap bisa melindungi beberapa endpoint API di sini
    
    // Untuk halaman-halaman admin, kita biarkan request berjalan
    // dan memeriksa session di client side
  }

  return NextResponse.next();
}

// Tentukan path mana yang akan menggunakan middleware ini
export const config = {
  matcher: [
    /*
     * Batasi matcher ke path admin saja
     */
    '/admin/:path*',
  ],
};