import LayoutComponent from '../layout/LayoutComponent'

const Products = () => {
  const nullObj = {}

  const classNames = {
    name: 'products',
    titleText: 'Products', 
    descText: 'E-TRACS consists of highly integrated modules that work together for maximum productivity.', 
    titleStyle: 'text-5xl xxs:text-2xl xs:text-4xl sm:text-6xl font-bold pb-2 text-center',
    contentWrapperClass: 'my-10 xxs:my-2 flex flex-col',
    descStyle: 'text-2xl xxs:text-base xs:text-2xl sm:text-4xl py-10 xxs:py-2 xs:py-2 text-center', 
    btnText: '',
    btnStyle: 'hidden' 
  }

  return (
    <LayoutComponent {...classNames} data={nullObj}  />
  )
}

export default Products;