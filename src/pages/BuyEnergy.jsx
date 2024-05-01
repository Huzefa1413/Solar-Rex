import { useProSidebar } from 'react-pro-sidebar';
import React, { useEffect, useRef, useState } from 'react';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

// import Slider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
} from 'reactstrap';

import { useAuth } from '../ContextAPI/Components/auth';
import { buy } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import { useNavigate } from 'react-router-dom';
const BuyEnergy = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user.role !== 'admin' && !user.profileSetup) {
    navigate('/profile');
  }
  console.log('UUU', user);
  const { alert } = useToast();
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
      if (data.amount > 0 && data.price > 0) {
        const response = await buy({ amount: data.amount, price: data.amount * 20 });
        alert(response.message, response.success);
      } else {
        alert('Please Enter Amount', false);
      }
    } catch (e) {
      console.log(e);
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
            {user.role == 'admin' ? (
              <h1>Admin</h1>
            ) : (
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
                    onClick={() => buyEnergy()}
                    color="primary"
                    type="button"
                    className="col-md-12"
                  >
                    Buy Now
                  </Button>
                </p>
                <p className="text-muted px-3">
                  Note: The price is calculated at Rs 20 per unit of energy.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyEnergy;
