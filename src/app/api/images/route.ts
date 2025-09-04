import { NextResponse } from 'next/server';
import { getCloudinaryImages } from '@/lib/getCloudinaryImages';

export async function GET() {
  try {
    const images = await getCloudinaryImages();
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}