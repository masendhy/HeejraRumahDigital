import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { cloudinary } from './cloudinary';

/**
 * Upload all images from the public directory to Cloudinary
 */
export async function uploadAllPublicImages() {
  try {
    const publicDir = join(process.cwd(), 'public');
    const files = await readdir(publicDir);
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      file.endsWith('.svg') || 
      file.endsWith('.png') || 
      file.endsWith('.jpg') || 
      file.endsWith('.jpeg') || 
      file.endsWith('.gif') ||
      file.endsWith('.webp')
    );
    
    const uploadResults = [];
    
    for (const file of imageFiles) {
      try {
        const filePath = join(publicDir, file);
        const fileBuffer = await readFile(filePath);
        
        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              resource_type: 'image',
              folder: 'heejra',
              public_id: file.replace(/\.[^/.]+$/, ''), // Remove extension for public_id
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          ).end(fileBuffer);
        });
        
        uploadResults.push({
          fileName: file,
          url: (result as any).secure_url,
          public_id: (result as any).public_id,
        });
        
        console.log(`Uploaded ${file} successfully`);
      } catch (error) {
        console.error(`Error uploading ${file}:`, error);
      }
    }
    
    return uploadResults;
  } catch (error) {
    console.error('Error reading public directory:', error);
    throw error;
  }
}