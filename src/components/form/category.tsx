import { useTemplate } from '@/context/templateHook'
import { Bell, CircleCheck, Megaphone } from 'lucide-react'
import React, { useState } from 'react'
import FormInputHeader from '@/components/common/form-input-header'

interface CategoryOption {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const categories: CategoryOption[] = [
  {
    id: 'Marketing',
    title: 'Marketing',
    description:
      'Send promotions and information about your products, services or business.',
    icon: <Megaphone />,
  },
  {
    id: 'Utility',
    title: 'Utility',
    description: 'Send messages about an existing order or account.',
    icon: <Bell />,
  },
]

const MessageCategorySection = () => {
  const [selected, setSelected] = useState('')
  const { setCategory, runValidation } = useTemplate()

  const categoryErrorMsg = runValidation && !selected && 'Category is required'

  const handleCategorySelect = (categoryId: string) => {
    setSelected(categoryId)
    setCategory(categoryId)
  }

  return (
    <div className='mt-8'>
      <FormInputHeader
        title='Category'
        description='Choose your message template'
      />
      <div className='p-4 space-y-3 bg-white mt-1 rounded-sm'>
        {categories.map(category => (
          <div
            key={category.id}
            className={`
              relative cursor-pointer rounded-lg border-2 p-3 transition-all duration-200
              ${
                selected === category.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-none bg-[#E4E5EF] hover:bg-gray-100 hover:border-gray-300'
              }
            `}
            onClick={() => handleCategorySelect(category.id)}
          >
            <div className='flex items-center space-x-4'>
              {/* icon */}
              <div
                className={`
                flex-shrink-0 rounded-full p-3
                ${
                  selected === category.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-white text-gray-600'
                }
              `}
              >
                {category.icon}
              </div>
              {/* title and description */}
              <div className='flex-1 min-w-0'>
                <h3
                  className={`
                  text-base font-medium
                  text-${selected === category.id ? 'blue' : 'gray'}-900
                `}
                >
                  {category.title}
                </h3>
                <p
                  className={`
                  text-sm leading-relaxed font-normal
                  text-${selected === category.id ? 'blue' : 'gray'}-900
                `}
                >
                  {category.description}
                </p>
              </div>

              {selected === category.id && (
                <CircleCheck color='blue' size={20} />
              )}
            </div>
          </div>
        ))}

        {categoryErrorMsg && (
          <span className='text-red-500 mt-1'>
            {categoryErrorMsg as string}
          </span>
        )}
      </div>
    </div>
  )
}

export default MessageCategorySection
