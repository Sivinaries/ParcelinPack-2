import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './custom-navigation.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Hero() {
  const slides = [
    {
      image: "hero1.png",
      title: "Packaging for Eid Mubarak",
      products: [
        "Hardbox",
        "Seasonal Packaging",
        "Hampers",
      ],
    },
    {
      image: "hero2.png",
      title: "Marchandise for Brand",
      products: [
        "Hardbox",
        "Hampers",
        "Marchandise",
      ],
    },
    {
      image: "hero3.png",
      title: "Packaging for CNY",
      products: [
        "Hardbox",
        "Seasonal Packaging",
        "Hampers",
      ],
    },
    {
      image: "hero4.png",
      title: "Packaging for Food",
      products: [
        "Corrugated Box",
        "Food Packaging",
      ],
    },
    {
      image: "hero5.png",
      title: "Packaging for Christmas",
      products: [
        "Hardbox",
        "Seasonal Packaging",
        "Hampers",
      ],
    },
    {
      image: "hero6.png",
      title: "Branding Item",
      products: [
        "Label Baju",
        "Hang Tag",
      ],
    },
    {
      image: "hero7.png",
      title: "Hard Box for Tea Set",
      products: [
        "Hardbox",
        "PR Packaging",
      ],
    },
    {
      image: "hero8.png",
      title: "Custom Bag",
      products: [
        "PR Packaging",
        "Seasonal Packaging",
        "Hampers",
      ],
    },
    {
      image: "hero9.png",
      title: "Packaging for Hijab",
      products: [
        "Hardbox",
        "Soft Box",
      ],
    },
    {
      image: "hero10.png",
      title: "PR Packaging for Brand",
      products: [
        "Hardbox",
        "PR Packaging",
        "Hampers",
      ],
    }
  ]

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/hero/${slide.image}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover md:object-fill"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-8 px-6 text-white space-y-6">
              <h2 className="text-4xl md:text-6xl">
                {slide.title}
              </h2>
              <ul className="hidden md:flex gap-x-32">
                {slide.products.map((product, index) => (
                  <li key={index} className="text-2xl">
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-button-prev">
          <FaArrowLeft />
        </div>
        <div className="custom-swiper-button-next">
          <FaArrowRight />
        </div>
      </Swiper>
    </div>
  );
}

export default Hero;
