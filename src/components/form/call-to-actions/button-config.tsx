import { useState } from 'react'
import FormInputField from '@/components/common/form-input-field'
import FormMultiSelect from '@/components/common/form-multi-select'
import PhoneNumber from './phone-number'

type ButtonType = 'visit-website' | 'phone-number'

export default function ButtonConfig() {
  const [buttonType, setButtonType] = useState<ButtonType>('visit-website')
 
  const handleButtonTypeChange = (type: ButtonType) => {
    setButtonType(type)
    // Clear fields when switching types
  }

  return (
    <div className='bg-gray-50 p-4 rounded-md border border-gray-200'>
      <div className='flex flex-col sm:flex-row gap-6'>
        {/* Button Type */}
        <div className='w-full sm:w-1/3'>
          <FormMultiSelect
              label='Button Type'
              options={[
                { key: 'visit-website', value: 'Visit Website' },
                { key: 'phone-number', value: 'Phone Number' }
              ]}
              onChangeHandler={(key: string) => handleButtonTypeChange(key as ButtonType)}
          />
        </div>
        
        <div className='w-full sm:w-1/3'>
          <FormInputField
            label='Button Text'
            placeholder={
              buttonType === 'visit-website' ? 'Offer Details' : 'Call'
            }
            name='buttonText'
            onChangeHandler={()=>{}}
          />
        </div>
        
        <div className='w-full sm:w-1/3'>
        {/* Conditional Third Field */}
        {buttonType === 'visit-website' ? (
            <FormInputField
              label='Website URL'
              placeholder='https://arabot.io'
              name='websiteUrl'
              onChangeHandler={()=>{}}
            />
        ) : (
          <PhoneNumber />
        )}
        </div>
      </div>
    </div>
  )
}
