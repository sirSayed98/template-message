import { lazy, Suspense } from 'react'
import FormInputHeader from '@/components/common/form-input-header'
import TabsComponent from '@/components/common/tabs'
import { Target } from 'lucide-react'
import { useTemplate } from '@/context/templateHook'

const CallToActionsWrapper = lazy(() => import('./call-to-actions/call-to-actions-wrapper'))
// dynamic import CallToActionsWrapper

export default function Buttons() {
  const { setButtons } = useTemplate()
  const tabs = [
    { id: 'none', label: 'None' },
    {
      id: 'call-to-actions',
      label: 'Call to actions',
      icon: <Target size={16} />,
      content: (
        <div className='mt-4'>
          <Suspense fallback={<p className='text-sm text-gray-500'>Loading...</p>}>
            <CallToActionsWrapper />
          </Suspense>
        </div>
      ),
    },
  ]

  const resetButtons = () => {
    setButtons([
      {
        type: 'URL',
        text: '',
        value: {
          url: ''
        }
      }
    ])
  }
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Buttons'
        description='Create buttons that let your customers respond to your message or take an action.'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <TabsComponent tabs={tabs} onChange={resetButtons} />
      </div>
    </div>
  )
}