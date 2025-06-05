import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [] // List of bike IDs
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const id = action.payload;
      if (state.favourites.includes(id)) {
        state.favourites = state.favourites.filter(favId => favId !== id);
      } else {
        state.favourites.push(id);
      }
    },
    deleteFavourite: (state, action) => {
      const id = action.payload;
      state.favourites = state.favourites.filter((itemId) => {
        return itemId !== id
      });
    },
    deleteAllFavourite: (state) => {
      state.favourites.splice(0);
    }
  }
});

export const {toggleFavourite,deleteAllFavourite,deleteFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
