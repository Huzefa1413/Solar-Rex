import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../ContextAPI/Components/auth';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BarChart from '../../components/Charts/Charts.Students/BarChart';
import RadialBarChart from '../../components/Charts/Charts.Students/RadialBarChart';
import PredictionLineChart from '../../components/Charts/PredictionChart';
// import Backdrop from '@mui/material/Backdrop';

// import SoldVsProducedChart from '../../components/MyCharts/SoldvsProducedChart';

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from 'react-pro-sidebar';

import NavSidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import Card from '../../components/StatsCard';

import '../../components/components.css';

function AdminDashboard() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const soldvsproduced = {
    count: [2200, 2500],
    names: ['Sold', 'Produced'],
  };
  const lastmonths = {
    count: [100, 110, 90, 100, 110, 90],
    names: [
      'October',
      'November',
      'December',
      'October',
      'November',
      'December',
    ],
  };
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef(null);
  const details = false;
  useEffect(() => {
    if (!details) {
      if (modalRef.current) {
        modalRef.current.click();
      }
    }
  }, []);
  const navigate = useNavigate();
  const closeModalAndNavigate = () => {
    navigate('/profile');
    window.location.reload();
  };

  return (
    <>
      {/* <button
        ref={modalRef}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ display: 'none' }}
      >
        Launch static backdrop modal
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Fill your details
              </h1>
            </div>
            <div className="modal-body">
              You cannot continue untill your Profile is completed, Navigate to
              Profile Page
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={closeModalAndNavigate}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div> */}
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

          <section className="container-fluid py-4 dashboard">
            <div className="row">
              <Card
                title={'Energy Produced Today'}
                value={0.67}
                perc={2.3}
                date={'Tomorrow'}
              />
              <Card
                title={'Energy Produced This Week'}
                value={8.33}
                perc={-2.1}
                date={'Last Week'}
              />
              <Card
                title={'Energy Produced This Month'}
                value={30.23}
                perc={2.33}
                date={'Last Month'}
              />
              <Card
                title={'Energy Produced This Year'}
                value={410.43}
                perc={5.4}
                date={'Last Year'}
              />
            </div>
            <div className="row py-4">
              <div className="col-md-5 my-2">
                <div className="chart-container">
                  <span>Energy Meter</span>
                  <RadialBarChart noStd={75} />
                </div>
              </div>
              <div className="col-md-7 my-2">
                <div className="chart-container">
                  <span>Production Prediction</span>
                  <PredictionLineChart predictions={[100, 120, 100, 90, 130]} />
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="chart-container">
                  <span>Last 3 Months Production</span>
                  <BarChart barData={lastmonths} />
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="chart-container">
                  <span>Energy Sold vs Produced</span>
                  <BarChart barData={soldvsproduced} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
