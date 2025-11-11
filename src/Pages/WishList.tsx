import React from "react";

function WishList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16 mt-30">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          My Wishlist
        </h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-56">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
                alt="Classic White T-Shirt"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Classic White T-Shirt
              </h2>
              <p className="text-sm text-gray-500 mb-4">Size: M | Color: White</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-[var(--theme-color)] font-bold text-lg">$29.99</p>
                <button className="bg-[var(--theme-color)] text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-[var(--theme-dark)] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-56">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                alt="Denim Jacket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Denim Jacket</h2>
              <p className="text-sm text-gray-500 mb-4">Size: L | Color: Blue</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-[var(--theme-color)] font-bold text-lg">$69.99</p>
                <button className="bg-[var(--theme-color)] text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-[var(--theme-dark)] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-56">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/Nike_logo.svg"
                alt="Leather Sneakers"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Leather Sneakers</h2>
              <p className="text-sm text-gray-500 mb-4">Size: 42 | Color: Brown</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-[var(--theme-color)] font-bold text-lg">$89.99</p>
                <button className="bg-[var(--theme-color)] text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-[var(--theme-dark)] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
