import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  return (
    <div className="flex items-center text-gray-600 text-sm py-4">
      <span className="text-[#797979]">Templates</span>
      <ChevronRight size={16} className="text-gray-400" />
      <span className="font-medium text-gray-800">New Template Message</span>
    </div>
  );
}