import Category from './category';
import TempleteDetails from './templete-details';
import Body from './body';
import Footer from './footer';
import Header from './header/header';
import Buttons from './buttons';

export default function FormContainer() {
  return (
    <>
      <TempleteDetails />
      <Category  />
      <Header />
      <Body />
      <Footer />
      <Buttons />
    </>
  )
}