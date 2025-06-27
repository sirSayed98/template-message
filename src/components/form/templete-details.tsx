import { useTemplate } from '@/context/templateHook';
import FormInputField from '@/components/common/form-input-field';
import FormInputHeader from '@/components/common/form-input-header';
import FormMultiSelect from '@/components/common/form-multi-select';

export default function TempleteDetails() {
  const { setTemplateName, setLanguage , templateName, runValidation} = useTemplate();
  const templateNameErrorMsg = runValidation && !templateName && 'Template name is required';
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
          onChangeHandler={(e) => {
            setTemplateName(e.target.value);
          }}
          error={templateNameErrorMsg as string}
        />
        <div className='mt-2'>
        <FormMultiSelect
          options={[
            { key: '', value: 'Select a language' },
            { key: 'en_US', value: 'English(US)' },
            { key: 'ar_SA', value: 'Arabic(SA)' },
          ]}
          label='Language'
          onChangeHandler={(e) => {
            setLanguage(e);
          }}
        />
        </div>
      </div>
    </div>
  )
}
