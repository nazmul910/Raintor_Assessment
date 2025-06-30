
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const skills = [
  {
    img:'/image/react.png',
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    img:'/image/react.png',
    title: 'JavaScript',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    img:'/image/react.png',
    title: 'Webflow',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },

];

export const Slider = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
    <div className="bg-black text-white ">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        className="mySwiper"
         breakpoints={{
           0: {
            slidesPerView: 1,
           },
           640: {
            slidesPerView: 2,
           },
           1024: {
            slidesPerView: 3,
           },
       }}
      >
        {skills.map((skill, index) => {
          return(
            <>
              <div >    
               <SwiperSlide key={index} className=''>
                 <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-[#1a1a1a] px-7 py-7 lg:px-10 lg:py-12 rounded-xl xl:rounded-3xl text-white flex flex-col justify-start lg:hover:rotate-[5deg] transition-all duration-300 ease-in-out"
                  >
                    <img src={skill.img} alt="" className="lg:w-24 w-20" />
                    <h3 className="text-3xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-xl font-thin text-gray-400">{skill.description}</p>
                 </motion.div>
               </SwiperSlide>
        
              </div>
            </>
          )
        })}
      </Swiper>
    </div>
  );
};

