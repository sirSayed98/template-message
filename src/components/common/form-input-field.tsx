import './form.css';
export default function FormInputField({ label, placeholder, name, onChangeHandler }: { label: string, placeholder: string, name: string, onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    // add asterisk to the label if it is required
    <div className='my-2 p-4 bg-white'>
      {
      label &&
         <label htmlFor={name} className="block text-sm font-normal text-gray-700 mb-2">
          {label} <span className="text-red-500">*</span>
        </label>
      }
      
      <input
        type="text"
        name={name}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
        placeholder={placeholder}
      />
    </div>
  )
}