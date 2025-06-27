import FormInputField from '@/components/common/form-input-field'
import FormInputHeader from '@/components/common/form-input-header'
import TabsComponent from '@/components/common/tabs'
import { useTemplate } from '@/context/templateHook'
import { AlignJustify, Image } from 'lucide-react'
import ImageUploader from './image-uploader'

export default function Header() {
  const { setHeader, header, runValidation } = useTemplate()
  const headerTextErrorMsg =
    runValidation &&
    header.format === 'text' &&
    !header.value?.text &&
    'Header text is required'

  const headerImageErrorMsg =
    runValidation &&
    header.format === 'image' &&
    !header.value?.image &&
    'Header image is required'

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
            onChangeHandler={e => {
              setHeader({
                format: 'text',
                value: { text: e.target.value },
              })
            }}
          />
        </div>
      ),
    },
    {
      id: 'image',
      label: 'Image',
      icon: <Image size={16} />,
      content: <ImageUploader />,
    },
  ]

  const resetHeader = (tabId: string) => {
    setHeader({
      format: tabId as 'none' | 'text' | 'image',
    })
  }
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Header'
        description='Highlight your brand here, use images or videos, to stand out'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <TabsComponent tabs={tabs} onChange={resetHeader} />
        {headerTextErrorMsg && <span className='text-red-500 mt-1'>{headerTextErrorMsg as string}</span>}
        {headerImageErrorMsg && <span className='text-red-500 mt-1'>{headerImageErrorMsg as string}</span>}
      </div>
    </div>
  )
}
