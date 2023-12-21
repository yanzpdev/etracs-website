'use client';
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import {useState, useEffect, useRef } from 'react'
import Button from './Button';
import { AiOutlineCloseCircle } from "react-icons/ai";
interface VideoProps {
// url: string;
// compname: string;
// children: ReactNode;
}

const VideoOverlay: React.FC<VideoProps> = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isToggled, setIsToggled] = useState(true);

  const handleClick = () => {
    setIsToggled(!isToggled);
  }
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    const handleWindowWheel = (event: WheelEvent) => {
      event.preventDefault();
    };
  
    if (isToggled) {
      window.addEventListener('wheel', handleWindowWheel, { passive: false });
    } 
    
    else {
      window.removeEventListener('wheel', handleWindowWheel);
    }
  
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [isToggled]);

  if (!isToggled) {
    return null;
  }

  else {
    return (
      <div className='fixed w-full z-20 h-full items-center justify-center mx-auto' onClick={handleClick}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='h-full absolute top-0 w-full z-50 flex justify-center items-center'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className='self-center h-full fixed w-[1000px] mx-auto flex flex-col items-center justify-center z-60'>
            {hasWindow && (
              <>
                <div className='py-3 self-end'>
                  <AiOutlineCloseCircle 
                      className='text-slate-300 hover:scale-125 duration-300'
                      size={30} 
                      onClick={handleClick}
                  />
                </div>
                
                <ReactPlayer
                  height={500}
                  width={1000}
                  playing={true}
                  url='https://www.youtube.com/watch?v=xgxj6ifllBc'
                  controls={true}
                  className='self-center w-auto h-auto'
                />                
              </>
           )} 
          </div>
        </motion.div>
      </div>
    )
  }
}

export default VideoOverlay;