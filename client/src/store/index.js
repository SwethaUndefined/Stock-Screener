import { combineReducers } from '@reduxjs/toolkit';
import registerFormReducer from './registerForm'; 
import loginFormReducer from './loginForm';

const rootReducer = combineReducers({
    registerForm: registerFormReducer, 
    loginForm: loginFormReducer,
});

export default rootReducer;
