import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slideOne from "../assets/austin-distel-744oGeqpxPQ-unsplash.jpg";
import slideTwo from "../assets/freestocks-11SgH7U6TmI-unsplash.jpg";
import slideThree from "../assets/sticker-mule-g2GU6MR0pR0-unsplash.jpg";
import './Home.css';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliderOne from "./SliderOne";
import SlideTow from "./SlideTow";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Faq from "../Components/Faq";

export default function Home() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('/Discover.json').then(res=>res.json())
    .then(data=>setData(data))

  },[])
  return (
    <div className='mt-4'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide><SliderOne></SliderOne></SwiperSlide>
        <SwiperSlide>
            <h1 className='mt-2 py-2 font-bold text-2xl text-accent text-center '>Discover Our Products</h1>
       <div className="flex gap-2">
         {
          data.map(card=>  <SlideTow key={card.id} card={card}></SlideTow>)
        }
       </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-center w-full h-full object-cover overflow-hidden" src={slideThree} alt="Slide Three" />
        </SwiperSlide>
      </Swiper>
      <section>
        <Cards></Cards>
      </section>
      <section className="mt-11 mb-11 md:max-w-11/12 md:mx-auto">
        <Faq></Faq>
      </section>
    </div>
  );
}
