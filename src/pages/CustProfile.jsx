import React from 'react';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useProSidebar } from 'react-pro-sidebar';
import '../components/components.css';
import profilepic from '../assets/avatar.jpg';
import { useAuth } from '../ContextAPI/Components/auth';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getCustProfile } from '../ContextAPI/APIs/api';
import { useEffect } from 'react';
import PredictionLineChart from '../components/Charts/PredictionChart';
import BarChart from '../components/Charts/Charts.Students/BarChart';
const CustProfile = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [cust, setCust] = useState({});
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

  const fetchAlldata = async () => {
    try {
      const response = await getCustProfile(id);

      if (response.message !== null) {
        setCust(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAlldata();
  }, []);

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
          <section className="container-fluid py-3 profile">
            {/* {
            user.role == "admin" ?
              <h1>Admin</h1>
              :
              <h1>User</h1>
          } */}

            <div className="welcome">
              <h2>{cust.username}'s Profile Page</h2>
              <p>
                This is {cust.username}'s profile page. You can see their
                details here.
              </p>
            </div>
            <div className="container-fluid">
              <div className="row" style={{ flexWrap: 'wrap-reverse' }}>
                <div className="col-xl-8">
                  <div className="row py-4">
                    <div className="my-2">
                      <div className="chart-container">
                        <span>Production Prediction</span>
                        <PredictionLineChart
                          predictions={[100, 120, 100, 90, 130]}
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="chart-container">
                        <span>Last 3 Months Production</span>
                        <BarChart barData={lastmonths} />
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="chart-container">
                        <span>Energy Sold vs Produced</span>
                        <BarChart barData={soldvsproduced} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img src={profilepic} alt="" />
                    </div>
                    <div className="profilebody">
                      <h3>{cust.username}</h3>
                      <h6>
                        {cust.city} {cust.country}
                      </h6>
                      <h4>{cust.email}</h4>
                      <h5>{cust.mobileNumber}</h5>
                      <hr />
                      <p>{cust.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustProfile;
