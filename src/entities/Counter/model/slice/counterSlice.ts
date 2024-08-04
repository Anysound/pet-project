import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // внутри redux-toolkit лежит immer.js, которая позволяет изменять стейт
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

console.log(counterSlice);
/*
{
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
}
*/

export const { increment, decrement } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;
