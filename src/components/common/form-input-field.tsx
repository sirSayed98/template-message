import './form.css'
export default function FormInputField({
  label,
  placeholder,
  name,
  onChangeHandler,
  error,
}: {
  label: string
  placeholder: string
  name: string
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-normal text-gray-700 mb-2'
        >
          {label} <span className='text-red-500'>*</span>
        </label>
      )}

      <input
        type='text'
        name={name}
        onChange={onChangeHandler}
        className='w-full bg-white px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500'
        placeholder={placeholder}
      />
      <span className='text-red-500 mt-1'>{error}</span>
    </div>
  )
}
