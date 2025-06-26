import { Phone, SquareArrowOutUpRight } from 'lucide-react';

export default function MessageContainer() {
  return (
    <div
      className={`transform transition-all duration-500 ease-out translate-x-0 translate-y-0 opacity-100 scale-100`}
    >
      {/* Main Bubble */}
      <div className="text-left relative bg-white rounded-md shadow-xl border border-gray-200 p-3 max-w-sm">
        <div className="absolute w-4 h-3 bg-white transform rotate-50 left-[-5px] top-[12px]"></div>
        <div>
          {/* header */}
          <h2 className="text-lg font-bold text-gray-800">
            Don't miss out on our latest offers!
          </h2>
          {/* body */}
          <p className="text-gray-700 text-sm">
            Hey, shop now through our online store and use code <strong>OFFR30</strong> to get 30% off of all products.
          </p>
          {/* footer */}
          <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
            <span>Powered by arabot</span>
            <span>14:05 PM</span>
          </div>
        </div>
        <div className="border-t border-gray-200">
          {/* website link */}
          <button
            className="w-full flex items-center justify-center gap-1 py-3 text-[#00A5F4] font-medium"
          >
            <SquareArrowOutUpRight size={16} />
            Offer Details
          </button>
          <hr className="border-gray-200" />
          {/* phone button */}
          <button
            className="w-full flex items-center justify-center gap-1 py-3 text-[#00A5F4] font-medium"
          >
            <Phone size={16} />
            Call
          </button>
        </div>
      </div>
    </div>
  )
}
