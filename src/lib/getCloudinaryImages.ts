import { cloudinary } from './cloudinary';

/**
 * Get all images from Cloudinary
 */
export async function getCloudinaryImages() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'heejra/',
    });

    return result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    throw error;
  }
}