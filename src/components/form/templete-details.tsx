import FormInputField from '../common/form-input-field'
import FormInputHeader from '../common/form-input-header'
import FormMultiSelect from '../common/form-multi-select'

export default function TempleteDetails() {
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Template Details'
        description='Define your template name and language'
      />
      <div className='my-2 p-4 bg-white rounded-sm'>
        <FormInputField
          label='Template Name'
          placeholder='Template Name'
          name='templateName'
          onChangeHandler={() => {}}
        />
        <div className='mt-2'>
        <FormMultiSelect
          options={[
            { key: '', value: 'Select a language' },
            { key: 'en_US', value: 'English(US)' },
            { key: 'ar_SA', value: 'Arabic(SA)' },
          ]}
          label='Language'
          onChangeHandler={() => {}}
        />
        </div>
      </div>
    </div>
  )
}
