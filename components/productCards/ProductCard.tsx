"use client";
import React, { CSSProperties } from "react";
import Product from "./Product";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import ControlBtn from "./ControllBtn";
import TitleCategories from "./TitleCategories";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};
interface ProductCardProps {
  title: string;
}

function ProductCard({ title }: ProductCardProps) {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className=" mt-7 p-11">
      <TitleCategories title={title} />
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Product />
        </SwiperSlide>
        <ControlBtn />
      </Swiper>
    </div>
  );
}

export default ProductCard;
