import NewTemplateHeader from "@/components/new-template-header"
import TemplateWrapper from "@/components/template-wrapper"
import { TemplateState } from "@/context/state"

export default function Home() {
  return (
    <TemplateState>
      <form>
        <NewTemplateHeader />
        <TemplateWrapper />
      </form>
    </TemplateState>
  )
}