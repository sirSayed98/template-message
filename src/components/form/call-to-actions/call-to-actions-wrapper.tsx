import type { ButtonType } from '@/context/interfaces'
import { useTemplate } from '@/context/templateHook'
import { Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import ButtonConfig from './button-config'

export default function CallToActionsWrapper() {
  const [count, setCount] = useState(1)
  
  const emptyButton: ButtonType = useMemo(() => ({
    type: 'URL',
    text: '',
    value: {
      url: ''
    }
  }), [])

  const { setButtons,buttons } = useTemplate()
  
  
  const addButton = () => {
    setCount(count + 1)
    setButtons([...buttons, emptyButton])
  }
  
  const handleButtonChange = (id: number, button: ButtonType) => {
    const newButtons = [...buttons]
    newButtons[id] = button
    setButtons(newButtons)
  }

 
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='mt-4 flex items-center justify-between gap-2'>
          <div className='w-full'>
            <ButtonConfig id={index} onChange={handleButtonChange} />
          </div>
          <Trash2 onClick={() => setCount(count - 1)} size={16} className='cursor-pointer' color='gray' />
        </div>
      ))}
      {count < 2 && (
        <button
          onClick={addButton}
          className='mt-4 bg-[#9b7cb7] text-white text-sm px-4 py-2 rounded cursor-pointer'
        >
          <span className='text-sm font-medium'>Add action</span>
        </button>
      )}
    </>
  )
}
