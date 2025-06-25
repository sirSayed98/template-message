import FormInputField from '@/components/common/form-input-field'
import FormMultiSelect from '@/components/common/form-multi-select'
export default function PhoneNumber() {
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
        onChangeHandler={() => {}}
      />
      <FormInputField
        label='Phone Number'
        placeholder='07 XXXX XXXX'
        name='phoneNumber'
        onChangeHandler={() => {}}
      />
    </div>
  )
}
