import React from "react";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useState } from "react";
import { useEffect } from "react";


function ByCategory() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tab, setTab] = useState("all");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=24").then((res)=>res.json()).then((data) =>{
            setProducts(data)
            const basedCat = ["all", ...new Set(data.map((item)=>item.category))];
            setCategories(basedCat);
        })
    }, [])


  return (
    <>
      {/** by categories*/}
      <div className="text-center">
          <p className="text-[var(--theme-color)] text-xl">Fire it Up!</p>
          <h2 className="text-[var(--theme-dark)] text-3xl font-semibold mt-3">
            Products by Categories
          </h2>
          <p className="w-[55%] mx-auto mt-5 font-normal text-lg">
            Explore our newest additions, blending modern design with timeless
            quality. Each product is selected to inspire your everyday style.
          </p>
        </div>
      <div className="flex flex-row items-center justify-center gap-5 mt-10 text-[var(--theme-dark)] text-xl font-semibold cursor-pointer ">

        {categories.map((itemCat)=>(
            <button 
            onClick={()=>setTab(itemCat)}
            className={` cursor-pointer px-2 py-1  ${tab === itemCat ? "text-[var(--theme-color)] rounded-lg" : "link"}`}
            >{itemCat}</button>
        ))}
      </div>
      <div className="mt-10 mb-10 grid grid-cols-5 w-[80%] mx-auto">
       {products.filter((product)=> tab === "all" || product.category === tab).map((item)=>(
               <div  className="flex flex-col items-start p-4 shadow-lg rounded-lg cursor-pointer">
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
                     className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                   />
                   <img
                     src={Wish}
                     alt="Wish"
                     className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4"
                   />
                   <img
                     src={Max}
                     alt="Wish"
                     className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4"
                   />
                 </div>
               </div>
               <div className="mt-1">
                 <div className="flex flex-row items-center gap-1">
                   <img
                     src={Star}
                     alt="Wish"
                     className="w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full   "
                   />
                   <span className="text-lg ">
                     {" "}
                     {item.rating.rate}({item.rating.count})
                   </span>
                 </div>
                 <h3 className="font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-1">
                   {item.title}
                 </h3>
                 <p className="text-gray-600 ">{item.category}</p>
                 <div className="text-[var(--theme-color)] text-xl mt-2 ">
                  ${item.price}
                   <span className="text-gray-500">{item.discount}</span>
                 </div>
               </div>
               <span className="w-full h-1 bg-[var(--theme-color)] rounded-lg mt-5 mb-3"></span>
             </div>
        ))}
      </div>
    </>
  );
}

export default ByCategory;
