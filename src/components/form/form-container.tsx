import Category from './category';
import TempleteDetails from './templete-details';
export default function FormContainer() {
  return (
    <>
      <TempleteDetails />
      <Category onCategorySelect={() => {}} />
    </>
  )
}