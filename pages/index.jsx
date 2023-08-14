import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard";
import services from "@/data/services";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "@/components/TetimonialCard";
import ServiceCard from "@/components/ServiceCard";
import catalog from "@/data/catalog";

const inter = Inter({ subsets: ["latin"] });

function FormControl({ type, name, value, setValue, placeholder }) {
  return (
    <div className="form-control bg-gray-100 h-[42px] px-2">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full bg-transparent outline-none"
      />
    </div>
  );
}

function KeyPoint() {
  return (
    <div className="key-point">
      <h1 className="font-semibold text-center">Gifts That Tell Stories</h1>
      <p className="text-black/70">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        dolores accusantium ad incidunt ipsum tempora recusandae consectetur
        neque, ab doloremque odio explicabo molestiae fugiat cumque, in at rem
        ut dolor.
      </p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="feature-card flex flex-col items-center justify-center w-full">
      <div className="feature-icon w-12 h-12 bg-[#00B7B0] rounded-full"></div>
      <div className="feature-card-body w-full mt-5">
        <h3 className="text-center text-xl font-semibold">Feature Name</h3>
        <p className="text-center text-black/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque
          quaerat alias officiis accusamus? Eveniet laboriosam illo dignissimos
          blanditiis. Id accusamus perspiciatis vero mollitia, animi totam
          accusantium cupiditate esse sint.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[270px] md:h-[450px]"
      >
        <SwiperSlide className="w-full h-full mr-0">
          <div className="slide-one w-full h-full">
            <img
              src="/banners/2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-two w-full h-full mr-0">
            <img
              src="/banners/3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-four w-full h-full mr-0">
            <img
              src="/banners/4.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-five w-full h-full mr-0">
            <img
              src="/banners/5.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <section className="hero-banner relative h-[565px]">
        <img
          src="http://via.placeholder.com/640x460"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute w-full h-full inset-0 bg-black/50"></div>
        <div className="hero-content absolute left-[50%]  top-[50%] text-white -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold">
            Summer Is For Celebrations
          </h1>
          <div className="flex flex-col items-center gap-2 mt-3">
            <a href="#">Shop Our Summer Collection</a>
            <a href="#">Build a Celibrations Gift from Scratch</a>
          </div>
        </div>
      </section> */}

      <section className="brand-keypoints px-6 md:px-32 py-16 bg-green-100">
        <h1 className="text-center text-2xl">The Knack Difference</h1>
        <div className="keypoints grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <KeyPoint />
          <KeyPoint />
          <KeyPoint />
          <KeyPoint />
        </div>
      </section>

      <section className="py-16 px-6 md:px-32">
        <div className="special-product-hero grid grid-cols-1 lg:grid-cols-2 gap-32">
          <img src="http://via.placeholder.com/640x460" alt="special-gif-box" />
          <div className="special-product-content">
            <h2 className="font-semibold text-2xl">Headline Level 2</h2>
            <p className="text-md font-semibold text-black/40 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              sapiente temporibus laborum quod cumque recusandae voluptate saepe
              aliquam neque necessitatibus corporis optio itaque enim eum
              officiis totam, vel illo exercitationem.
            </p>
            <div className="mt-6 flex flex-col items-start gap-6">
              <a href="#" className="underline">
                Primary Link
              </a>
              <a href="#" className="underline">
                Secondary Link
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bestseller-section py-16 px-4 md:px-32">
        <div className="best-seller-header">
          {/* <h2 className="text-center">Shop Bestsellers By Price</h2>
          <div className="bestseller-filters mt-12 flex flex-col lg:flex-row items-center justify-center gap-12">
            <a
              href="#"
              className="px-2 py-3 bg-gray-200 rounded-md font-semibold text-sm"
            >
              Bestsellers Under $75
            </a>
            <a
              href="#"
              className="px-2 py-3 bg-gray-200 rounded-md font-semibold text-sm"
            >
              Bestsellers Under $75-$100
            </a>
            <a
              href="#"
              className="px-2 py-3 bg-gray-200 rounded-md font-semibold text-sm"
            >
              Bestsellers Under $75-$100
            </a>
          </div> */}

          <div className="bestselller-carousel-gallery mt-16" id="catalog">
            <h1 className="text-center text-3xl">Gift Catalog</h1>
            <div className="products-carousel max-w-[100%] flex overflow-x-auto gap-16 mt-12">
              {catalog.map((c, i) => {
                return (
                  <ProductCard key={i} thumbnail={c.thumb} name={c.name} />
                );
              })}
            </div>
            <a
              href="/documents/catalog.pdf"
              className="mt-12 flex items-center justify-center bg-green-700 text-white w-[175px] py-3 mx-auto"
            >
              View Catalog
            </a>
          </div>
        </div>
      </section>

      <section className="collection-courosel-container py-16 px-6 md:px-32">
        <div className="collections-container">
          <h1 className="text-center text-3xl font-semibold">Testimonials</h1>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={12}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              1012: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full py-6 mt-12"
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <section className="section-unboxing-section  relative w-full h-[465px]">
        <div className="unboxing-section-content absolute z-20 max-w-[375px] top-[115px] left-16">
          <h1 className="text-3xl font-bold">
            An Unboxing Experience Like No Other
          </h1>
          <p className="text-sm text-white">
            Every custom gift arrives in a luxurious gift box with a
            personalized message card. You can add photos and videos to their
            unboxing experience, too!
          </p>
          <a href="#" className="underline">
            Learn more.
          </a>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0965/7972/files/2023_hp_packaging.png?v=1675196721"
          alt="unboxing-experince"
          className="w-full h-full absolute object-cover"
        />
      </section> */}

      {/* <section className="who-we-are-section py-32 px-16">
        <h1 className="text-center">Who We Are</h1>
        <div className="features w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section> */}

      <section className="who-we-are-section py-32 px-4 md:px-16 bg-[#F6FAFF]">
        <h1 className="text-center text-3xl font-bold">Our Services</h1>
        <div className="features w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          {services.map((s, i) => {
            return (
              <ServiceCard
                key={i}
                title={s.title}
                description={s.description}
              />
            );
          })}
        </div>
      </section>

      <section className="contact-section py-12 px-5 md:px-16">
        <div className="contact-section-container grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="contact-left">
            <h2 className="text-4xl">
              Feel free to contact with us for any kind of query.
            </h2>
            <p className="mt-3 mb-2">
              Thank you for your interest in hiring Denver Cleaning Service
              Company. We consider communication with the customer.
            </p>

            <div className="contact-options grid grid-cols-2 gap-6 mt-6">
              <div className="contact-option">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/assets/pin.svg" alt="pin-logo" />
                  </span>
                  <span className="text-xl font-semibold">Office Address</span>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  Main address: 122 Albert St, Melbourne, Australia
                </p>
              </div>
              <div className="contact-option">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/assets/mail.svg" alt="mail-logo" />
                  </span>
                  <span className="text-xl font-semibold">Mail Address</span>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  envato@gmail.com
                  <br />
                  info@company.com
                </p>
              </div>
              <div className="contact-option">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/assets/phone.svg" alt="phone-logo" />
                  </span>
                  <span className="text-xl font-semibold">Phone No</span>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  Head office: (210) 123 451 Help line: 44 321
                </p>
              </div>
              <div className="contact-option">
                <div className="flex items-center gap-3">
                  <span>
                    <img src="/assets/time.svg" alt="clock-logo" />
                  </span>
                  <span className="text-xl font-semibold">Opening Time</span>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  10.00 am - 06.00 pm (Saterday-Thursday
                </p>
              </div>
            </div>
          </div>
          <div className="contact-lead-form-box w-full">
            <form action="" className="w-full flex flex-col items-start gap-6">
              <div className="w-full grid grid-cols-2 gap-8">
                <FormControl placeholder={"First Name"} />
                <FormControl placeholder={"Last Name"} />
              </div>
              <div className="w-full grid grid-cols-2 gap-8">
                <FormControl placeholder={"Mail"} />
                <FormControl placeholder={"Phone"} />
              </div>
              <div className="w-full grid grid-cols-1 gap-8">
                <textarea
                  className="bg-gray-100 py-2 px-2"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="w-full h-[42px] bg-green-700 text-white font-semibold"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
