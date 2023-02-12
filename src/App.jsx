import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import AppLayout from './container/AppLayout';
import {
  Home,
  PageNotFound,
  Login,
  Register,
  Cart,
  Payment,
  Policy,
  Product,
  Setting,
  Support,
  User as UserProfile
} from './pages';

/**
 * @summary react-router-dom v6 can not use Routes
 * @since 2022-12-22
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="profile" element={<UserProfile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="payment" element={<Payment />} />
      <Route path="product">
        <Route index element={<Product />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="policy" element={<Policy />} />
      <Route path="support" element={<Support />} />
      <Route path="setting" element={<Setting />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
