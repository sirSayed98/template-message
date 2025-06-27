import { CloudUpload } from "lucide-react";

export default function ImageSelection({
  isDragOver,
  handleSelectFileClick,
}: {
  isDragOver: boolean;
  handleSelectFileClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {

  return (
    <>
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

            <button onClick={handleSelectFileClick} className="mt-2 px-4 py-2 border-2 border-[#9B7CB7] text-[#9B7CB7] font-medium text-md rounded-md bg-transparent cursor-pointer">
              SELECT FILE
            </button>
          </div>
        </div>

        {isDragOver && (
          <div className="absolute inset-0 bg-blue-50 bg-opacity-50 pointer-events-none" />
        )}
      </div>
    </>
  );
}