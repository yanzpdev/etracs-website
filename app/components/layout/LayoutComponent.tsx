'use client';
import Image from 'next/image';
import Title from '../ui/Title';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import HorizontalLine from '../ui/HorizontalLine';
import { Element } from 'react-scroll';
import Slider from '../ui/Slider';
import ProductsItems from './ProductsItems';
import LinkBtn from '../ui/LinkBtn';
import { downloadPdf } from '@/app/utils/helpers';
import { showOverlay } from '@/app/utils/helpers';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETRACS',
  description: 'Etracs Landing Page',
}

interface ClassNames {
  name: string;
  titleText: string;
  descText: string;
  titleStyle: string;
  descStyle: string;
  btnText: string;
  btnStyle: string;
  contentWrapperClass: string;
  data: object;
}

const LayoutComponent: React.FC<ClassNames> = ({
  name,
  titleText,
  descText,
  titleStyle,
  descStyle,
  btnText,
  btnStyle,
  contentWrapperClass,
  data
}) => {
  const nums = [1, 2, 3, 4];
  let content = null;

  switch (name) {
    case 'home':
      content = (
        <>
          <ContentWrapper className={contentWrapperClass}>
            <ContentWrapper className=''>
              <Title text={titleText} style={titleStyle} />
              <HorizontalLine lineStyle='bg-[#334155]' height='4.5px'/>
              <Text text={descText} style={descStyle} />
              <Image
                priority
                src={'../assets/code.svg'}
                alt={'code'}
                width={200}
                height={200}
                className='
                  mx-auto my-3 
                  3xl:hidden 2xl:hidden xl:hidden lg:hidden 
                  xs:h-[300px] xs:w-[300px] 
                  sm:h-[500px] sm:w-[500px]
                  md:h-[400px] md:w-[400px]'
              />
              <Button btnText={btnText} btnStyle={btnStyle} onClick={showOverlay} compName={name} />
            </ContentWrapper>
            <Image
              priority
              src={'../assets/code.svg'}
              alt={'code'}
              width={550}
              height={550}
              className='md:hidden sm:hidden xs:hidden xxs:hidden'
            />
          </ContentWrapper>
        </>
      );
    break;

    case 'members':
      content = (
        <>
          <ContentWrapper className={contentWrapperClass}>
            <Title text={titleText} style={titleStyle} />
            <HorizontalLine lineStyle='bg-[#334155]' height='4.5px'/>
            <Text text={descText} style={descStyle} />
            <Slider members={data} />
            <LinkBtn text={btnText} btnStyle={btnStyle} url={`/${name}`} />
          </ContentWrapper>
        </>
      );
    break;

    case 'partners':
      content = (
        <>
          <ContentWrapper className={contentWrapperClass}>
            <Title text={titleText} style={titleStyle} />
            <HorizontalLine lineStyle='bg-[#334155]' height='4.5px'/>
            <Text text={descText} style={descStyle} />
            <ContentWrapper className='
              grid grid-cols-4 
              xxs:grid-cols-2
              xs:grid-cols-2 
              sm:grid-cols-2
              md:grid-cols-2
              place-items-center'>
              {nums.map((num) => (
                <Image
                  key={num}
                  priority
                  src={`../assets/partner-logos/${num}slide.svg`}
                  alt={`Partner ${num}`}
                  width={300}
                  height={300}
                  style={{ width: 'auto', height: 'auto' }}
                  className='
                    mx-auto my-3 
                    xs:h-[300px] xs:w-[300px] 
                    sm:h-[500px] sm:w-[500px] 
                    md:h-[400px] md:w-[400px]'
                />  
              ))}
            </ContentWrapper>
          </ContentWrapper>
        </>
      );
    break;

    case 'products':
      content = (
        <>
          <ContentWrapper className={contentWrapperClass}>
            <Title text={titleText} style={titleStyle} />
            <HorizontalLine lineStyle='bg-[#334155]' height='4.5px'/>
            <Text text={descText} style={descStyle} />
            <ProductsItems />
          </ContentWrapper>
        </>
      );
    break;

    case 'solutions':
      content = (
        <>
          <ContentWrapper className={contentWrapperClass}>
            <ContentWrapper className='
              border 
              rounded-xl 
              w-full 
              h-full 
              relative 
              xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden' 
            >
              <Image 
                src='../assets/turnkey.svg' 
                alt='Turnkey' 
                width={700}
                height={700}
                className='lg:w-full lg:h-[200px] rounded-xl'
              />
              <Button 
                btnText='Watch Now' 
                btnStyle='
                  absolute right-4 bottom-4 
                  py-2 px-4 
                  w-fit h-fit 
                  bg-blue-700 hover:bg-blue-500 duration-300 
                  rounded-xl 
                  text-lg text-white font-bold  
                  flex items-center gap-2' 
                onClick={showOverlay} 
                compName='solutionsvid' 
              />
            </ContentWrapper>
            
            <ContentWrapper className='flex flex-col'>
              <Title text={titleText} style={titleStyle} />
              <HorizontalLine lineStyle='bg-[#334155]' height='4.5px'/>
              <Text text={descText} style={descStyle} />
              <ContentWrapper className='
                border 
                rounded-xl 
                w-full h-full 
                relative 
                3xl:hidden 2xl:hidden xl:hidden xxs:my-5 xs:my-5' 
              >
              <Image 
                src='../assets/turnkey.svg' 
                alt='Turnkey' 
                width={700} 
                height={700} 
                className='rounded-xl' 
              />
              <Button 
                btnText='Watch Now' 
                btnStyle='
                  absolute right-4 bottom-4 
                  py-2 px-4 
                  w-fit h-fit 
                  bg-blue-700 hover:bg-blue-500 
                  duration-300 
                  rounded-xl 
                  text-lg text-white xxs:text-sm sm:text-4xl md:text-4xl font-bold 
                  flex items-center gap-2' 
                onClick={showOverlay} 
                compName='solutionsvid' 
              />
            </ContentWrapper>
              <Button btnText={btnText} btnStyle={btnStyle} onClick={downloadPdf} compName={name} />
            </ContentWrapper>
          </ContentWrapper>
        </>
      );
    break;

    default:
      break;
  }

  return (
    <Element name={name}>
      <Container addClasses='' name={name}>{content}</Container>
    </Element>
  );
};

export default LayoutComponent;
