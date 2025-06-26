import FormInputField from '@/components/common/form-input-field'
import FormMultiSelect from '@/components/common/form-multi-select'
import type { ButtonType as ButtonTypeInterface } from '@/context/interfaces'
import { type ChangeEvent, useState } from 'react'
import PhoneNumber from './phone-number'

export default function ButtonConfig() {
  const [buttonState, setButtonState] = useState({
    type: 'URL',
    text: '',
    value: {}
  })

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
              setButtonState({ ...buttonState, type: key as ButtonTypeInterface['type'], value: {}})
            }}
          />
        </div>

        <div className='w-full sm:w-1/3'>
          <FormInputField
            label='Button Text'
            placeholder=''
            name='buttonText'
            onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setButtonState({ ...buttonState, text: e.target.value })}
          />
        </div>

        <div className='w-full sm:w-1/3'>
          {/* Conditional Third Field */}
          {buttonState.type === 'URL' ? (
            <FormInputField
              label='Website URL'
              placeholder='https://arabot.io'
              name='websiteUrl'
              onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                setButtonState({
                  ...buttonState, value: {
                    url: e.target.value
                  }
                })}
            />
          ) : (
            <PhoneNumber onChange={(phoneNumber: string) => setButtonState({
              ...buttonState, value: {
                phone_number: phoneNumber
              }
            })} />
          )}
        </div>
      </div>
    </div>
  )
}
