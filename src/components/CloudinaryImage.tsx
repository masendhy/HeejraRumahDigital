import Image from 'next/image';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function CloudinaryImage({ 
  publicId, 
  alt, 
  width, 
  height,
  className 
}: CloudinaryImageProps) {
  // Construct the Cloudinary URL
  const cloudName = 'dhenoyfsw';
  const url = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;
  
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}