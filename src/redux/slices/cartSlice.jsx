import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  products: JSON.parse(sessionStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
        toast.success("محصول به سبد خرید اضافه شد", { icon: "🚀" });
      }
      sessionStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.products));
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      sessionStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      toast.error("محصول از سبد خرید حذف شد", { icon: "💣" });
      sessionStorage.setItem("cart", JSON.stringify(state.products));
    },
    resetCart: (state) => {
      state.products = [];
      sessionStorage.setItem("cart", JSON.stringify(state.products));
      toast.error("کل محصولات از سبد خرید حذف شدن", { icon: "💣" });
    },
    checkout: (state) => {
      state.products = [];
      sessionStorage.setItem("cart", JSON.stringify(state.products));
      toast.success("پرداخت شما با موفقیت انجام شد", { icon: "🚀" });
    }
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  checkout
} = cartSlice.actions;
export default cartSlice.reducer;
