"use client";
import Image from 'next/image';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsFillBoxFill } from 'react-icons/bs';
import { MdHandshake } from 'react-icons/md';
import { HiLightBulb, HiDocumentText } from 'react-icons/hi';
import { Quicksand } from 'next/font/google';
import { Link } from 'react-scroll';
import RLink from 'next/link';
import LinkBtn from '../ui/LinkBtn';
import Text from '../ui/Text';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
})

interface NavbarProps {
  isPage: boolean;
  addClasses: string;
}
const Navbar: React.FC<NavbarProps> = ({ isPage, addClasses }) => {
  const modules = [
    { name: 'Home', icon: <AiFillHome size={15} /> },
    { name: 'Members', icon: <BsFillPeopleFill size={15} /> },
    { name: 'Partners', icon: <MdHandshake size={20} /> },
    { name: 'Products', icon: <BsFillBoxFill size={15} /> },
    { name: 'Solutions', icon: <HiLightBulb size={20} /> },
    { name: 'Documentation', icon: <HiDocumentText size={20} /> },
  ];

  return (
    <div className={`${addClasses} w-full h-[5.5rem] flex justify-between items-center px-4 z-10 bg-white xxs:h-[4rem] ${quicksand.className}`}>
      {isPage === true ? (
        <>
          <RLink href='/' className='w-fit h-fit'>
            <Image 
              priority
              src='../assets/etracslogo.svg' 
              alt='etracs logo' 
              width={100} 
              height={100} 
              style={{ width: '300', height: '70px' }}
              className='mx-7 h-[50px] w-[200px] xxs:h-10 xxs:w-28'
            />
          </RLink>
  
          <ul className='flex gap-4 items-center mx-5 md:hidden sm:hidden xs:hidden xxs:hidden'>            
            <RLink href='/'>
              <li className='flex font-normal items-center gap-1 3xl:mx-2 2xl:mx-2 xl:mx-2 mx-0 hover:text-blue-500 duration-300 cursor-pointer'>
                <AiFillHome size={15} />
                <Text text='Back to Home' style='font-semibold 3xl:text-2xl 2xl:text-xl xl:text-lg text-sm' />
              </li>
            </RLink>
            {modules.map((module, index) => (
              <>
                {module.name === 'Documentation' ? (
                  <RLink key={index} href='https://ramesesinc.github.io/documentation/' target='__blank'>
                    <li className='flex font-normal items-center gap-1 3xl:mx-2 2xl:mx-2 xl:mx-2 mx-0 hover:text-blue-500 duration-300 cursor-pointer'>
                      {module.icon}
                      <Text text={module.name} style='font-semibold 3xl:text-2xl 2xl:text-xl xl:text-lg text-sm' />
                    </li>
                  </RLink>
                  ) : (null)
                }
              </>
            ))}
            <li><LinkBtn url='/login' text='Sign In' btnStyle='w-fit h-fit px-5 py-3 font-bold bg-blue-700 text-white rounded-xl hover:bg-blue-500 duration-3003xl:text-2xl 2xl:text-xl xl:text-lg text-sm' /></li>
          </ul>
        </>
      ) : (
        <>
          <RLink href='/' className='w-fit h-fit'>
            <Image 
              priority
              src='../assets/etracslogo.svg' 
              alt='etracs logo' 
              width={100} 
              height={100} 
              style={{ width: '300', height: '70px' }}
              className='mx-7 h-[50px] w-[200px] xxs:h-10 xxs:w-28'
            />
          </RLink>
  
          <ul className='flex gap-4 items-center mx-5 md:hidden sm:hidden xs:hidden xxs:hidden'>
            {modules.map((module, index) => (
              <div key={index}>
                {module.name === 'Documentation' ? (
                  <RLink href='https://ramesesinc.github.io/documentation/' target='__blank'>
                    <li className='flex font-normal items-center gap-1 3xl:mx-2 2xl:mx-2 xl:mx-2 mx-0 hover:text-blue-500 duration-300 cursor-pointer'>
                      {module.icon}
                      <Text text={module.name} style='font-semibold 3xl:text-2xl 2xl:text-xl xl:text-lg text-sm' />
                    </li>
                  </RLink>
                ) : (
                  <Link 
                    to={module.name.toLowerCase()}
                    smooth={true}
                    duration={500}
                  >
                    <li className='flex font-normal items-center gap-1 3xl:mx-2 2xl:mx-2 xl:mx-2 mx-0 hover:text-blue-500 duration-300 cursor-pointer'>
                      {module.icon}
                      <Text text={module.name} style='font-semibold 3xl:text-2xl 2xl:text-xl xl:text-lg text-sm' />
                    </li>
                  </Link>
                )}
              </div>
              
            ))}
            
            <li><LinkBtn url='/login' text='Sign In' btnStyle='w-fit h-fit px-5 py-3 font-bold bg-blue-700 text-white rounded-xl hover:bg-blue-500 duration-3003xl:text-2xl 2xl:text-xl xl:text-lg text-sm' /></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
