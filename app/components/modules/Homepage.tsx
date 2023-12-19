import LayoutComponent from '../layout/LayoutComponent'

const Homepage = () => {
  const nullObj = {}

  const classNames = {
    name: 'home',
    titleText: 'Accelerating Digital Transformation in Local Government', 
    descText: 'Get up to speed with the ease of doing business with your LGU.', 
    titleStyle: 'text-5xl xxs:text-2xl xs:text-4xl sm:text-6xl md:text-6xl font-bold pb-2 text-center 3xl:text-start 2xl:text-start xl:text-start lg:text-start', 
    contentWrapperClass: 'my-10 xxs:my-2 flex gap-7',
    descStyle: 'text-2xl xxs:text-base xs:text-2xl sm:text-4xl md:text-4xl py-10 xxs:py-2 xs:py-2 text-center 3xl:text-start 2xl:text-start xl:text-start lg:text-start', 
    btnText: 'Watch Now',
    btnStyle: 'flex items-center gap-3 w-fit h-fit xxs:px-5 px-7 xxs:py-3 py-5 font-bold bg-blue-700 text-white rounded-xl 3xl:hover:bg-blue-500 2xl:hover:bg-blue-500 xl:hover:bg-blue-500 lg:hover:bg-blue-500 duration-300 text-xl xxs:text-sm sm:text-4xl md:text-4xl md:mx-auto sm:mx-auto xs:mx-auto xxs:mx-auto' 
  }

  return (
    <LayoutComponent {...classNames} data={nullObj}  />
  )
}

export default Homepage;