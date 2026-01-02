import { useEffect, useMemo } from "react";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {Products} from "../assets/products.js"

import Grid from "../assets/grid.svg";
import List from "../assets/list.svg";
import Filter from "../Components/Filter";
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

function Shop() {
  const [fakeProducts, setfakeProducts] = useState<Product[]>([]); //api
  const [layOut, setLayOut] = useState("grid");
  const [catFilter, setCatFilter] = useState([]); // filter
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fakeProductFetch = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=24");
        const data: Product[] = await res.json();
        setfakeProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fakeProductFetch();
  }, []);

  const filterProducts = useMemo(() => {
    let items = fakeProducts;
    if (catFilter.length > 0) {
      items = items.filter((products) => catFilter.includes(products.category));
    }

    // Sorting
    if (sortBy === "relative") {
      items = items.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "Premium") {
      items = items.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    if (sortBy === "priceUp") {
      items = items.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "priceDown") {
      items = items.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "recent") {
      // note: fake api end point do not provide date,, in real endpoint use date instead of id
      items = items.sort((a, b) => new Date(b.id) - new Date(a.id));
    }
    return items;
  }, [fakeProducts, catFilter, sortBy]);

  return (
    <div className="flex flex-col w-[90%] mx-auto mt-20 ">
      {/* for product section */}
      <div className="flex-2 mt-20">
        {/* for sorting, switch layouts */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full sm:w-[95%] mx-auto gap-3 sm:gap-0">
          <div className="border-2 border-[var(--theme-dark)] rounded-sm px-2 py-0.5 font-medium text-[16px] sm:text-[18px] w-full sm:w-auto">
            <select
              className="cursor-pointer w-full sm:w-auto"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relative">Relative</option>
              <option value="Premium">Premium</option>
              <option value="priceUp">Price up</option>
              <option value="priceDown">Price Down</option>
              <option value="recent">Recent</option>
            </select>
          </div>

          <div className="w-full sm:w-auto">
            <Filter catFilter={catFilter} setCatFilter={setCatFilter} />
          </div>

          <div className="flex flex-row gap-3 items-center justify-start sm:justify-center w-full sm:w-auto">
            <img
              onClick={() => setLayOut("grid")}
              src={Grid}
              alt="product shop layout-grid"
              className="w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:rotate-10 transition-transform duration-400 ease-in-out"
            />
            <img
              onClick={() => setLayOut("list")}
              src={List}
              alt="product shop layout-list"
              className="w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:-rotate-10 transition-transform duration-400 ease-in-out"
            />
          </div>
        </div>

        {/* the products */}
        <div
          className={`mt-10 mb-10 ${
            layOut === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-5"
          }`}
        >
          {filterProducts.map((item) => (
            <div
              key={item.id}
              className="shadow-lg rounded-lg cursor-pointer flex  flex-col items-start p-4"
            >
              <img
                src={item.image}
                alt=""
                className="w-[350px] h-[275px] object-cover relative group"
              />
              <div className="flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-fit h-[275px] transition-all duration-500">
                <div>
                  <img
                    src={Cart}
                    alt="cart"
                    className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                  />
                  <img
                    src={Wish}
                    alt="Wish"
                    className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4"
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
              <div className="mt-1">
                <div className="flex flex-grid items-center justify-between gap-1">
                  <div className="flex flex-row gap-2 ">
                    <img
                      src={Star}
                      alt="Wish"
                      className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full   "
                    />
                    <span className="text-lg "> 4.8(500)</span>
                  </div>
                  <div className="flex flex-row gap-2 ">
                    <button className="w-5 h-5 block bg-red-800 rounded-full cursor-pointer "></button>
                    <button className="w-5 h-5 block bg-black rounded-full cursor-pointer "></button>
                    <button className="w-5 h-5 block bg-blue-500 rounded-full cursor-pointer "></button>
                  </div>
                </div>
                <h3 className="font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 ">{item.category}</p>
                <div className="text-[var(--theme-color)] text-xl mt-2 ">
                  ${item.price}
                  <span className="text-gray-500">{item.discount} </span>
                </div>
              </div>
              <span className="w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3"></span>
              <div className="flex flex-row gap-1 w-[92%] mx-auto">
                <button className=" flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
