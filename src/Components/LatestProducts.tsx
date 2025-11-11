import React from "react";
import Man from "../assets/man.png";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import BlackBanner from "../assets/Black.png";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function LatestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const latestProd = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=30");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    latestProd();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center w-[90%] mx-auto">
        <div className="text-center">
          <p className="text-[var(--theme-color)] text-xl">Special Offets</p>
          <h2 className="text-[var(--theme-dark)] text-3xl font-semibold mt-3">
            LATEST PRODUCTS
          </h2>
          <p className="w-[55%] mx-auto mt-5 font-normal text-lg">
            Explore our newest additions, blending modern design with timeless
            quality. Each product is selected to inspire your everyday style.
          </p>
        </div>
        <div className="mt-10 mb-10 w-full mx-auto cursor-grab">
          {/**product cart */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {products.map((item, i) => (
              <SwiperSlide>
                <div className="flex flex-col items-start p-4 shadow-lg  rounded-lg ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[350px] h-[275px] object-cover relative group"
                  />
                  <div className="flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-[290px] h-[275px] transition-all duration-500">
                    <div>
                      <img
                        src={Cart}
                        alt="cart"
                        className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full bg-white p-1"
                      />
                      <img
                        src={Wish}
                        alt="Wish"
                        className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full bg-white p-1 mt-4"
                      />
                      <Link to={`/shop/${item.id}`}>
                        <img
                          src={Max}
                          alt="Wish"
                          className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex flex-row items-center gap-1">
                      <img
                        src={Star}
                        alt="Wish"
                        className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full   "
                      />
                      <span className="text-lg ">
                        {" "}
                        {item.rating.rate}({item.rating.count})
                      </span>
                    </div>
                    <h3 className="font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 ">{item.category}</p>
                    <div className="text-[var(--theme-color)] text-xl mt-4">
                      {item.price}{" "}
                      <span className="text-gray-500">{item.discount}</span>
                    </div>
                  </div>
                  <span className="w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3"></span>
                  <div className="flex flex-row gap-1">
                    <button className=" flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer">
                      <img
                        src={Cart}
                        alt="cart"
                        className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                      />
                      <span>Add to Cart </span>
                    </button>
                    <button className=" flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer">
                      <img
                        src={Wish}
                        alt="cart"
                        className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                      />
                      <span>Wish List </span>
                    </button>
                  </div>

                  <span></span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/**banner one */}
      <div className="w-full mt-10 mb-10">
        <a href="#">
          <img
            src={BlackBanner}
            alt="category for women"
            className="w-full h-[550px] object-cover object-center "
          />
        </a>
      </div>
    </>
  );
}

export default LatestProducts;
