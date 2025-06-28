import FormInputField from '@/components/common/form-input-field'
import FormMultiSelect from '@/components/common/form-multi-select'
import { useState, type ChangeEvent } from 'react'
export default function PhoneNumber({ onChange, error }: { onChange: (phoneNumber: string) => void, error?: string }) {
  const [phoneNumberState, setPhoneNumberState] = useState({
    countryCode: '+44',
    phoneNumber: ''
  })
  
  return (
    <div className='flex items-start gap-3'>
      <FormMultiSelect
        label=''
        options={[
          { key: '+44', value: '🇬🇧 +44' },
          { key: '+971', value: '🇦🇪 +971' },
          { key: '+966', value: '🇸🇦 +966' },
          { key: '+962', value: '🇯🇴 +962' },
          { key: '+20', value: '🇪🇬 +20' },
        ]}
        onChangeHandler={(key: string) => {
          setPhoneNumberState({...phoneNumberState, countryCode: key})
          onChange(`${key}${phoneNumberState.phoneNumber}`)
        }}
      />
      <FormInputField
        label='Phone Number'
        placeholder='07 XXXX XXXX'
        name='phoneNumber'
        onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => {
          setPhoneNumberState({...phoneNumberState, phoneNumber: e.target.value})
          onChange(`${phoneNumberState.countryCode}${e.target.value}`)
        }}
        error={error as string}
      />
    </div>
  )
}
