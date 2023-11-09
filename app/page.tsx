"use client";
import "swiper/css";
import Categories from "@/components/categories/Categories";

import Banner from "@/components/features/home/Banner";
import ProductCard from "@/components/productCards/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" font-medium container mx-auto">
      <Banner />
      <Categories />
      <ProductCard title="top categories" />
      <ProductCard title="trending now" />
      <ProductCard title="best selling" />
      <Footer />
    </div>
  );
}
