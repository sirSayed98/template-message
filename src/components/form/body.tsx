import { useTemplate } from '@/context/templateHook'
import FormInputHeader from '../common/form-input-header'

export default function Body() {
  const { setBody, errorMsgs } = useTemplate()
  const { bodyError } = errorMsgs
  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Body'
        description='Enter the text of your message in the language you’ve selected'
      />
      <div className='p-4 bg-white mt-1 rounded-sm'>
        <textarea
          name='body'
          className='w-full h-[100px] focus:outline-none focus:ring-2 focus:ring-gray-500'
          placeholder='Template message'
          style={{
            outline: 'none',
            border: '1px solid #C2C2C2',
            borderRadius: '4px',
            padding: '8px',
            fontSize: '16px',
          }}
          onChange={e => {
            setBody(e.target.value)
          }}
        />
        {bodyError && (
          <span className='text-red-500 mt-1'>{bodyError as string}</span>
        )}
      </div>
    </div>
  )
}
