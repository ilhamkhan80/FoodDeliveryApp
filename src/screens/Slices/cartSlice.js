import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id); // Remove if quantity = 1
            }
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});


export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectedCartItems = (state) => state.cart.items;
export const selectedCartItemsById = (id) => (state) =>
    state.cart.items.filter(item => item.id === id);
export const selectedCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
