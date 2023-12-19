import ContentWrapper from '../layout/ContentWrapper'
import HorizontalLine from './HorizontalLine'
import LinkBtn from './LinkBtn'
import Text from './Text'

const Footer = () => {
  return (
    <ContentWrapper  className='w-full flex flex-col font-bold h-full text-gray-300 drop-shadow-md p-10 gap-1 bg-slate-800 '>
      <ContentWrapper className='columns-3 gap-3'>
        <ContentWrapper className=''>
          <Text text='GET IN TOUCH' style='text-xl' />
          <HorizontalLine height='2.5px' lineStyle='bg-gray-300' />
          <div className='w-full h-[200px]'>

          </div>
        </ContentWrapper>

        <ContentWrapper className=''>
          <Text text='FOLLOW US ON FACEBOOK' style='text-xl' />
          <HorizontalLine height='2.5px' lineStyle='bg-gray-300' />
          <div className='w-full h-[200px]'>

          </div>
        </ContentWrapper>

        <ContentWrapper className=''>
          <Text text='GET IN TOUCH' style='text-xl' />
          <HorizontalLine height='2.5px' lineStyle='bg-gray-300' />
          <div className='w-full h-[200px]'>

          </div>
        </ContentWrapper>

      </ContentWrapper>

      <HorizontalLine height='2.5px' lineStyle='bg-gray-300 px-3' />

      <ContentWrapper className='flex items-center justify-between' >
        <ContentWrapper className='flex' >
          <Text text='© 2023 ETRACS - ALL RIGHTS RESERVED RAMESES SYSTEMS INC.' style='text-xs font-normal' />
        </ContentWrapper>

        <ContentWrapper className='flex gap-5' >
          <LinkBtn text='SITEMAP' btnStyle='text-xs font-normal hover:underline underline-offset-2' url='/' />
          <LinkBtn text='PRIVACY POLICY' btnStyle='text-xs font-normal hover:underline underline-offset-2' url='/' />
          <LinkBtn text='CONTACT' btnStyle='text-xs font-normal hover:underline underline-offset-2' url='/' />
        </ContentWrapper>
      </ContentWrapper>
    </ContentWrapper>
  )
}

export default Footer