import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Login from './pages/login';
import RegistrationForm from './pages/registrationForm';
import Dashboard from './pages/dashboard';
import EmailConfirmationPage from './components/emailConfirmationPage';
import ForgotPassword from './components/forgotPassword';
import ResetPassword from './components/resetPassword';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={<Element />} />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/confirm/:token" element={<EmailConfirmationPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
