import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registerForm: [],
};

export const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setRegisterForm: (state, action) => {
      state.registerForm = action.payload;
    },
  },
});

export const { setRegisterForm } = registerFormSlice.actions;

export default registerFormSlice.reducer;
