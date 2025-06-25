import { AlignJustify, CloudUpload, Image } from 'lucide-react'
import FormInputField from '../common/form-input-field'
import FormInputHeader from '../common/form-input-header'
import TabsComponent from '../common/tabs'

const tabs = [
  { id: 'none', label: 'None' },
  {
    id: 'text',
    label: 'Text',
    icon: <AlignJustify size={16} />,
    content: (
      <div className='mt-4'>
        <FormInputField
          label='Text'
          placeholder='Enter text'
          name='text'
          onChangeHandler={() => {}}
        />
      </div>
    ),
  },
  {
    id: 'image',
    label: 'Image',
    icon: <Image size={16} />,
    content: (
      <div className='mt-4'>
        <div className='p-4 rounded-lg'>
          <div className='border-2 border-dashed border-gray-300 rounded-lg p-4 py-10 text-center'>
           <div className='flex items-center justify-center'>
           <CloudUpload size={38} />
           </div>
            <p className='text-gray-600 mt-2'>Click to upload image</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function Header() {
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Header'
        description='Highlight your brand here, use images or videos, to stand out'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <TabsComponent tabs={tabs} />
      </div>
    </div>
  )
}
