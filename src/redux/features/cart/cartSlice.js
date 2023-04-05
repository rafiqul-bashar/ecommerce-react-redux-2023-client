import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: JSON.parse(localStorage.getItem("cartTotalQuantity"))
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: JSON.parse(localStorage.getItem("cartTotalAmount"))
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload };
        state.cartItems.push(tempProductItem);
        state.cartTotalQuantity = state.cartTotalQuantity + 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartTotalQuantity--;
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id == action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id != cartItem.id
          );
          state.cartItems = nextCartItems;
          state.cartTotalQuantity = state.cartTotalQuantity - 1;
        }

        return state;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    getTotals(state, action) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price.toFixed(2) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total.toFixed(2);
    },
  },
});

export const { getTotals, addToCart, decreaseCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
