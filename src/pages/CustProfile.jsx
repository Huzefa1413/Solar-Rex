import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useProSidebar } from 'react-pro-sidebar';
import { getCustProfile } from '../ContextAPI/APIs/api';
import {
  last3monthsConsumption,
  consumptionPrediction,
  lastMonthsPurchasedVsConsumed,
} from '../ContextAPI/APIs/api';
import { profilePicUrl } from '../helpers/data';
import profile from '../assets/profile.svg';
import PredictionChart from '../components/Charts/prediction';
import BarChart from '../components/Charts/BarChart';

const CustProfile = () => {
  const { id } = useParams();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [cust, setCust] = useState({});
  const [monthsConsumption, setMonthsConsumption] = useState({
    count: [],
    names: [],
  });
  const [purchasedVsConsumed, setPurchasedVsConsumed] = useState({
    count: [],
    names: [],
  });
  const [consumptionPredict, setConsumptionPrediction] = useState({
    predictions: [],
    dates: [],
    forecast: 0,
  });

  const fetchLast3MonthsConsumption = async (id) => {
    try {
      const response = await last3monthsConsumption(id);
      if (response.count.length > 0 && response.names.length > 0) {
        setMonthsConsumption({ count: response.count, names: response.names });
      }
    } catch (error) {
      console.error('Error fetching last 3 months consumption:', error);
    }
  };

  const fetchPurchasedVsConsumed = async (id) => {
    try {
      const response = await lastMonthsPurchasedVsConsumed(id);
      if (response.count.length > 0 && response.names.length > 0) {
        setPurchasedVsConsumed({
          count: response.count,
          names: response.names,
        });
      }
    } catch (error) {
      console.error('Error fetching purchased vs consumed:', error);
    }
  };

  const fetchConsumptionPrediction = async (id) => {
    try {
      const response = await consumptionPrediction(id);
      if (response.success && response.predictions.length > 0) {
        setConsumptionPrediction({
          predictions: response.predictions,
          dates: response.date,
          forecast: response.forecastPoint,
        });
      }
    } catch (error) {
      console.error('Error fetching consumption prediction:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      const response = await getCustProfile(id);
      if (response.message !== null) {
        setCust(response.message);
      }
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchLast3MonthsConsumption(id);
    fetchPurchasedVsConsumed(id);
    fetchConsumptionPrediction(id);
  }, [id]);

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
                        {consumptionPredict.dates.length > 0 && (
                          <>
                            <span>This Month's Consumption</span>
                            <PredictionChart
                              predictionData={consumptionPredict.predictions}
                              dates={consumptionPredict.dates}
                              forecastPoint={consumptionPredict.forecast}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="chart-container">
                        {monthsConsumption.count.length > 0 && (
                          <>
                            <span>Last 3 Months Consumption</span>
                            <BarChart barData={monthsConsumption} />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="chart-container">
                        {purchasedVsConsumed.count.length > 0 && (
                          <>
                            <span>Energy Purchased vs Consumed</span>
                            <BarChart barData={purchasedVsConsumed} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img
                        src={
                          cust.profilepic
                            ? `${profilePicUrl}/${cust.profilepic}`
                            : profile
                        }
                        alt="User Avatar"
                      />
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
