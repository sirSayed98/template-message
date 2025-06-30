import FormInputField from '@/components/common/form-input-field'
import FormInputHeader from '@/components/common/form-input-header'
import TabsComponent from '@/components/common/tabs'
import { useTemplate } from '@/context/templateHook'
import { AlignJustify, Image } from 'lucide-react'

import { lazy, Suspense, useState } from 'react'
// lazy load the image uploader
const ImageUploader = lazy(() => import('./image-uploader'))

export default function Header() {
  const { setHeader, errorMsgs } = useTemplate()
  const [activeTab, setActiveTab] = useState<'none' | 'text' | 'image'>('none')
  const { headerTextError, headerImageError } = errorMsgs

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
      content: (
        <Suspense
          fallback={<p className='text-sm text-gray-500'>Loading...</p>}
        >
          <ImageUploader />
        </Suspense>
      ),
    },
  ]

  const resetHeader = (tabId: string) => {
    setHeader({
      format: tabId as 'none' | 'text' | 'image',
    })
    setActiveTab(tabId as 'none' | 'text' | 'image')
  }

  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Header'
        description='Highlight your brand here, use images or videos, to stand out'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <TabsComponent tabs={tabs} onChange={resetHeader} />
        {headerTextError && activeTab === 'text' && (
          <span className='text-red-500 mt-1'>{headerTextError as string}</span>
        )}
        {headerImageError && activeTab === 'image' && (
          <span className='text-red-500 mt-1'>
            {headerImageError as string}
          </span>
        )}
      </div>
    </div>
  )
}
