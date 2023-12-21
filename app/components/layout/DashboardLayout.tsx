'use client';
import { useEffect, useState } from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Chart } from "react-google-charts";
import Button from '../ui/Button';
import Text from '../ui/Text';
import ContentWrapper from './ContentWrapper';
import Navbar from '../ui/Navbar';
import { push as Menu } from 'react-burger-menu';
import {Raleway, Roboto} from 'next/font/google';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { RiArrowRightSFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import { GiMoneyStack } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600' ,'700'],
  style: ['normal'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500' ,'700'],
  style: ['normal'],
  display: 'swap',
});

const Dashboard = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubTab, setShowSubTab] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const rotateArrow = async () => {
    setIsFlipped(!isFlipped);
    await controls.start({
      scaleX: isFlipped ? 1 : -1, 
      transition: { duration: 0.5 },
    });
  };

  const rotateArrow2 = async () => {
    setIsRotated(!isRotated);
    await controls2.start({
      rotateY: isRotated ? 0 : 180,
      transition: { duration: 0.5 },
    });
  };

  const handleClick = () => {
    rotateArrow();
    handleMenuToggle();
  }
  
  const pieData = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const lineData = [
    [
      { type: "number", label: "x" },
      { type: "number", label: "values" },
      { id: "i0", type: "number", role: "interval" },
      { id: "i1", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
  ];
  
  const barData = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2021", 1000, 400, 200],
    ["2022", 1170, 460, 250],
    ["2023", 660, 1120, 300],
    ["2024", 1030, 540, 350],
  ];

  const tabs = [
    { name: 'Tab 1' },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
    { name: 'Tab 4' },
    { name: 'Tab 5' },
  ];

  const [showSubTabs, setShowSubTabs] = useState(Array(tabs.length).fill(false));

  const toggleSubTab = (index: any) => {
    const newSubTabsState = [...showSubTabs];
    newSubTabsState[index] = !newSubTabsState[index];
    setShowSubTabs(newSubTabsState);
  };

  const pieOptions = {
    title: "Sample Pie Chart",
    titleTextStyle: {
      fontName: raleway,
    },
    is3D: true,
    fontName: raleway,
    // backgroundColor: '#E5E3E6',
  };

  const lineOptions = {
    title: "Sample Line Chart",
    titleTextStyle: {
      fontName: raleway,
    },
    fontName: raleway,
    curveType: "function",
    series: [{ color: "#E7711B" }],
    intervals: { style: "area" },
    legend: "none",
  };

  const barOptions = {
    chart: {
      title: "Sample Bar Graph",
      titleTextStyle: {
        fontName: raleway,
      },
      fontName: raleway,
      subtitle: "Sample Sales, Expenses, and Profit: 2023-2024",
    },
  };

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);


  if (status === 'authenticated') {
    return (
      <ContentWrapper className={`flex h-screen w-full relative bg-blue-700 ${raleway.className}`}>

        <div id="outer-container" className='text-white'>
          <Menu 
            noOverlay 
            isOpen={menuOpen}
            onStateChange={(state) => setMenuOpen(state.isOpen)}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            customBurgerIcon={false}
            disableCloseOnEsc 
            disableOverlayClick 
            disableAutoFocus 
            width={350}
            className='w-fit h-full px-5 p-5 bg-blue-700 z-50 text-center'
          >
            <div className='flex gap-1 items-center py-5 b-blue-700' style={{display: 'flex'}}>
              <div className='w-[100px] h-[100px] rounded-full overflow-hidden mx-auto' >
                <Image
                  src={session?.user?.image || 'https://i.insider.com/5f36825ae89ebf001f044839?width=700'}                  
                  alt='Profile Picture'
                  width={100}
                  height={100}
                  className='rounded-full mx-auto w-full h-full'
                />
              </div>
              <div className=''>
                <Text text={session.user?.name ?? ''} style='font-bold text-xl text-white text-start' />
                <Text text={session.user?.email ?? ''} style='font-bold text-xs text-white text-start' />
              </div>
              
            </div>
            
            <ContentWrapper className='flex gap-3 justify-between pb-5'>
              <Button compName='' btnStyle='bg-white text-slate-700 font-bold py-2 rounded-xl w-full' btnText='Profile' onClick={signOut} />
              <Button compName='' btnStyle='bg-white text-slate-700 font-bold py-2 rounded-xl w-full' btnText='Sign out' onClick={signOut} />
            </ContentWrapper>

            <ContentWrapper className='flex flex-col gap-4 items-start'>

            {tabs.map((tab, index) => (
              <div key={index} className='flex flex-col items-start'>
                <div className='flex w-full justify-between items-center'>
                  <Button onClick={() => toggleSubTab(index)} btnText={tab.name} compName={''} btnStyle={'text-white text-2xl'} />
                </div>
                <AnimatePresence>
                  {showSubTabs[index] && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='ml-8 text-xl'
                      >
                        Subtab {index + 1}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            </ContentWrapper>
          </Menu>
        </div>

        <main id='page-wrap' className={`bg-[#E5E3E6] absolute h-full ${menuOpen ? 'w-fit' : 'w-full'}`}>
          <motion.div className='w-full h-full flex items-center z-50 justify-center bg-blue-700'>
            <motion.div animate={controls} onClick={handleClick} className='px-3 h-full flex items-center cursor-pointer'>
              <RiArrowRightSFill className='text-white' />
            </motion.div>
            <ContentWrapper className='flex flex-col w-full h-full bg-white'>
              <Navbar compName='dashboard' isPage={true} addClasses='w-full' />
              <ContentWrapper className={`p-5 bg-[#E5E3E6] overflow-y-scroll ${raleway.className}`}>
                
                <ContentWrapper className='grid grid-cols-4 gap-5 my-2.5 font-bold'>
                  <ContentWrapper className='flex flex-col'>
                    <ContentWrapper className='bg-white text-2xl rounded-t-xl p-4 text-[#FCC066]'>
                      <ContentWrapper className='flex justify-between items-center'>
                        <Text text='₱ 300,000,000' style={`${roboto.className} text-4xl`} />
                        <GiMoneyStack size={50}/>
                      </ContentWrapper>
                    </ContentWrapper>
                    <Text text='Total Revenue' style='bg-[#FCC066] rounded-b-xl text-white px-5 py-2' />
                  </ContentWrapper>

                  <ContentWrapper className='flex flex-col'>
                    <ContentWrapper className='bg-white text-2xl rounded-t-xl p-4 text-[#66FCAB]'>
                      <ContentWrapper className='flex justify-between items-center'>
                        <Text text='64' style={`${roboto.className} text-4xl`} />
                        <BsFillPeopleFill size={50} className='p-1'/>
                      </ContentWrapper>
                    </ContentWrapper>
                    <Text text='Members' style='bg-[#66FCAB] rounded-b-xl text-white px-5 py-2' />
                  </ContentWrapper>

                  <ContentWrapper className='flex flex-col'>
                    <ContentWrapper className='bg-white text-2xl rounded-t-xl p-4 text-[#6690FC]'>
                      <ContentWrapper className='flex justify-between items-center'>
                        <Text text='0' style={`${roboto.className} text-4xl`} />
                        <BsGraphUpArrow size={50} className='p-2' />
                      </ContentWrapper>
                    </ContentWrapper>
                    <Text text='?????' style='bg-[#6690FC] rounded-b-xl text-white px-5 py-2' />
                  </ContentWrapper>

                  <ContentWrapper className='flex flex-col'>
                    <ContentWrapper className='bg-white text-2xl rounded-t-xl p-4 text-[#FC6666]'>
                      <ContentWrapper className='flex justify-between items-center'>
                        <Text text='0' style={`${roboto.className} text-4xl`} />
                        <SiBookstack size={50} className='py-1'/>
                      </ContentWrapper>
                    </ContentWrapper>
                    <Text text='?????' style='bg-[#FC6666] rounded-b-xl text-white px-5 py-2' />
                  </ContentWrapper>
                </ContentWrapper>
                
                
                <ContentWrapper className='grid grid-cols-2 gap-5'>
                  <ContentWrapper className='border rounded-xl p-2 my-2.5 bg-white '>
                    <Chart
                      chartType="LineChart"
                      width="100%"
                      height="400px"
                      data={lineData}
                      options={lineOptions}
                    />
                  </ContentWrapper>

                  <ContentWrapper className='border rounded-xl p-2 my-2.5 bg-white flex items-center justify-center'>
                    <Chart
                      chartType="Bar"
                      width="90%"
                      height="350px"
                      data={barData}
                      options={barOptions}
                    />
                  </ContentWrapper>
                </ContentWrapper>
               
                <ContentWrapper className='border rounded-xl p-2 my-2.5 bg-white '>
                  <Chart
                    chartType="PieChart"
                    data={pieData}
                    options={pieOptions}
                    width='100%'
                    className={raleway.className}
                  />
                </ContentWrapper>
                
              </ContentWrapper>
            </ContentWrapper>
          </motion.div>
        </main>

      </ContentWrapper>

    )
  }
}

export default Dashboard