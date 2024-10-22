import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; //holds data for update
      const existingItem = state.items.find((item) => item.name === name);
      //finds the items state, checks if the name is the same
      if (existingItem) {
        //if item already exists, it adds to the quantity
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
        //otherwise adds item to array
      }
      //adds new item to cart, and adds 1 if already there
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (items) => items.name !== action.payload
      );
      //filters the items to see if its already added & removes
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload; //finds data in payload
      const itemToUpdate = state.items.find(item => item.name === name); //finds name in array
      if (itemToUpdate) { //if item is in the array
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
