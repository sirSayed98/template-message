import { useTemplate } from '@/context/templateHook'
import FormInputField from '../common/form-input-field'
import FormInputHeader from '../common/form-input-header'

export default function Footer() {
  const { setFooter, runValidation, footer } = useTemplate()
  const footerErrorMsg = runValidation && !footer && 'Footer is required'
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
        {footerErrorMsg && (
          <span className='text-red-500 mt-1'>{footerErrorMsg as string}</span>
        )}
      </div>
    </div>
  )
}
