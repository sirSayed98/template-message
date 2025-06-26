import FormInputHeader from '@/components/common/form-input-header'
import TabsComponent from '@/components/common/tabs'
import { Target } from 'lucide-react'
import CallToActionsWrapper from './call-to-actions/call-to-actions-wrapper'
import { useTemplate } from '@/context/templateHook'

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
          <CallToActionsWrapper />
        </div>
      ),
    },
  ]

  const resetButtons = () => {
    setButtons([])
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