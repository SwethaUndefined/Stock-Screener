import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});



export const registerUser = async (values) => {
  try {
    const res = await instance.post("/user/register", values);
    return res.data;
  } catch (error) {
    console.error("Register::error", error);
    throw error;
  }
};
export const loginCheck = async (values) => {
  console.log(values)
  try {
    const res = await instance.post("/user/login/", values);
    return res.data;
  } catch (error) {
    console.error("LoginCheck::error", error);
    throw error;
  }
};

export const verifyEmailCheck = async (token) => {
  console.log({token})
  try {
    const response = await instance.get(`/user/verifyEmailCheck/${token}`);
    return response.data;
  } catch (error) {
    console.error('Error in verifying email:', error);
    throw error;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const res = await instance.post("/user/forgotPassword", email );
    return res.data;
  } catch (error) {
    console.error("ForgotPassword::error", error);
    throw error;
  }
};

export const updatePassword = async (email, newPassword, token) => {
  try {
    const res = await instance.post(`/user/update-password`, { email, newPassword, token });
    return res.data;
  } catch (error) {
    console.error("UpdatePassword::error", error);
    throw error;
  }
};
