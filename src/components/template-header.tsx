import { useTemplate } from '@/context/templateHook'
import { Plus, Save } from 'lucide-react'

export default function NewTemplateMessage() {
  const { setRunValidation, getStructuredJSON } = useTemplate()
  return (
    <div className='mb-12'>
      <div className='fixed top-0 left-0 right-0 z-10 bg-white flex items-center justify-between border-b border-[#F1F3F5] p-2'>
        <div className='flex items-center space-x-2 text-black text-sm font-medium'>
          <Plus size={16} className='text-gray-700' />
          <span className='font-medium text-2xl'>New Template Message</span>
        </div>

        <button
          type='submit'
          onClick={e => {
            e.preventDefault()
            setRunValidation(true)
            getStructuredJSON()
          }}
          className='flex items-center gap-2 bg-[#9b7cb7] text-white text-sm px-4 py-2 rounded cursor-pointer'
        >
          <Save size={16} />
          <span className='text-sm font-medium'>Save</span>
        </button>
      </div>
    </div>
  )
}
