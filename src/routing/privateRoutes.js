import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { useCookies } from 'react-cookie';

const PrivateRoute = () => {
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(true);
  const { user, GetLoginUser } = useAuth();

  useEffect(() => {
    if (!user || !Object.keys(user).length || !cookies.pk2) {
      GetLoginUser(encodeURIComponent(cookies.pk2))
        .then((data) => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user, cookies.pk2]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
