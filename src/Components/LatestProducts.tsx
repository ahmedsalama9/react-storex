import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import BlackBanner from "../assets/Black.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";


interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  discount?: number;
}
function LatestProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const latestProd = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=30");
        const data: Product[] = await res.json();
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
          <p className="text-[var(--theme-color)] text-lg sm:text-xl">
            Special Offers
          </p>
          <h2 className="text-[var(--theme-dark)] text-2xl sm:text-3xl font-semibold mt-3">
            LATEST PRODUCTS
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-lg text-gray-600">
            Explore our newest additions, blending modern design with timeless
            quality.
          </p>
        </div>
        <div className="mt-10 mb-10 w-full mx-auto cursor-grab">
          {/**product cart */}
          <Swiper
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide>
                <div  key={item.id} className="flex flex-col items-start p-4 shadow-lg  rounded-lg ">
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
                    <Link
                      to={`/shop/${item.id}`}
                      className=" flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer"
                    >
                      <img
                        src={Wish}
                        alt="cart"
                        className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                      />
                      <span> View </span>
                    </Link>
                  </div>

                  <span></span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*Banner */}
      <div className="w-full my-10">
        <a href="#" className="block">
          <img
            src={BlackBanner}
            alt="category for women"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover object-center"
          />
        </a>
      </div>
    </>
  );
}

export default LatestProducts;
