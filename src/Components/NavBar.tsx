import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Map from "../assets/location.svg";
import Email from "../assets/envelope.svg";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import User from "../assets/user.svg";
import Search from "../assets/search.svg";
import Close from "../assets/close.svg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CartMini from "./CartMini";

function NavBar() {
  const [show, setShow] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const navgate = useNavigate();

  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uniqlo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dior.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/puma.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uniqlo.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dior.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/puma.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  ];

  return (
    <>
      <header className="flex flex-col h-[55px] ">
        <nav>
          {/**top bar */}
          <div className="bg-[var(--theme-dark)] text-[#fff] xl:flex lg:flex md:hidden sm:hidden hidden flex-row items-center justify-around max-w-full w-full h-[50px]">
            <div className="flex flex-row gap-17 items-center justify-center">
              <p className="flex flex-row items-center justify-center gap-1">
                <span>
                  <img className="w-7 h-6" src={Email} />
                </span>{" "}
                ahmedmsalama@outlook.com
              </p>
              <p className="flex flex-row items-center justify-center gap-1">
                <span>
                  <img className="w-7 h-6" src={Map} />
                </span>{" "}
                Store: 1234 New Damietta, Egypt
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 ">
              <select
                defaultValue="EN"
                className="bg-[var(--text-dark)] text-white px-2 py-1 rounded-md outline-none cursor-pointer hover:opacity-90"
              >
                <option>EN</option>
                <option className="text-[var(--text-dark)]">AR</option>
              </select>
              <select>
                <option>USD</option>
                <option>SAR</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
          {/**main bar */}
          <div className="xl:flex lg:flex md:hidden sm:hidden hidden flex-row items-center justify-around w-[70%] mx-auto">
            <div className="w-[150px] ">
              <img src={Logo} className="w-[150px] h-[90px] object-cover" />
            </div>
            <div>
              <ul className="flex flex-row items-center justify-betwen text-[var(--theme-text)] gap-8 text-center text-[18px] cursor-pointer font-semibold">
                <div>
                  <li
                    onClick={() => setIsActive(!isActive)}
                    className="text-white transition-all duration-500 bg-[var(--theme-dark)] px-2 py-1 rounded-[3px] flex items-center cursor-pointer"
                  >
                    <Link to="#">Shop by Brands</Link>
                  </li>

                  {/* Dropdown */}
                  <div className="absolute mt-2 w-[80%] mx-auto right-0 left-0 z-50">
                    {isActive && (
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={8}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        className="bg-white mt-5 rounded-lg "
                      >
                        {brands.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className="flex flex-row items-center justify-center py-4"
                          >
                            <Link to="#">
                              <img
                                src={item}
                                alt={`Brand ${index}`}
                                className="w-20 hover:scale-110 hover:-rotate-6 duration-500 transition-all mx-auto f"
                              />
                            </Link>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                </div>

                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)] " : "link"}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500 ">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)]" : "link"}`
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500 ">
                  <NavLink
                    to="/man-fashion"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)]" : "link"}`
                    }
                  >
                    man
                  </NavLink>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <NavLink
                    to="/women-fashion"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)]" : "link"}`
                    }
                  >
                    women
                  </NavLink>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="/jewelery" className="link">
                    jewelery
                  </Link>
                </li>

                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)]" : "link"}`
                    }
                  >
                    Blogs
                  </NavLink>
                </li>

                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${isActive ? "text-[var(--theme-color)]" : "link"}`
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-[30px]">
              <img
                onClick={() => setCartToggle(!show)}
                src={Cart}
                alt="cart"
                className="w-8 cursor-pointer hover:scale-110 transition-transform duration-300 icon_shadow rounded-full bg-white p-1"
              />
              {cartToggle && (
                <>
                  {/* Overlay */}
                  <div
                    className="fixed inset-0 bg-black/30 bg-opacity-40 z-40"
                    onClick={() => setCartToggle(false)}
                  ></div>

                  {/* Sliding Drawer */}
                  <div
                    className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 transform transition-transform duration-500 ease-in-out ${
                      cartToggle ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    {/* Close Button */}
                    <div className="flex justify-end p-4 ">
                      <button
                        className="text-gray-500 hover:text-[var(--theme-color)] transition"
                        onClick={() => setCartToggle(false)}
                      >
                        <img
                          src={Close}
                          className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                        />
                      </button>
                    </div>

                    {/* Cart Content */}
                    <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                      <CartMini />
                    </div>
                  </div>
                </>
              )}

                <img
                  onClick={()=>navgate("/wish")}
                  src={Wish}
                  alt="Wish"
                  className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 "
                />
              

              <img
                src={User}
                alt="user"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
              {/**search section */}
              <img
                src={Search}
                onClick={() => setShow(!show)}
                alt="search"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
              {show && (
                <div className="absolute top-[16%]  bg-white shadow-lg rounded-lg w-80 p-2 flex items-center">
                  <form className="flex w-full">
                    <input
                      type="text"
                      placeholder="Find more products..."
                      required
                      className="w-full border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--theme-color)]"
                    />
                    <button
                      type="submit"
                      className="bg-[var(--theme-color)] text-white px-3 py-2 rounded-r-md hover:bg-[var(--theme-color)]/80 transition-all duration-400 cursor-pointer"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </nav>
        {/**for mobil */}
        <nav className="p-5 ">
          <div className="flex flex-row items-center justify-between">
            <div
              onClick={() => setShow(!show)}
              className="xl:hidden lg:hidden md:block sm:block block -mt-12 cursor-pointer hover:scale-110 hover:rotate-15 transition-all duration-400"
            >
              <span className="bg-[var(--theme-color)] block w-5 h-1"></span>
              <span className="bg-[var(--theme-color)] block w-8 h-1 mt-0.5"></span>
              <span className="bg-[var(--theme-color)] block w-10 h-1 mt-0.5"></span>
            </div>

            <div className="xl:hidden lg:hidden md:flex sm:flex flex">
              <img src={Logo} className="w-35 -mt-12 object-contain" />
            </div>
          </div>
          {show && (
            <div>
              <ul className="xl:hidden lg:hidden md:flex sm:flex flex flex-col  items-start -mt-5 text-[var(--theme-text)] gap-2 text-center text-[18px] cursor-pointer font-semibold">
                <li>
                  <Link to="/" className="link active">
                    Home
                  </Link>
                </li>
                <li className="link ">Mega Menu</li>
                <li className="link ">Blogs</li>
                <li className="link ">Contact us</li>
                <li className="link ">Mega Menu</li>
                <li className="link ">Blogs</li>
                <li className="link ">Contact us</li>
              </ul>
              <div className="xl:hidden lg:hidden md:flex sm:flex flex flex-col  flex flex-row items-start gap-4 mt-10">
                <span className="bg-[var(--theme-color)]  px-2 text-[#fff] rounded-sm">
                  AR
                </span>
                <span className="bg-[var(--theme-color)]  px-2 text-[#fff] rounded-sm">
                  EN
                </span>
              </div>
            </div>
          )}
          <div className="xl:hidden lg:hidden md:flex sm:flex flex flex-row fixed bottom-0 mx-auto w-[90%] mb-5 bg-[var(--theme-dark)] p-2  rounded-lg items-center justify-between gap-4">
            <img
              src={Cart}
              alt="cart"
              className="w-10  cursor-pointer hover:scale-110 hover:rotate-15 transition-all duration-400"
            />
            <img
              src={Wish}
              alt="Wish"
              className="w-10  cursor-pointer hover:scale-110 hover:rotate-15 transition-all duration-400"
            />
            <img
              src={User}
              alt="user"
              className="w-10  cursor-pointer hover:scale-110 hover:rotate-15 transition-all duration-400"
            />
            <img
              src={Search}
              alt="search"
              className="w-10  cursor-pointer hover:scale-110 hover:rotate-15 transition-all duration-400"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
