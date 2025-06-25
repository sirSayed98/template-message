import { Store } from 'lucide-react';

export default function PhoneWrapper({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="flex items-center justify-center p-1">
        {/* Phone Frame Container */}
        <div className="relative">
          {/* Phone Frame */}
          <div className="w-95 h-[680px] bg-white rounded-[3rem] p-2 shadow-2xl relative">
            {/* Power Button */}
            <div className="absolute -right-1 top-20 w-1 h-12 bg-white rounded-r-lg"></div>

            {/* Volume Buttons */}
            <div className="absolute -left-1 top-16 w-1 h-8 bg-white rounded-l-lg"></div>
            <div className="absolute -left-1 top-28 w-1 h-12 bg-white rounded-l-lg"></div>

            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2.5rem] p-1 relative overflow-hidden">

              {/* Screen Content */}
              <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden animate-scale-in">
                <div className="bg-[#00A884] p-4 flex items-center space-x-4 rounded-t-3xl">
                  <div className="w-12 h-12 bg-[#008069] rounded-full flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div className="h-2 bg-white rounded-full w-30"></div>
                </div>

                <div className="bg-[#ebe6df] h-full overflow-y-auto p-4 scroll-smooth">
                  {children}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}