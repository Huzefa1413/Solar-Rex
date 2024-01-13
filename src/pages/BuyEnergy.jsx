import { useProSidebar } from 'react-pro-sidebar';
import React, { useEffect, useRef } from 'react';
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

const BuyEnergy = () => {
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
            <h2>Buy Energy</h2>
            <p className="d-flex align-items-center justify-content-start">
              <span className="col-md-3">Amount of Energy:</span>
              <Input type="number" className="col-md-3" />
            </p>
            <p className="d-flex align-items-center justify-content-start">
              <span className="col-md-3">Price:</span>
              <span className="col-md-3">2000 Rs</span>
            </p>
            <p className="px-3">
              <Button color="primary" type="button" className="col-md-6">
                Buy Now
              </Button>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyEnergy;
