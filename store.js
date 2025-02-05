import { configureStore } from '@reduxjs/toolkit'
// import { cartSlice } from './src/screens/Slices/cartSlice'
import { restauranetSlice } from './src/screens/Slices/restauranetSlice'
import CartReducer from "./src/screens/Slices/cartSlice"
import FavouriteReducer from './src/screens/Slices/favouriteSlice'
export default configureStore({
    reducer: {
        cart: CartReducer,
        favourite: FavouriteReducer
    }
})