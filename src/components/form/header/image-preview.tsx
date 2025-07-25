import { X } from 'lucide-react';
import type { ImageFile } from '@/context/interfaces';
export default function ImagePreview({
  uploadedImage,
  removeImage,
}: {
  uploadedImage: ImageFile;
  removeImage: () => void;
}) {
  return (
    <>
      <div className="group h-full">
        <div className='h-full w-full flex items-center ml-4'>
          <img
            src={uploadedImage.preview}
            alt={uploadedImage.file.name}
            className='h-[200px] w-[300px]'
          />
        </div>

        {/* Delete Button - Shows on Hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeImage();
          }}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
          title="Delete image"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-sm font-medium truncate" title={uploadedImage.file.name}>
            {uploadedImage.file.name}
          </p>
          <p className="text-xs text-gray-300">
            {(uploadedImage.file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
    </>
  );
}