import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/Cart/CartPage';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import PolicyPage from './pages/Policy/PolicyPage';
import ProductPage from './pages/Product/ProductPage';
import ProductDetail from './pages/Product/ProductDetail';
import UserProfile from './pages/Profile/UserProfile';
import Setting from './pages/Setting/Setting';
import SupportPage from './pages/Support/SupportPage';
import PageNotFound from './pages/Error/PageNotFound';
import AppLayout from './container/AppLayout';

/**
 * @summary react-router-dom v6 can not use Routes
 * @since 2022-12-22
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<PageNotFound />}>
      <Route index element={<Home />} />
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<PageNotFound />} />
      </Route>
      <Route path="profile" element={<UserProfile />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="payment" element={<Payment />} />
      <Route path="product" >
        <Route index element={<ProductPage />}/>
        <Route path=":id" element={<ProductDetail />} />
      </Route>
      <Route path="policy" element={<PolicyPage />} />
      <Route path="support" element={<SupportPage />} />
      <Route path="setting" element={<Setting />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;