import FormInputField from '@/components/common/form-input-field'
import FormMultiSelect from '@/components/common/form-multi-select'
import type { ButtonType as ButtonTypeInterface } from '@/context/interfaces'
import { type ChangeEvent, useState } from 'react'
import PhoneNumber from './phone-number'
import { useTemplate } from '@/context/templateHook'

export default function ButtonConfig({ id, onChange }: { id: number,  onChange: (id: number, buttonState: ButtonTypeInterface) => void }) {
  
  const { runValidation } = useTemplate();

  const [buttonState, setButtonState] = useState<ButtonTypeInterface>({
    type: 'URL',
    text: '',
    value: {}
  })
  
  const buttonTextErrorMsg = runValidation && !buttonState.text && 'Button text is required'
  const websiteUrlErrorMsg = runValidation && buttonState.type === 'URL' && !buttonState.value.url && 'Website URL is required'
  const phoneNumberErrorMsg = runValidation && buttonState.type === 'CALL' && !buttonState.value.phone_number && 'Phone number is required'

  return (
    <div className='bg-gray-50 p-4 rounded-md border border-gray-200'>
      <div className='flex flex-col sm:flex-row gap-6'>
        {/* Button Type */}
        <div className='w-full sm:w-1/3'>
          <FormMultiSelect
            label='Button Type'
            options={[
              { key: 'URL', value: 'Visit Website' },
              { key: 'CALL', value: 'Phone Number' }
            ]}
            onChangeHandler={(key: string) => {
              const newButtonState = { ...buttonState, type: key as ButtonTypeInterface['type'], value: {}}
              setButtonState(newButtonState)
              onChange(id, newButtonState as ButtonTypeInterface)
            }}
          />
        </div>

        <div className='w-full sm:w-1/3'>
          <FormInputField
            label='Button Text'
            placeholder=''
            name='buttonText'
            onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => {
              const newButtonState = { ...buttonState, text: e.target.value }
              setButtonState(newButtonState)
              onChange(id, newButtonState as ButtonTypeInterface)
            }}
            error={buttonTextErrorMsg as string}
          />
        </div>

        <div className='w-full sm:w-1/3'>
          {/* Conditional Third Field */}
          {buttonState.type === 'URL' ? (
            <FormInputField
              label='Website URL'
              placeholder='https://www.google.com'
              name='websiteUrl'
              onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>{
                const newButtonState = { ...buttonState, value: {
                  url: e.target.value
                }}
                setButtonState(newButtonState)
                onChange(id, newButtonState as ButtonTypeInterface)
              }}
              error={websiteUrlErrorMsg as string}
            />
          ) : (
            <PhoneNumber onChange={(phoneNumber: string) =>{
              const newButtonState = { ...buttonState, value: {
                phone_number: phoneNumber
              }}
              setButtonState(newButtonState)
              onChange(id, newButtonState as ButtonTypeInterface)
            }} 
            error={phoneNumberErrorMsg as string}
            />
          )}
        </div>
      </div>
    </div>
  )
}
