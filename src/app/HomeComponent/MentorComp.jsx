"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import MentorCard from './mentorCard';
import Image from 'next/image';

const MentorComp = () => {
  return (
    <div className='relative lg:h-[700px] h-[70vh]  mt-20 w-screen bg-slate-400'>
     <Image width={1580} alt="University Image" height={720} className='h-full object-cover' src='/image/mentorbg.png'></Image>
       <div className=' absolute flex flex-col items-center bottom-20 w-[100%] '>
        <h2 className=' lg:text-4xl text-xl text-white'>Get the best guidance from experts</h2>
         <Swiper
        slidesPerView={1}
        spaceBetween={20}
       
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="lg:mt-20 mt-10 w-[90%] px-20 flex justify-center">
        
     {mentorDetail.map((e,ind)=>(<SwiperSlide key={ind}><MentorCard data={e}/></SwiperSlide> ))}     
      </Swiper>
      </div>
    </div>
  )
}
const mentorDetail=[
  {
  name:'Karan',
  university:'Uttaranchal University',
  number:9569822903,
  exp:2,
  img:'/mentorImg/uttaranchal.png'
},
  {
  name:'Arjun',
  university:'Manipal University',
  number:9560673252,
  exp:1,
  img:'/mentorImg/manipal.png'
},
  {
  name:'Adarsh',
  university:'Jain University',
  number:6392832171,
  exp:3,
  img:'/mentorImg/jain.png'
},
  {
  name:'Kamlesh',
  university:'Amity University',
  number:9560673252,
  exp:2,
  img:'/mentorImg/amity.png'
},
  {
  name:'Vikshit',
  university:'Andhra University',
  number:7275610081,
  exp:4,
  img:'/mentorImg/andhra.png'
},
  {
  name:'Akash',
  university:'Jain University',
  number:9560673252,
  exp:3,
  img:'/mentorImg/jain.png'
},
]

export default MentorComp