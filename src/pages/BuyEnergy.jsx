import React, { useState } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import { buy } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import { useNavigate } from 'react-router-dom';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import { useProSidebar } from 'react-pro-sidebar';
import { Input, Button } from 'reactstrap';

const BuyEnergy = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { alert } = useToast();

  if (user.role !== 'admin') {
    if (!user.profileSetup) {
      navigate('/profile');
    }
  } else {
    navigate('/dashboard');
  }

  const [loading, setLoading] = useState(false);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [data, setData] = useState({
    price: 0,
    amount: 0,
  });

  const handleAmount = (e) => {
    setData({ ...data, amount: e.target.value, price: 20 * e.target.value });
  };

  const buyEnergy = async () => {
    try {
      setLoading(true);
      if (data.amount > 0 && data.price > 0) {
        const response = await buy({
          amount: data.amount,
          price: 20,
        });
        alert(response.message, response.success);
      } else {
        alert('Please Enter Amount', false);
      }
    } catch (error) {
      console.error('Error buying energy:', error);
      alert('An error occurred while buying energy', false);
    } finally {
      setLoading(false); // Set loading to false after the API call is completed
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="sidebar_div">
          <NavSidebar
            collapseSidebar={collapseSidebar}
            toggleSidebar={toggleSidebar}
            collapsed={collapsed}
            toggled={toggled}
            broken={broken}
            rtl={rtl}
          />
        </div>
        <div className="page_div">
          <Navbar
            collapseSidebar={collapseSidebar}
            toggleSidebar={toggleSidebar}
            collapsed={collapsed}
            toggled={toggled}
            broken={broken}
            rtl={rtl}
          />
          <section className="container-fluid">
            <div className="buyenergy">
              <h2 className="px-3">Buy Solar Energy</h2>
              <p className="d-flex align-items-center justify-content-start">
                <span className="col-md-5">Amount of Energy:</span>
                <Input
                  type="number"
                  onChange={handleAmount}
                  className="col-md-7"
                />
              </p>
              <p className="d-flex align-items-center justify-content-start">
                <span className="col-md-5">Price:</span>
                <span className="col-md-7">{data.price} Rs</span>
              </p>
              <p className="px-3">
                <Button
                  onClick={buyEnergy}
                  color="primary"
                  type="button"
                  className="col-md-12"
                  disabled={loading}
                >
                  {loading ? <Loader /> : 'Buy Now'}
                </Button>
              </p>
              <p className="text-muted px-3">
                Note: The price is calculated at Rs 20 per unit of energy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyEnergy;
