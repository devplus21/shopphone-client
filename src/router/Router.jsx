import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ProtectedRoute from '../components/ProtectedRoute';
import Account from '../pages/Account';
import Admin from '../pages/Admin';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import DetailProducts from '../pages/DetailProducts';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import Verify from '../pages/Verify';
import { loadUser } from '../redux/actions/userAction';

import About from '../pages/About';
import Success from '../pages/Checkout/Success';
import Contact from '../pages/Contact';
import Map from '../pages/Map';
import Order from '../pages/Order';

const Router = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const RenderHeader = (isHeader) => {
    if (isHeader) {
      return <Header />;
    }
  };

  const RenderFooter = (isFooter) => {
    if (isFooter) {
      return <Footer />;
    }
  };

  return (
    <>
      {RenderHeader(!location.pathname.includes('admin'))}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verify/:userId/:verificationCode' element={<Verify />} />
        {/* <Route path="/password/forgot" element={<ForgotPassword />} /> */}
        {/* <Route path="/password/reset/:token" element={<ResetPassword />} /> */}
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/detailProduct/:id' element={<DetailProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/map' element={<Map />} />

        <Route
          path='/admin/*'
          element={
            <ProtectedRoute isAdmin={true}>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path='/account/*'
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        <Route
          path='/checkout'
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/order/:id'
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />

        <Route
          path='/checkout/success'
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
      </Routes>
      {RenderFooter(!location.pathname.includes('admin'))}
    </>
  );
};

export default Router;
