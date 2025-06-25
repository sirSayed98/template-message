import { useState } from 'react';

export default function FormMultiSelect({
  options,
  label,
  onChangeHandler,
}: {
  options: { key: string; value: string }[];
  label: string;
  onChangeHandler: (key: string) => void;
}) {
  const [selectedKey, setSelectedKey] = useState(options[0].key);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    setSelectedKey(selectedKey);

    onChangeHandler(selectedKey);
  };

  return (
    <div>
      <label
        htmlFor={label}
        className={`block text-sm font-normal text-gray-700 mb-2 ${label ? '' : 'invisible'}`}
      >
        {label} <span className='text-red-500'>*</span>
      </label>

      <select
        value={selectedKey}
        onChange={handleChange}
        style={{ color: selectedKey === '' ? '#A3A3A3' : 'black' , height: '42px'}}
        className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500'
      >
        {options.map(option => (
          <option
            key={option.key}
            value={option.key}
            className={option.key === '' ? 'text-gray-500 font-normal' : ''}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
