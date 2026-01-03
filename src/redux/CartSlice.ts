import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Product interface
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

// Cart state interface
interface CartState {
  items: Product[];
  totalPrice: number;
}

// Load cart from localStorage
const savedCart: CartState = (() => {
  try {
    const data = localStorage.getItem("cart");
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && Array.isArray(parsed.items)) return parsed;
    }
  } catch (e) {
    console.warn("Invalid cart data, resetting...");
  }
  return { items: [], totalPrice: 0 };
})();

// Save cart helper
const saveCart = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

// Calculate total price helper
const calculateTotal = (items: Product[]) =>
  items.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0);

// Create slice
const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);

      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalPrice = calculateTotal(state.items);
      saveCart(state);
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((p) => p.id !== action.payload.id);
      state.totalPrice = calculateTotal(state.items);
      saveCart(state);
    },

    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) item.quantity = (item.quantity || 1) + 1;

      state.totalPrice = calculateTotal(state.items);
      saveCart(state);
    },

    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity || 1) - 1;
        if (item.quantity <= 0) state.items = state.items.filter((p) => p.id !== action.payload.id);
      }

      state.totalPrice = calculateTotal(state.items);
      saveCart(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
