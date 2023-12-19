"use client";
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Text from './Text';

interface MemberData {
  [key: string]: any;
}

interface SwiperProps {
  members: MemberData;
}

const Slider: React.FC<SwiperProps> = ({ members }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (Object.keys(members).length > 0) {
      setLoading(false);
    }
  }, [members]);

  if (loading) {
    return (
      <div className='mb-4 md:hidden sm:hidden xs:hidden xxs:hidden'>
        <div className="w-full h-full my-5 text-center flex flex-col items-center justify-center">
          <Text text="Loading members..." style='w-full h-36 text-4xl m-auto py-14 xxs:text-xs font-bold text-center' />
        </div>
      </div>
    );
  }

  return (
   <>
    <div className='mb-4 md:hidden sm:hidden xs:hidden xxs:hidden'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
      >
        {Object.keys(members).map((key) => (
          <SwiperSlide key={key} className="w-full h-full xxs:h-1/2 my-5 select-none">
            <Image
              src={`https://filipizen.com/resources/${members[key].id}.png`}
              alt={`lgulogo-${members[key].id}`} 
              height={200}
              width={200}
              className='w-36 h-36 mx-auto'
            />
            <Text text={members[key].title} style='xxs:text-xs font-bold text-center' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className='mb-4 3xl:hidden 2xl:hidden xl:hidden lg:hidden'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
      >
        {Object.keys(members).map((key) => (
          <SwiperSlide key={key} className="w-full h-full xxs:h-1/2 my-5">
            <div key={key}>
              <Image
                src={`https://filipizen.com/resources/${members[key].id}.png`}
                alt={`lgulogo-${members[key].id}`} 
                height={200}
                width={200}
                className='w-20 h-20 mx-auto'
              />
              <Text text={members[key].title} style='xxs:text-xs font-bold text-center' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </>
  )
}

export default Slider