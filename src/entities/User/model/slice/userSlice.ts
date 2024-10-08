import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_KEY);
    },
  },
});

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

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
