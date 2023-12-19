import LayoutComponent from '../layout/LayoutComponent'

const Partners = () => {
  const nullObj = {}

  const classNames = {
    name: 'partners',
    titleText: 'Payment Partners', 
    descText: 'E-TRACS integrates with reputable partners to provide electronic payment convenience to taxpayers.', 
    titleStyle: 'text-5xl xxs:text-2xl xs:text-4xl sm:text-6xl font-bold pb-2 text-center',
    contentWrapperClass: 'my-10 xxs:my-2 flex flex-col',
    descStyle: 'text-2xl xxs:text-base xs:text-2xl sm:text-4xl py-10 xxs:py-2 xs:py-2 text-center', 
    btnText: '',
    btnStyle: '' 
  }

  return (
    <LayoutComponent {...classNames} data={nullObj}  />
  )
}

export default Partners;