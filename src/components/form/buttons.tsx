import { Target } from 'lucide-react'
import FormInputHeader from '@/components/common/form-input-header'
import TabsComponent from '@/components/common/tabs'
import CallToActionsWrapper from './call-to-actions/call-to-actions-wrapper'

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

export default function Buttons() {
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Buttons'
        description='Create buttons that let your customers respond to your message or take an action.'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <TabsComponent tabs={tabs} />
      </div>
    </div>
  )
}