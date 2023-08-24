import Header from "@/components/Header";
import Footer from "@/components/Footer";
import services from "@/data/services";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "@/components/TetimonialCard";
import ServiceCard from "@/components/ServiceCard";
import Head from "next/head";

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
      <Head>
        <title>Giftinbox</title>
        <meta name="description" content="Description of my page" />
        <meta name="keywords" content="my, page, keywords" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="Description of my page" />
        <meta property="og:image" content="URL to image" />
        {/* Add other SEO-related tags here */}
      </Head>

      <Header />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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

      <section className="catalog-section w-full pt-32">
        <h1 className="text-center text-3xl md:text-5xl">Explore Catalog</h1>
        <div className="catalog_grid w-full  grid-cols-1 hidden  md:grid md:grid-cols-2 mt-16">
          <div className="col-span-1 flex items-center justify-center px-6 bg-gray-300/80 lg:px-32">
            <div className="">
              <h2 className="text-3xl">Dear Valued Clients & Partners</h2>
              <p className="mt-2">
                We present to you with a Curated Selection of Gifts, Designed to
                Strengthen Relationships and Foster a Culture of Appreciation in
                the Business World.
              </p>
              <p className="mt-2">
                We Understand the Significance of Creating Lasting Impressions
                and our Range of Exquisite Gifts Reflects that Sentiment. We
                Look Forward to Helping you make every Occasion Truely
                Remarkable.
              </p>
              <a
                href="/documents/catalog.pdf"
                className="flex px-8 py-2 bg-white w-[170px] font-semibold mt-3 hover:shadow-2xl"
              >
                View Catalog
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <img src="/catalog/Sarva0122 copy.jpg" alt="catalog-first" />
          </div>
        </div>

        <div className="catalog_grid w-full grid grid-cols-1 md:hidden">
          <div className="col-span-1">
            <img src="/catalog/Sarva0122 copy.jpg" alt="catalog-first" />
          </div>

          <div className="col-span-1 flex items-center justify-center px-8 py-32 md:px-32 bg-gray-300/80">
            <div className="">
              <h2 className="text-xl md:text-3xl">
                Dear Valued Clients & Partners
              </h2>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a
                href="#"
                className="flex px-8 py-2 bg-white w-[170px] font-semibold mt-3 hover:shadow-2xl"
              >
                View Catalog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="collection-courosel-container py-16 px-6 md:px-32"
        id="testimonials"
      >
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
              <TestimonialCard
                author={"Sandhya Bhat"}
                brand={"CNSI"}
                description={
                  "I really want to take this opportunity to highly appreciate you and your team for all the coordination and the effort that has taken to reach the parcel to our employees. Keep this good work going and we would like to work with you in future days as well."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                author={"Saranya"}
                brand={"BAUTOMATE"}
                description={
                  "Hi Team, Gift Hampers were awesome & very neatly packed. My leadership team really liked the products. Thanks for your extended support."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                author={"Anmol Raizada"}
                brand={"Leaven Essentials"}
                description={
                  "We were Truly impressed with the gift boxes we received. The attention to detail was remarkable. Not to mention, the delivery was right on time, which made our experience even better. Thank you for your top-notch service!"
                }
              />
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

      <section
        className="who-we-are-section py-32 px-4 md:px-16 bg-[#F6FAFF]"
        id="services"
      >
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

      <section className="brand-banner my-16 px-16">
        <h2 className="text-2xl md:text-5xl text-center">Our Clients</h2>
        <div className="w-full">
          <img
            src="/assets/brandwall.png"
            alt="brand-wall"
            className="w-full"
          />
        </div>
      </section>

      <section className="contact-section py-12 px-5 md:px-16" id="contact">
        <div className="contact-section-container grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="contact-left">
            <h2 className="text-4xl">
              Feel free to contact with us for any kind of query.
            </h2>
            <p className="mt-3 mb-2">
              Thank you for your interest in hiring Denver Cleaning Service
              Company. We consider communication with the customer.
            </p>

            <div className="contact-options grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="contact-option">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/assets/pin.svg" alt="pin-logo" />
                  </span>
                  <span className="text-xl font-semibold">Office Address</span>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  302, Udyog Vihar Phase II, Gurgaon, Haryana, 122008
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
                  utsavm@sarvabyanadi.com
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
                  Head office: +91-9811870360 <br />
                  Help line: +91-9999868080
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
                  10.00 am - 06.00 pm (Monday-Saturday)
                </p>
              </div>
            </div>
          </div>
          <div className="contact-lead-form-box w-full">
            <form action="" className="w-full flex flex-col items-start gap-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormControl placeholder={"First Name"} />
                <FormControl placeholder={"Last Name"} />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
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
