import { createSlice} from '@reduxjs/toolkit';
import data from '../../data/data';

export const totalProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: data.totalProducts,
  },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        state.products.push(action.payload);
      }
    },
  }
});

export const { addProduct } = totalProductsSlice.actions;

export default totalProductsSlice.reducer;