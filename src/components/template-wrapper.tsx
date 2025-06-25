import FormContainer from './form/form-container';
import PreviewWrapper from './preview/preview-wrapper';
import TempleteBreadcrumb from './templete-breadcrumb';

export default function TemplateWrapper() {
  return (
    <div className="bg-gray-50 px-6">
      <TempleteBreadcrumb />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
            <FormContainer />
        </div>
        <div className="w-full md:w-1/3">
          <div className="p-4">
            <PreviewWrapper />
          </div>
        </div>
      </div>
    </div>
  )
}