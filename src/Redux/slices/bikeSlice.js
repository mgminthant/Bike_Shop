import { createSlice} from '@reduxjs/toolkit';
import data from '../../data/data';

export const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikeList: data.bikes,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.bikeList.push(action.payload);
      }
    },
  }
});

export const { addTodo } = bikeSlice.actions;

export default bikeSlice.reducer;