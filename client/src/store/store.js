import { configureStore } from '@reduxjs/toolkit';
import registerFormReducer from './registerForm';
import loginFormReducer from './loginForm';

const store = configureStore({
  reducer: {
    registerForm: registerFormReducer,
    loginForm: loginFormReducer,
  },
});

export default store;
