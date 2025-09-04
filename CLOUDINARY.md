# Cloudinary Integration

This project is now integrated with Cloudinary for image management.

## Credentials

- **Cloud Name**: dhenoyfsw
- **API Key**: 938597427814281
- **API Secret**: 3A6ecmFiJDCjIQ9qeefjW_waSSg

## Setup

The Cloudinary integration has been configured in:
- `src/lib/cloudinary.ts` - Main configuration file
- `src/app/api/upload/route.ts` - API endpoint for uploading images
- `src/app/api/images/route.ts` - API endpoint for fetching images

## Usage

### Upload Images

To upload images to Cloudinary:

```bash
npm run upload:images
```

This will upload all images from the `public/` directory to Cloudinary.

### Display Images

To display images from Cloudinary in your components, use the `CloudinaryImage` component:

```tsx
import CloudinaryImage from '@/components/CloudinaryImage';

<CloudinaryImage
  publicId="heejra/your-image"
  alt="Description"
  width={200}
  height={200}
/>
```

### API Endpoints

1. **Upload an image**: POST `/api/upload`
2. **Get all images**: GET `/api/images`
3. **Get uploaded images**: GET `/api/upload`

## Uploaded Images

The following images have been uploaded to Cloudinary:
- file.svg
- globe.svg
- next.svg
- vercel.svg
- window.svg

They can be accessed using their public IDs:
- heejra/file
- heejra/globe
- heejra/next
- heejra/vercel
- heejra/window

## Security

The Cloudinary credentials are stored in the code. In a production environment, you should move these to environment variables in your `.env` file:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhenoyfsw
CLOUDINARY_API_KEY=938597427814281
CLOUDINARY_API_SECRET=3A6ecmFiJDCjIQ9qeefjW_waSSg
```

And update the configuration in `src/lib/cloudinary.ts` to use these environment variables.