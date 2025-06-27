import { type DragEvent } from 'react';
import type { ImageFile } from '@/context/interfaces';
export default function ImageDragDrop({
  children,
  processFile,
  uploadedImage,
  handleBrowseClick,
  fileInputRef,
  handleFileSelect,
  isDragOver,
  setIsDragOver
}: {
  children: React.ReactNode;
  processFile: (file: File) => void;
  uploadedImage: ImageFile | null;
  handleBrowseClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement> | null;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDragOver: boolean;
  setIsDragOver: (isDragOver: boolean) => void;
}) {
  
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    handleClick(e);
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    handleClick(e);
    setIsDragOver(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    handleClick(e);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    handleClick(e);
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]); // Only take the first file
    }
  };
  const handleClick = (e:React.MouseEvent<HTMLDivElement>)=>{
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <>
      <div
        className={`h-[240px] relative border-2 border-dashed rounded-lg overflow-hidden transition-all duration-200 ease-in-out
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
      >
        <input
          ref={fileInputRef as React.RefObject<HTMLInputElement>}
          type="file"
          accept=".jpeg,.jpg,.png"
          onChange={handleFileSelect}
          className="hidden"
        />

        {children}
      </div>
    </>
  );
}