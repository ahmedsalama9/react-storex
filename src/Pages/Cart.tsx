import CartIcon from "../assets/cart.svg";
import Trash from "../assets/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { JSX } from "react";

function CartPage(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-30">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-row items-start gap-5 text-2xl font-semibold text-gray-800 mb-6">
            <img
              src={CartIcon}
              alt="cart"
              className="w-8 cursor-pointer hover:scale-110 transition-all duration-400 rounded-full bg-white p-1"
            />
            <span>Cart Summary</span>
          </div>

          {cart.items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-6"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded-xl"
                  />
                  <div>
                    <h2 className="text-lg font-medium text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-[var(--theme-color)] font-medium mt-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                  onClick={()=> dispatch(clearCart({id: item.id}))}
                  >Clear Cart</button>
                </div>
                {/* Quantity Controls */}
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition cursor-pointer"
                      onClick={() =>
                        dispatch(
                          decreaseQuantity({ id: item.id, decrease: true })
                        )
                      }
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center bg-transparent border-none text-gray-800 font-medium focus:outline-none"
                    />
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition cursor-pointer"
                      onClick={() => dispatch(increaseQuantity({ id: item.id }))}

                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-red-500 text-sm"
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  >
                    <img
                      src={Trash}
                      alt="remove item"
                      className="w-8 cursor-pointer rounded-full bg-white p-1"
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 mb-3">
            <span>Subtotal</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
