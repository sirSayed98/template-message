import React, { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import PreviewImage from './preview';
import ImageSelection from './image-selection';

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
  const handleSelectFileClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fileInputRef.current?.click();
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
          <ImageSelection
            isDragOver={isDragOver}
            handleSelectFileClick={handleSelectFileClick}
          />
        ) : (
          // Preview State
          <PreviewImage uploadedImage={uploadedImage} removeImage={removeImage} />
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