import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
function SingleProduct() {
  const { id } = useParams();
  const [singleProducts, setSingleProducts] = useState(null);

  const [tab, setTab] = useState("Product Description");

  useEffect(() => {
    const singleProdFetch = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setSingleProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    singleProdFetch();
  }, [id]);

  if (!singleProducts)
    return (
      <div>
        <span>single product is loading </span>
      </div>
    );

  return (
    <div>
      <div className="mt-35 max-w-[90%] mx-auto p-6 bg-white rounded-xl shadow-sm flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center  rounded-lg p-4">
          <img
            src={singleProducts.image}
            alt={singleProducts.title}
            className="w-full h-[275px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {singleProducts.title}
          </h1>
          <p className="text-gray-500 capitalize">{singleProducts.category}</p>
          <p className="text-gray-700">{singleProducts.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-[var(--theme-color)]">
              ${singleProducts.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>{singleProducts.rating.rate}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
              </svg>
              <span className="text-gray-400">
                ({singleProducts.rating.count})
              </span>
            </div>
          </div>

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
        </div>
      </div>
      {/*for product details */}
      <div className="mt-5 max-w-[90%] mx-auto p-6 bg-white rounded-xl shadow-sm ">
        <div className="flex flex-row items-center justify-center gap-15 text-xl font-bold">
          <button
            onClick={() => setTab("Product Description")}
            className={`cursor-pointer ${
              tab === "Product Description"
                ? "text-[var(--theme-color)]"
                : "link"
            }`}
          >
            Product Description
          </button>
          <button
            onClick={() => setTab("Product Features")}
            className={`cursor-pointer ${
              tab === "Product Features" ? "text-[var(--theme-color)]" : "link"
            }`}
          >
            Product Features
          </button>
          <button
            onClick={() => setTab("Product Details")}
            className={`cursor-pointer ${
              tab === "Product Details" ? "text-[var(--theme-color)]" : "link"
            }`}
          >
            Product Details
          </button>
        </div>
        {tab === "Product Description" && (
          <div className="mt-10">
            <p className="text-gray-700 text-md font-medium">
              {singleProducts.description}
            </p>
          </div>
        )}
        {tab === "Product Features" && (
          <div className="mt-10">
            <ul className="list-disc list-inside text-gray-700 text-md font-medium">
              <li>High-quality materials for durability</li>
              <li>Ergonomic design for comfort</li>
              <li>Lightweight and portable</li>
              <li>Water-resistant and easy to clean</li>
              <li>Available in multiple colors and sizes</li>
            </ul>
          </div>
        )}
        {tab === "Product Details" && (
          <div className="mt-10">
            <p className="text-gray-700 text-md font-medium">
              This product is crafted with attention to detail and engineered to
              provide maximum performance and reliability. Perfect for everyday
              use, it features a sleek design, premium finish, and is built to
              last. Suitable for all ages, it comes with a warranty and customer
              support for peace of mind.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
