'use client';
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect } from 'react'

interface VideoProps {
//   url: string;
//   compname: string;
  children: ReactNode;
}

// const VideoOverlay: React.FC<VideoProps> = ({url, compname, children}) => {
const VideoOverlay: React.FC<VideoProps> = ({children}) => {
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

    window.addEventListener('wheel', handleWindowWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, []);

  return (
    <div className='fixed grid grid-cols-1 w-full z-20 h-full items-center' onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='h-full absolute top-0 w-full z-50'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className='self-center h-full fixed w-full flex flex-col items-center justify-center z-60 px-10'>
          {hasWindow && (
            <ReactPlayer
              height={500}
              width={1000}
              playing={true}
              url='https://www.youtube.com/watch?v=xgxj6ifllBc'
              controls={true}
              className='self-center'
            />
         )} 
        </div>
      </motion.div>
    </div>
  )
}

export default VideoOverlay;