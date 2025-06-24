export default function FormInputHeader({ title, description }: { title: string, description: string }) {
  return (
    <div>
      <h1 className="text-base mb-2">
          {title}
        </h1>

      <p className="text-xs font-normal text-gray-600">
          {description}
      </p>
    </div>
  )
}