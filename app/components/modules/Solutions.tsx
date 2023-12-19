import LayoutComponent from '../layout/LayoutComponent'

const Solutions = () => {
  const nullObj = {}

  const classNames = {
    name: 'solutions',
    titleText: 'Turnkey Solutions', 
    descText: 'Our turnkey solutions combines plug and play hardware and software to enable your organization to become smart LGUs.', 
    titleStyle: 'text-5xl xxs:text-2xl xs:text-4xl sm:text-6xl font-bold pb-2 text-end xxs:text-center xs:text-center sm:text-center md:text-center',
    contentWrapperClass: 'my-10 xxs:my-2 flex gap-8 xxs:flex-col',
    descStyle: 'text-2xl xxs:text-base xs:text-2xl sm:text-4xl py-10 xxs:py-2 xs:py-2 text-end xxs:text-center xs:text-center sm:text-center md:text-center', 
    btnText: 'Request a quotation',
    btnStyle: 'self-end flex items-center gap-3 w-fit h-fit xxs:px-5 px-7 xxs:py-3 py-5 font-bold bg-blue-700 text-white rounded-xl 3xl:hover:bg-blue-500 2xl:hover:bg-blue-500 xl:hover:bg-blue-500 lg:hover:bg-blue-500 duration-300 text-xl xxs:text-sm sm:text-4xl md:text-4xl md:mx-auto sm:mx-auto xs:mx-auto xxs:mx-auto' 
  }

  return (
    <LayoutComponent {...classNames} data={nullObj}  />
  )
}

export default Solutions;