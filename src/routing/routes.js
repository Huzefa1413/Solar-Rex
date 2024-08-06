import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from '../ContextAPI/Components/auth';
import PrivateRoute from './privateRoutes';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import AdminDashboard from '../pages/AdminDashboard';
import CustomerList from '../pages/CustomerList';
import TransactionTable from '../pages/TransactionTable';
import BuyEnergy from '../pages/BuyEnergy';
import Profile from '../pages/Profile';
import CustProfile from '../pages/CustProfile';
import Support from '../pages/Support';
import { PageNotFound } from '../pages/PageNotFound';

function MyRoutes() {
  const { setUser } = useAuth();
  const [cookies] = useCookies(['pk2']);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['pk2'] = cookies.pk2;
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response) {
        if (error.response.data.error === 'auth token required') {
          setUser(null);
          navigate('/');
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (window.location.host.search('localhost') === -1) {
      // API call or other setup for production environment
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<PrivateRoute />}>
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/transactiontable" element={<TransactionTable />} />
        <Route path="/buyenergy" element={<BuyEnergy />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/customer-profile/:id" element={<CustProfile />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MyRoutes;
