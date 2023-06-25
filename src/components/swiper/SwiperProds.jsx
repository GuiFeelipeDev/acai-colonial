import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"
import ProdCard from "../prodCard/ProdCard"
import { allSlides } from "./data"

export default function SwiperProds({ quant }) {
  return (
    <>
      <Swiper
        slidesPerView={Math.floor(quant / 360)}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allSlides.map((item, index) => {
          return (
            <SwiperSlide key={index} className="slide">
              <ProdCard img={item.img} title={item.title} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
