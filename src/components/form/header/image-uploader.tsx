import { CloudUpload, X } from 'lucide-react';
import React, { type ChangeEvent, type DragEvent, useRef, useState } from 'react';

interface ImageFile {
  file: File;
  preview: string;
}

const ImageDragDrop: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<ImageFile | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const validateFile = (file: File): boolean => {
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPEG, JPG, and PNG files are allowed');
      return false;
    }
    if (file.size > maxFileSize) {
      setError('File size must be less than 5MB');
      return false;
    }
    setError('');
    return true;
  };

  const processFile = (file: File) => {
    if (validateFile(file)) {
      // Clean up previous preview URL
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage.preview);
      }

      const preview = URL.createObjectURL(file);
      setUploadedImage({ file, preview });
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]); // Only take the first file
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]); // Only take the first file
    }
  };

  const handleBrowseClick = () => {
    if (!uploadedImage) {
      fileInputRef.current?.click();
    }
  };

  const removeImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage.preview);
      setUploadedImage(null);
      setError('');
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="w-full mx-auto">
      {/* Drag and Drop Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg overflow-hidden transition-all duration-200 ease-in-out
          ${uploadedImage ? 'border-gray-300' : 'cursor-pointer'}
          ${isDragOver && !uploadedImage
            ? 'border-blue-400 bg-blue-50 scale-105'
            : !uploadedImage
              ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              : ''
          }
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        style={{  minHeight: '300px' }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpeg,.jpg,.png"
          onChange={handleFileSelect}
          className="hidden"
        />

        {!uploadedImage ? (
          // Upload State - Button is within the frame
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className={`mx-auto w-16 h-16  flex items-center justify-center`}>
                <CloudUpload size={38} className={`${isDragOver ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>

              <div>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  Drag and drop file here to upload or{' '}
                  <span className='text-[#9B7CB7] cursor-pointer'> Browse </span>
                </p>
                <p className='text-[#797979] mb-4'>Allowed types.jpeg, .jpg, .png</p>

                {/* SELECT FILE Button - Inside the frame */}
                
                <button onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }} className="mt-2 px-4 py-2 border-2 border-[#9B7CB7] text-[#9B7CB7] font-medium text-md rounded-md bg-transparent cursor-pointer">
                    SELECT FILE
                  </button>
              </div>
            </div>

            {isDragOver && (
              <div className="absolute inset-0 bg-blue-50 bg-opacity-50 pointer-events-none" />
            )}
          </div>
        ) : (
          // Preview State
          <div className="relative group">
            <img
              src={uploadedImage.preview}
              alt={uploadedImage.file.name}
              className="w-full h-full object-cover"
            />

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
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ImageDragDrop;