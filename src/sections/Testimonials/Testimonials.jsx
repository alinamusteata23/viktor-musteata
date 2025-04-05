'use client';

import React, { useEffect, useState } from 'react';
import { sectionsData } from '@/data/sectionsData';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Testimonials.css';

// import required modules
import { Navigation } from 'swiper/modules';

import styles from './Testimonials.module.scss';
import Image from 'next/image';
import Loader from '@/components/Loader/Loader';
import TestimonialsSlideItem from '@/components/TestimonialsSlideItem/TestimonialsSlideItem';

const Testimonials = () => {
  const data = sectionsData.find((section) => section.name === 'Testimonials');

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  return (
    <section className={`container ${styles.container}`}>
      {isLoad && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}

      {!isLoad && data && (
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          navigation={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.reviews.map(({ author, rating, comment, id }) => {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            return (
              <SwiperSlide key={id} className={`${styles.slide} swiper-slide`}>
                <TestimonialsSlideItem
                  author={author}
                  rating={rating}
                  comment={comment}
                  fullStars={fullStars}
                  hasHalfStar={hasHalfStar}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonials;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { sectionsData } from '@/data/sectionsData';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';

// import './Testimonials.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// import styles from './Testimonials.module.scss';
// import Image from 'next/image';
// import Loader from '@/components/Loader/Loader';

// const Testimonials = () => {
//   const data = sectionsData.find((section) => section.name === 'Testimonials');

//   // const firstRating = Math.round(data.reviews[0].rating);

//   const [isLoad, setIsLoad] = useState(true);

//   useEffect(() => {
//     setIsLoad(false);
//   }, []);

//   return (
//     <section className={`container ${styles.container}`}>
//       {isLoad && (
//         <div className={styles.loaderWrapper}>
//           <Loader />
//         </div>
//       )}
//       {!isLoad && data && (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={40}
//           navigation={{
//             clickable: true,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 40,
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 60,
//             },
//             1280: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//           }}
//           modules={[Navigation]}
//           className="mySwiper"
//         >
//           {data.reviews.map(({ author, rating, comment, id }) => (
//             <SwiperSlide key={id} className={`${styles.slide} swiper-slide`}>
//               <h3 className={styles.title}>{author}</h3>
//               <div className={styles.ratingContainer}>
//                 {/* {Array.from({ length: firstRating }).map((_, index) => (
//                   <div key={index} className={styles.svgContainer}>
//                     <Image src="/svgs/star.svg" alt="star" fill={true} />
//                   </div>
//                 ))} */}
//                 <p className={styles.rating}>{rating}</p>
//               </div>

//               <p className={styles.comment}>{comment}</p>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// };

// export default Testimonials;
