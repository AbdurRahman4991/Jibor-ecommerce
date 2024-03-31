import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import OrderPage from './Pages/OrderPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PasswordPage from './Pages/PasswordPage';
import OtpPage from './Pages/OtpPage';
import ChangePasswordPage from './Pages/ChangePasswordPage';
import AdminLayout from './Pages/AdminLayout';
import UploadProduct from './Pages/UploadProduct';
import AdminLoginPage from './Pages/AdminLoginPage';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/product/:id" element={<Product />} /> 
        <Route path="/poduct/details/:id" element={<ProductDetails />} />        
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forget' element={<PasswordPage />} />
        <Route path='/otp' element={<OtpPage />} />
        <Route path='/change/password' element={<ChangePasswordPage />} />
        <Route path='/admin' element={<AdminLoginPage />} />
        <Route path='/dashboard' element={<AdminLayout />}>
          <Route index element={<OrderPage />} />
          <Route  path='new-product'  element={ <UploadProduct /> } /> 
        </Route>
                      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
