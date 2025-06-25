import FormInputField from '../common/form-input-field';
import FormInputHeader from '../common/form-input-header';

export default function Footer() {
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
      onChangeHandler={() => {}}
     />
     </div>
    </div>
  )
}