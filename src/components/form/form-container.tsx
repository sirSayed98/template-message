import Category from './category';
import { TemplateDetails } from './templeta-details';
import Body from './body';
import Footer from './footer';
import Header from './header/header';
import Buttons from './buttons';

export default function FormContainer() {
  return (
    <>
      <TemplateDetails />
      <Category  />
      <Header />
      <Body />
      <Footer />
      <Buttons />
    </>
  )
}