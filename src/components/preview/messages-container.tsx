import { useTemplate } from '@/context/templateHook';
import { getCurrentTimeFormatted } from '@/utils/getCurrentTime';
import { Phone, SquareArrowOutUpRight } from 'lucide-react';


export default function MessageContainer() {
  const { body, footer, header, buttons } = useTemplate();
  const currentTime = getCurrentTimeFormatted();
 
  return (
    <>
    <div
      className={`transform transition-all duration-500 ease-out translate-x-0 translate-y-0 opacity-100 scale-100`}
    >
      {/* Main Bubble */}
      <div className="min-h-[200px] text-left relative bg-white rounded-md shadow-xl border border-gray-200 p-3 max-w-sm">
        <div className="absolute w-4 h-3 bg-white transform rotate-50 left-[-5px] top-[12px]"></div>
        <div>
          {header.format === 'image' && header.value?.image?.preview && (
             <img src={header.value?.image?.preview} alt="header-image" className="w-full h-full mb-3 object-cover" />
          )}
          {/* header */}
          {header.format === 'text' && (
            <h2 className="text-lg font-bold text-gray-800">
              {header.value?.text}
            </h2>
          )}

          {/* body */}
          <p className="text-gray-700 text-sm w-full break-words">
            {body}
          </p>
          {/* footer */}
          {footer && (
            <div className="flex justify-between items-center mt-4 text-xs text-gray-400 break-words">
              <span>{footer}</span>
              <span>{currentTime}</span>
            </div>
          )}
        </div>
        <div>
          {buttons.map((button, index) => (
            <>
              <hr className="border-gray-200" />
              <button onClick={(e) => e.preventDefault()} key={index} className="w-full flex items-center justify-center gap-1 py-3 text-[#00A5F4] font-medium cursor-pointer break-words">
                {button.type === 'URL' && <SquareArrowOutUpRight size={16} />}
                {button.type === 'CALL' && <Phone size={16} />}
                {button.text}
              </button>
            </>
          ))}

        </div>
      </div>
    </div>
    </>
  )
}
