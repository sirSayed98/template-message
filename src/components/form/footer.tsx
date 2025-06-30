import { useTemplate } from '@/context/templateHook'
import FormInputField from '../common/form-input-field'
import FormInputHeader from '../common/form-input-header'

export default function Footer() {
  const { setFooter } = useTemplate()
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Footer'
        description='Use this section for optional details like disclaimers, contact info, or additional context.'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        <FormInputField
          name='footer'
          label=''
          placeholder='Footer'
          onChangeHandler={e => {
            setFooter(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
