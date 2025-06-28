import FormInputField from '@/components/common/form-input-field'
import FormInputHeader from '@/components/common/form-input-header'
import FormMultiSelect from '@/components/common/form-multi-select'
import { useTemplate } from '@/context/templateHook'

const TEMPLATE_NAME_CHAR_LIMIT = 20
export default function TempleteDetails() {
  const {
    setTemplateName,
    setLanguage,
    templateName,
    language,
    runValidation,
  } = useTemplate()

  const templateNameErrorMsg =
    runValidation && !templateName && 'Template name is required'

  const templateNameCharLimit =
    templateName && templateName.length > TEMPLATE_NAME_CHAR_LIMIT
      ? 'Template name must be less than 20 characters'
      : ''

  const languageErrorMsg = runValidation && !language && 'Language is required'

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
          onChangeHandler={e => {
            setTemplateName(e.target.value)
          }}
          error={templateNameErrorMsg as string || templateNameCharLimit as string}
        />
        <div className='mt-2'>
          <FormMultiSelect
            options={[
              { key: '', value: 'Select a language' },
              { key: 'en_US', value: 'English(US)' },
              { key: 'ar_SA', value: 'Arabic(SA)' },
            ]}
            label='Language'
            onChangeHandler={e => {
              setLanguage(e)
            }}
            error={languageErrorMsg as string}
          />
        </div>
      </div>
    </div>
  )
}
