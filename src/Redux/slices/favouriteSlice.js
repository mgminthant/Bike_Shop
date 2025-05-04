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
    }
  }
});

export const {toggleFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
