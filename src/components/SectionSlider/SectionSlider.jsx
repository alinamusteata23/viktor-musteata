'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './SectionSlider.css';

// import required modules
import { Navigation, EffectCoverflow } from 'swiper/modules';

import styles from './SectionSlider.module.scss';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const SectionSlider = ({ data }) => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  return (
    <>
      {isLoad && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {!isLoad && data && (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            743: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          coverflowEffect={{
            rotate: -10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.9,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className={`Swiper`}
        >
          {data.sliderImages.map(({ imgSrc, imgAlt, id }, index) => (
            <SwiperSlide key={id} className={styles.imgContainer}>
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill={true}
                sizes="(max-width: 320px) 214px (max-width: 320px) 422px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SectionSlider;
