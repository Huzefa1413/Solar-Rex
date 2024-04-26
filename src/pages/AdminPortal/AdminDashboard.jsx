import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../ContextAPI/Components/auth';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BarChart from '../../components/Charts/Charts.Students/BarChart';
import RadialBarChart from '../../components/Charts/Charts.Students/RadialBarChart';
import PredictionLineChart from '../../components/Charts/PredictionChart';
import PredictionChart from '../../components/Charts/prediction'
// import Backdrop from '@mui/material/Backdrop';
import { adminCards, last3monthsConsumption, consumptionPrediction, userCards, productionPrediction, last3months, last3monthsSoldvsProduced, lastMonthsPurchasedVsConsumed } from "../../ContextAPI/APIs/api"
// import SoldVsProducedChart from '../../components/MyCharts/SoldvsProducedChart';
// import { useAuth } from '../../ContextAPI/Components/auth';
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

  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.role !== "admin" && !user.profileSetup) {
    navigate("/profile")
  }
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const soldvsproduced = {
    count: [2600, 2700],
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


  const [last3monthsProduction, setLast3monthsProduction] = useState({
    count: [],
    names: []
  })

  const [monthsConsumption, setMonthsConsumption] = useState({
    count: [],
    names: []
  })

  const fetchLast3monthsProduction = async () => {
    try {
      const response = await last3months()
      console.log("hhhhkkkkk", response);
      if (response.count.length > 0 && response.names.length > 0) {
        setLast3monthsProduction({ ...last3monthsProduction, count: response.count, names: response.names })
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  const fetchLast3monthsConsuption = async () => {
    try {
      console.log("invoked");
      const response = await last3monthsConsumption()
      console.log("hhhh", response);
      if (response.count.length > 0 && response.names.length > 0) {
        setMonthsConsumption({ ...monthsConsumption, count: response.count, names: response.names })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  const [soldvsProduced, setSoldvsProduced] = useState({
    count: [],
    names: []
  })

  const [purchasedvsConsumed, setPurchasedvsConsumed] = useState({
    count: [],
    names: []
  })


  const soldVProd = async () => {
    try {
      console.log("invoked");
      const response = await last3monthsSoldvsProduced()
      console.log("OOOO", response);
      if (response.count.length > 0 && response.names.length > 0) {
        setSoldvsProduced({ ...soldvsProduced, count: response.count, names: response.names })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  const purchaseVconsume = async () => {
    try {
      console.log("invoked");
      const response = await lastMonthsPurchasedVsConsumed()
      console.log("PPPP", response);
      if (response.count.length > 0 && response.names.length > 0) {
        setPurchasedvsConsumed({ ...purchasedvsConsumed, count: response.count, names: response.names })
        // setMonthsConsumption({ ...monthsConsumption, count: response.count, names: response.names })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

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
  const closeModalAndNavigate = () => {
    navigate('/profile');
    window.location.reload();
  };


  const [cardsData, setCardsData] = useState({})
  const getAllAdminCards = async () => {
    try {
      if (user.role == "admin") {
        const response = await adminCards()
        console.log("REsponse", response);
        if (response.success) {
          setCardsData(response.message)
        }
      }
      else {
        const response = await userCards()
        console.log("REsponse", response);
        if (response.success) {
          setCardsData(response.message)
        }
      }

    }
    catch (e) {
      console.log(e);
    }
  }


  const [productionPredict, setProductionPrediction] = useState({
    predictions: [],
    dates: [],
    forecast: 0
  })

  const fetchProductionPrediction = async () => {
    try {
      const response = await productionPrediction()
      console.log("hhhhhooooo", response);
      if (response.success && response.predictions.length > 0) {
        setProductionPrediction({
          ...productionPredict,
          predictions: response.predictions,
          dates: response.date,
          forecast: response.forecastPoint
        })
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  const [consumptionPredict, setConsumptionPrediction] = useState({
    predictions: [],
    dates: [],
    forecast: 0
  })


  const fetchConsumptionPrediction = async () => {
    try {
      console.log("CCCCHHHH");
      const response = await consumptionPrediction()
      console.log("hhhhhoooooCOMMM", response);
      if (response.success && response.predictions.length > 0) {
        setConsumptionPrediction({
          ...consumptionPredict,
          predictions: response.predictions,
          dates: response.date,
          forecast: response.forecastPoint
        })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllAdminCards()

    if (user.role == "admin") {

    }
    else {
    }
    fetchLast3monthsProduction()
    soldVProd()
    fetchProductionPrediction()

    fetchLast3monthsConsuption()
    purchaseVconsume()
    fetchConsumptionPrediction()
  }, [])
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
                title={`${user.role === "admin" ? `Energy Produced Today` : `Energy Consumed Today`}`}
                value={cardsData.dp}
                perc={2.3}
                date={'Tomorrow'}
              />
              <Card
                title={`${user.role === "admin" ? `Energy Produced This Week` : `Energy Consumed This Week`}`}
                value={cardsData.wp}
                perc={-2.1}
                date={'Last Week'}
              />
              <Card
                title={`${user.role === "admin" ? `Energy Produced This Month` : `Energy Consumed This Month`}`}
                value={cardsData.mp}
                perc={2.33}
                date={'Last Month'}
              />
              <Card
                title={`${user.role === "admin" ? `Energy Produced This Year` : `Energy Consumed This Year`}`}
                value={cardsData.yp}
                perc={5.4}
                date={'Last Year'}
              />
            </div>
            <div className="row py-4">
              <div className="col-md-5 my-2">
                <div className="chart-container">
                  <span>Energy Meter</span>
                  <RadialBarChart noStd={75} energy={536} />
                </div>
              </div>



              <div className="col-md-7 my-2">
                <div className="chart-container">
                  {
                    user.role == "admin" ?
                      <>
                        {
                          productionPredict.dates.length > 0 && (
                            <>
                              <span>Production Prediction</span>
                              <PredictionChart predictionData={productionPredict.predictions} dates={productionPredict.dates} forcastPoint={productionPredict.forecast} />
                            </>
                          )
                        }
                      </>
                      :
                      <>
                        {
                          consumptionPredict.dates.length > 0 && (
                            <>
                              <span>Consumption Prediction</span>
                              <PredictionChart predictionData={consumptionPredict.predictions} dates={consumptionPredict.dates} forcastPoint={consumptionPredict.forecast} />
                            </>
                          )
                        }
                      </>
                  }

                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="chart-container">
                  {
                    user.role == "admin" ?
                      <>
                        {
                          last3monthsProduction.count.length > 0 && (
                            <>
                              <span>Last 3 Months Production</span>
                              <BarChart barData={last3monthsProduction} />
                            </>
                          )
                        }
                      </>
                      :
                      <>
                        {monthsConsumption.count.length > 0 && (
                          <>
                            <span>Last 3 Months Consumption</span>
                            <BarChart barData={monthsConsumption} />
                          </>
                        )
                        }
                      </>
                  }
                </div>
              </div>
              <div className="col-md-6 my-2">



                <div className="chart-container">
                  {
                    user.role == "admin" ?
                      <>
                        {
                          soldvsProduced.count.length > 0 && (
                            <>
                              <span>Energy Sold vs Produced</span>
                              <BarChart barData={soldvsproduced} />
                            </>
                          )
                        }
                      </>
                      :
                      <>
                        {
                          purchasedvsConsumed.count.length > 0 && (
                            <>
                              <span>Energy Purchased vs Consumed</span>
                              <BarChart barData={purchasedvsConsumed} />
                            </>
                          )
                        }
                      </>
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </div >
    </>
  );
}

export default AdminDashboard;
