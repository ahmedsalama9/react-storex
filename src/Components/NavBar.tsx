import React, { useState } from "react";
import { Link } from "react-router-dom";

import Map from "../assets/location.svg";
import Email from "../assets/envelope.svg";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import User from "../assets/user.svg";
import Search from "../assets/search.svg";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="flex flex-col h-[55px]  ">
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
              <li className="text-white transition-all duration-500 bg-[var(--theme-dark)]  px-2 py-1 rounded-[3px] flex items-center ">
                  <Link to="#">
                    shop by brands
                  </Link>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="/" className="link active">
                    Home
                  </Link>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500 ">
                  <Link to="#" className="link">
                    man
                  </Link>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="#" className="link">
                   women
                  </Link>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="#" className="link">
                   kids
                  </Link>
                </li>
             
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="#" className="link">
                    Blogs
                  </Link>
                </li>
                <li className="hover:text-[var(--theme-dark)] transition-all duration-500">
                  <Link to="#" className="link">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-[30px]">
              <img
                src={Cart}
                alt="cart"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
              <img
                src={Wish}
                alt="Wish"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 "
              />
              <img
                src={User}
                alt="user"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
              <img
                src={Search}
                alt="search"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
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
                    <span className="bg-[var(--theme-color)]  px-2 text-[#fff] rounded-sm">AR</span>
                    <span className="bg-[var(--theme-color)]  px-2 text-[#fff] rounded-sm">EN</span>
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
