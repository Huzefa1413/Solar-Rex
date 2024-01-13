import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from '../ContextAPI/Components/auth';
import PrivateRoute from './privateRoutes';

// import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import AdminDashboard from '../pages/AdminPortal/AdminDashboard';

import CustomerList from '../pages/CustomerList';
import TransactionTable from '../pages/TransactionTable';
import BuyEnergy from '../pages/BuyEnergy';

import { PageNotFound } from '../pages/PageNotFound';

function MyRoutes() {
  const { setUser } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(['pk2']);
  console.log('cookies', cookies);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['pk2'] = cookies.pk2;
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // Do something with response error
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 200 to 299
        if (error.response.data.error === 'auth token required') {
          removeCookie('pk2');
          setUser(null);
          console.clear();
          navigate('/sign-in');
        }
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
      console.log(error.config);

      // Return a new promise that rejects with the error
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (window.location.host.search('localhost') > -1) {
      return () => {
        // Get_Login_User(encodeURIComponent(cookies?.pk2))
        //     .then(dispatch(login(data.user)))
        //     .catch()
      };
    } else {
      // Get_Login_User(encodeURIComponent(cookies?.pk2))
      //     .then(data => dispatch(login(data.user)))
      //     .catch();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/forgot-password/" element={<ForgotPassword />} />
        <Route exact path="/customerlist" element={<CustomerList />} />
        <Route exact path="/transactiontable" element={<TransactionTable />} />
        <Route exact path="/buyenergy" element={<BuyEnergy />} />

        <Route
          exact
          path="/reset-password/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/dashboard" element={<AdminDashboard />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
