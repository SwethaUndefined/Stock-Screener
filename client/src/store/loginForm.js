import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: ''
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setLoginForm: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setLoginForm } = loginFormSlice.actions;

export default loginFormSlice.reducer;
