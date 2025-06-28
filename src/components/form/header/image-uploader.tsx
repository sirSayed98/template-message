import { type ChangeEvent, useRef, useState } from 'react'
import ImageDragDrop from './image-drag-drop'
import ImagePreview from './image-preview'
import ImageSelection from './image-selection'
import { useTemplate } from '@/context/templateHook'
import type { ImageFile } from '@/context/interfaces';

const ImageUploader = () => {
  const { setHeader} = useTemplate()
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<ImageFile | null>(null)
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
  const maxFileSize = 5 * 1024 * 1024 // 5MB

  const validateFile = (file: File): boolean => {
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPEG, JPG, and PNG files are allowed')
      return false
    }
    if (file.size > maxFileSize) {
      setError('File size must be less than 5MB')
      return false
    }
    setError('')
    return true
  }

  const processFile = (file: File) => {
    if (validateFile(file)) {
      // Clean up previous preview URL
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage.preview)
      }

      const preview = URL.createObjectURL(file)
      setUploadedImage({ file, preview })
      setHeader({
        format: 'image',
        value: {
          image: { file, preview }
        }
      })
    }
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      processFile(files[0]) // Only take the first file
    }
  }

  const handleBrowseClick = () => {
    if (!uploadedImage) {
      fileInputRef.current?.click()
    }
  }

  const removeImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage.preview)
      setUploadedImage(null)
      setError('')
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      setHeader({
        format: 'none',
        value: {
          image: undefined
        }
      })
    }
  }

  const handleSelectFileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    fileInputRef.current?.click()
  }

  return (
    <div className='w-full mx-auto'>
      {/* Drag and Drop Area */}
      <ImageDragDrop
        processFile={processFile}
        uploadedImage={uploadedImage}
        handleBrowseClick={handleBrowseClick}
        fileInputRef={fileInputRef as React.RefObject<HTMLInputElement>}
        handleFileSelect={handleFileSelect}
        isDragOver={isDragOver}
        setIsDragOver={setIsDragOver}
      >
        {!isDragOver && !uploadedImage && (
          <ImageSelection
            isDragOver={isDragOver}
            handleSelectFileClick={handleSelectFileClick}
          />
        )}

        {uploadedImage && (
          <ImagePreview
            uploadedImage={uploadedImage}
            removeImage={removeImage}
          />
        )}
      </ImageDragDrop>

      {/* Error Message */}
      {error && (
        <div className='mt-3 bg-red-50 border border-red-200 rounded-lg p-4'>
          <p className='text-red-600 text-sm'>{error}</p>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
