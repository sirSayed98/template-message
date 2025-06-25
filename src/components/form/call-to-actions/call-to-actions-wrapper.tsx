import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import ButtonConfig from './button-config'

export default function CallToActionsWrapper() {
  const [count, setCount] = useState(1)
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='mt-4 flex items-center justify-between gap-2'>
          <div className='w-full'>
            <ButtonConfig />
          </div>
          <Trash2 onClick={() => setCount(count - 1)} size={16} className='cursor-pointer' color='gray' />
        </div>
      ))}
      {count < 2 && (
        <button
          onClick={() => setCount(count + 1)}
          className='mt-4 bg-[#9b7cb7] text-white text-sm px-4 py-2 rounded cursor-pointer'
        >
          <span className='text-sm font-medium'>Add action</span>
        </button>
      )}
    </>
  )
}
