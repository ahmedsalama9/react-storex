import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: Product[];
  totalPrice: number;
}


const calculateTotalPrice = (items: Product[]): number =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);


const initialState: CartState = {
  items: [],
  totalPrice: 0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = calculateTotalPrice(state.items);
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      item.quantity -= 1;

      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
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
