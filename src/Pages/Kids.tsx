import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useEffect, useState } from "react";
import type { JSX } from "react";
import Grid from "../assets/grid.svg";
import List from "../assets/list.svg";
import { Link } from "react-router-dom";
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

function Kids(): JSX.Element {
  const [kidsCat, setKidsCat] = useState<Product[]>([]);
  const [layOut, setLayOut] = useState("grid");

  useEffect(() => {
    const jeweleryProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=24");
        const data: Product[] = await res.json();
        setKidsCat(data);
      } catch (err) {
        console.error(err);
      }
    };
    jeweleryProducts();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      {/* for product side */}
      <div className="mt-40">
        {/* for sorting & layout */}
        <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
          {" "}
          <div className="flex flex-row gap-3 items-center justify-center">
            <img
              onClick={() => setLayOut("grid")}
              src={Grid}
              alt="product shop layout-grid"
              className="w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:rotate-10 duration-400 transitin-ease"
            />
            <img
              onClick={() => setLayOut("list")}
              src={List}
              alt="product shop layout-list"
              className="w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:-rotate-10 duration-400 transitin-ease"
            />
          </div>
        </div>
        {/* for products */}
        <div
          className={`mt-10 mb-10 ${
            layOut === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-5"
          }`}
        >
          {kidsCat
            .filter((products) => products.category === "jewelery")
            .map((item, index) => (
              <div
                key={index}
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
                      <span className="text-lg ">
                        {" "}
                        {item.rating.rate} ({item.rating.count})
                      </span>
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

export default Kids;
