"use client";
import { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import './styles/SidebarStyles.css';
import { Quicksand } from 'next/font/google';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsFillBoxFill } from 'react-icons/bs';
import { MdHandshake } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi';
import Text from '../ui/Text';
import LinkBtn from '../ui/LinkBtn';
  
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
})

const Sidebar = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  const handleIsOpen = () => {
    setOpen(!isOpen);
  }

  const modules = [
    { name: 'Home', icon: <AiFillHome size={15} />, icon2: <AiFillHome size={25} /> },
    { name: 'Members', icon: <BsFillPeopleFill size={15} />, icon2: <BsFillPeopleFill size={25} /> },
    { name: 'Partners', icon: <MdHandshake size={15} />, icon2: <MdHandshake size={27} /> },
    { name: 'Products', icon: <BsFillBoxFill size={15} />, icon2: <BsFillBoxFill size={25} /> },
    { name: 'Solutions', icon: <HiLightBulb size={15} />, icon2: <HiLightBulb size={27} /> },
    { name: 'Documentation', icon: <HiDocumentText size={15} />, icon2: <HiDocumentText size={27} /> },
  ];

  return (
    <Menu 
      right
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      className='relative'
    >
      <div className={`3xl:hidden 2xl:hidden xl:hidden lg:hidden text-slate-700 ${quicksand.className}`}>
        <>
          {modules.map((module) => (
            <Link 
              to={module.name.toLowerCase()}
              smooth={true}
              duration={500}
              key={module.name}
              onClick={handleIsOpen}
            >
              <div className='flex font-normal items-center justify-end py-2 gap-1 hover:text-blue-500 duration-300 cursor-pointer'>
                <div className='md:hidden sm:hidden xs:hidden xxs:hidden'>
                  {module.icon}
                </div>

                <div className='3xl:hidden 2xl:hidden xl:hidden lg:hidden'>
                  {module.icon2}
                </div>
                <Text text={module.name} style='font-semibold text-lg sm:text-4xl' />
              </div>
            </Link>
          ))}
          <div>
            <LinkBtn 
              url='/login' 
              text='Sign In' 
              btnStyle='w-fit h-fit absolute
                px-7 py-5 xxs:py-3 xxs:px-5 xs:py-3 xs:px-5
                font-bold text-white rounded-xl text-xl xxs:text-sm sm:text-4xl md:text-4xl 
                bg-blue-700 3xl:hover:bg-blue-500 2xl:hover:bg-blue-500 
                xl:hover:bg-blue-500 lg:hover:bg-blue-500 duration-300 
                right-7' 
            />
          </div>
        </>
      </div>
    </Menu>
  );
};

export default Sidebar;
