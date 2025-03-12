'use client';

import React from 'react';
import { sectionsData } from '@/data/sectionsData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Testimonials.css';

// import required modules
import { Navigation, EffectCoverflow } from 'swiper/modules';

import styles from './Testimonials.module.scss';
import Image from 'next/image';

const Testimonials = () => {
  const data = sectionsData.find((section) => section.name === 'Testimonials');

  const firstRating = Math.round(data.reviews[0].rating);
  return (
    <section className={`container ${styles.container}`}>
      {data && (
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          navigation={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            1366: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.reviews.map(({ author, rating, comment, id }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <h3 className={styles.title}>{author}</h3>
              <div className={styles.ratingContainer}>
                {Array.from({ length: firstRating }).map((_, index) => (
                  <div key={index} className={styles.svgContainer}>
                    <Image src="/svgs/star.svg" alt="star" fill={true} />
                  </div>
                ))}
                <p className={styles.rating}>{rating}</p>
              </div>

              <p className={styles.comment}>{comment}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonials;
