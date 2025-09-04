import { NextRequest } from 'next/server';
import { cloudinary } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          folder: 'heejra',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer);
    });

    return Response.json({ 
      message: 'Image uploaded successfully',
      url: (result as any).secure_url,
      public_id: (result as any).public_id
    });
  } catch (error) {
    console.error('Upload error:', error);
    return Response.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // List all images in the 'heejra' folder
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'heejra/',
    });

    return Response.json({
      images: result.resources.map((resource: any) => ({
        url: resource.secure_url,
        public_id: resource.public_id,
      })),
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}