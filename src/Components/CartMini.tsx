import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg";
import Trash from "../assets/trash.svg";

function CartMini() {
  return (
    <div className="h-full bg-gray-100 p-4 sm:p-6 overflow-y-auto">
      <div className="flex flex-row items-center gap-3 text-xl font-semibold text-gray-800 mb-6">
        <img
          src={Cart}
          alt="cart"
          className="w-10 cursor-pointer rounded-full bg-white p-1 shadow-sm"
        />
        <span>Cart Summary</span>
        <Link
          className="px-2 py-2 border border-[var(--theme-color)] text-[var(--theme-color)] rounded-md font-small hover:bg-[var(--theme-color)] hover:text-white transition cursor-pointer"
          to="/cart"
        >
          Go to Cart
        </Link>
      </div>


      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              alt="T-Shirt"
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-md font-medium text-gray-800 w-full truncate">
                Classic White T-Shirt
              </h2>
              <p className="text-sm text-gray-500">Size: M</p>
              <p className="text-sm text-gray-500">Color: White</p>
              <p className="text-[var(--theme-color)] font-medium mt-1">
                $29.99
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 ">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-200 transitionm cursor-pointer">
                −
              </button>
              <input
                type="number"
                min="0"
                max="5"
                value="2"
                readOnly
                className="w-10 text-center bg-transparent border-none focus:outline-none font-medium"
              />
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-200 transition cursor-pointer">
                +
              </button>
            </div>

            <button className="text-red-500">
              <img
                src={Trash}
                alt="remove item"
                className="w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>$129.97</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Tax</span>
          <span>$3.25</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span>$138.22</span>
        </div>

        <button className="mt-4 w-full bg-[var(--theme-color)] text-white py-2 rounded-lg font-medium hover:bg-[var(--theme-dark)] transition cursor-pointer">
          Proceed to Checkout
        </button>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Promo code"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]"
          />
          <button className="px-4 py-2 border border-[var(--theme-color)] text-[var(--theme-color)] rounded-md font-medium hover:bg-[var(--theme-color)] hover:text-white transition cursor-pointer">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartMini;
