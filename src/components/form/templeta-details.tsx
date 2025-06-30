import FormInputField from '@/components/common/form-input-field'
import FormInputHeader from '@/components/common/form-input-header'
import FormMultiSelect from '@/components/common/form-multi-select'
import { useTemplate } from '@/context/templateHook'
import { memo } from 'react'

export const TemplateDetails = memo(function TemplateDetails() {
  const {
    setTemplateName,
    setLanguage,
    errorMsgs,
  } = useTemplate()

  const { languageError, templateNameError } = errorMsgs 

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
          error={templateNameError as string}
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
            error={languageError as string}
          />
        </div>
      </div>
    </div>
  )
})
