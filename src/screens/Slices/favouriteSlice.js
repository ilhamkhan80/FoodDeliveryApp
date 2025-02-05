import { createSlice } from '@reduxjs/toolkit';

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        items: [],
    },
    reducers: {
        addToFavourite: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export const selectedFavouriteItems = (state) => state.favourite.items;

export default favouriteSlice.reducer;
