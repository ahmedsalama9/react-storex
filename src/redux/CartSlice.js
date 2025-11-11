import { createSlice } from "@reduxjs/toolkit";

//  initialization
const savedCart = (() => {
  try {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data && Array.isArray(data.items)) return data;
  } catch (e) {
    console.warn("Invalid cart data, resetting...");
  }
  return { items: [], totalPrice: 0 };
})();

// Helper function for localStorage save
const saveCart = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      items: state.items,
      totalPrice: state.totalPrice,
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalPrice = state.items.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      );
      
      // store only plain data
      saveCart(state); 

    },

    removeItem: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload.id);

      state.totalPrice = state.items.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      );

      saveCart(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) item.quantity += 1;

      state.totalPrice = state.items.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      );

      saveCart(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter((p) => p.id !== action.payload.id);
      }

      state.totalPrice = state.items.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      );

      saveCart(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
