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

import { useAuth } from "../ContextAPI/Components/auth"


const BuyEnergy = () => {

  const { user } = useAuth();

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  //   const sliderRef = useRef(null);

  //   useEffect(() => {
  //     const slider1 = sliderRef.current;

  //     if (slider1.noUiSlider) {
  //       slider1.noUiSlider.destroy();
  //     }

  //     const newSlider = Slider.create(slider1, {
  //       start: [0],
  //       connect: [true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 },
  //     });

  //     return () => {
  //       newSlider.destroy();
  //     };
  //   }, []);

  const [data, setData] = useState({
    price: 0,
    amount: 0
  })


  const handleAmount = (e) => {
    setData({ ...data, amount: e.target.value, price: 20 * e.target.value })
  }

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
          <section className="container-fluid py-3">
            {
              user.role == "admin" ?
                <h1>Admin</h1>
                :
                <h1>User</h1>
            }


            <div>
              <h2>Buy Energy</h2>
              <p className="d-flex align-items-center justify-content-start">
                <span className="col-md-3">Amount of Energy:</span>
                <Input type="number" onChange={handleAmount} className="col-md-3" />
              </p>
              <p className="d-flex align-items-center justify-content-start">
                <span className="col-md-3">Price:</span>
                <span className="col-md-3">{data.price} Rs</span>
              </p>
              <p className="px-3">
                <Button color="primary" type="button" className="col-md-6">
                  Buy Now
                </Button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyEnergy;
