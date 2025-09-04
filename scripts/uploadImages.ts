import { uploadAllPublicImages } from '../src/lib/uploadImages';

async function main() {
  console.log('Starting image upload process...');
  
  try {
    const results = await uploadAllPublicImages();
    console.log('Upload completed successfully!');
    console.log('Uploaded images:', results);
  } catch (error) {
    console.error('Upload process failed:', error);
  }
}

main();