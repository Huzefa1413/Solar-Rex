import React, { useEffect, useState,useCallback } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import { useNavigate } from 'react-router-dom';
import { useProSidebar } from 'react-pro-sidebar';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BarChart from '../components/Charts/BarChart';
import RadialBarChart from '../components/Charts/EnergyMeter';
import PredictionChart from '../components/Charts/PredictionChart';
import Card from '../components/StatsCard';
import Loader from '../components/Loader';
import {
  adminCards,
  last3monthsConsumption,
  consumptionPrediction,
  userCards,
  productionPrediction,
  last3months,
  last3monthsSoldvsProduced,
  lastMonthsPurchasedVsConsumed,
  energyMeter,
  energyMeterAdmin
} from '../ContextAPI/APIs/api';

function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.role !== 'admin' && !user.profileSetup) {
    navigate('/profile');
  }

  const [loading, setLoading] = useState(true);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [last3monthsProduction, setLast3monthsProduction] = useState({
    count: [],
    names: [],
  });
  const [monthsConsumption, setMonthsConsumption] = useState({
    count: [],
    names: [],
  });
  const [soldvsProduced, setSoldvsProduced] = useState({
    count: [],
    names: [],
  });
  const [purchasedvsConsumed, setPurchasedvsConsumed] = useState({
    count: [],
    names: [],
  });
  const [productionPredict, setProductionPrediction] = useState({
    predictions: [],
    dates: [],
    forecast: 0,
  });
  const [consumptionPredict, setConsumptionPrediction] = useState({
    predictions: [],
    dates: [],
    forecast: 0,
  });

  const [cardsData, setCardsData] = useState({});

  const getAllCardsData = useCallback(async () => {
    try {
      const response = await (user.role === 'admin'
        ? adminCards()
        : userCards(user._id));
      if (response.success) {
        setCardsData(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user.role, user._id]);

  const fetchLast3MonthsProduction = useCallback(async () => {
    try {
      const response = await last3months();
      if (response.count.length > 0 && response.names.length > 0) {
        const formattedCount = response.count.map((value) =>
          Number(value).toFixed(2)
        );
        setLast3monthsProduction({
          count: formattedCount,
          names: response.names,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchLast3MonthsConsumption = useCallback(async () => {
    try {
      const response = await last3monthsConsumption(user._id);
      if (response.count.length > 0 && response.names.length > 0) {
        const formattedCount = response.count.map((value) =>
          Number(value).toFixed(2)
        );
        setMonthsConsumption({
          count: formattedCount,
          names: response.names,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [user._id]);

  const fetchSoldVsProduced = useCallback(async () => {
    try {
      const response = await last3monthsSoldvsProduced();
      if (response.count.length > 0 && response.names.length > 0) {
        const formattedCount = response.count.map((value) =>
          Number(value).toFixed(2)
        );
        setSoldvsProduced({
          count: formattedCount,
          names: response.names,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchPurchasedVsConsumed = useCallback(async () => {
    try {
      const response = await lastMonthsPurchasedVsConsumed(user._id);
      if (response.count.length > 0 && response.names.length > 0) {
        const formattedCount = response.count.map((value) =>
          Number(value).toFixed(2)
        );
        setPurchasedvsConsumed({
          count: formattedCount,
          names: response.names,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [user._id]);

  const [energyMeterData, setEnergyMeterData] = useState({});

  const getEnergyMeterData = useCallback(async () => {
    try {
      const response = await energyMeter(user._id);
      console.log("responseOOOO",response);
      
      if (response.success) {
        setEnergyMeterData(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user._id]);

  const [energyMeterDataAdmin, setEnergyMeterDataAdmin] = useState({});

  const getEnergyMeterDataAdmin = useCallback(async () => {
    try {
      const response = await energyMeterAdmin();
      console.log("responseOOOO",response);
      
      if (response.success) {
        setEnergyMeterDataAdmin(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);



  const fetchProductionPredictionData = useCallback(async () => {
    try {
      const response = await productionPrediction();
      if (response.success && response.predictions.length > 0) {
        const formattedPredictions = response.predictions.map((value) =>
          Number(value).toFixed(2)
        );
        setProductionPrediction({
          predictions: formattedPredictions,
          dates: response.date,
          forecast: response.forecastPoint,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchConsumptionPredictionData = useCallback(async () => {
    try {
      const response = await consumptionPrediction(user._id);
      if (response.success && response.predictions.length > 0) {
        const formattedPredictions = response.predictions.map((value) =>
          Number(value).toFixed(2)
        );
        setConsumptionPrediction({
          predictions: formattedPredictions,
          dates: response.date,
          forecast: response.forecastPoint,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [user._id]);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        getAllCardsData(),
        user.role === 'admin'
          ? fetchLast3MonthsProduction()
          : fetchLast3MonthsConsumption(),
        user.role === 'admin'
          ? fetchSoldVsProduced()
          : fetchPurchasedVsConsumed(),
        user.role === 'admin'
          ? fetchProductionPredictionData()
          : fetchConsumptionPredictionData(),
          user.role === 'admin'
          ? getEnergyMeterDataAdmin()
          : getEnergyMeterData(),

        // user.role !== 'admin' && getEnergyMeterData(),
      ]);
      setLoading(false);
    };
    fetchData();
  }, [
    getAllCardsData,
    fetchLast3MonthsProduction,
    fetchLast3MonthsConsumption,
    fetchSoldVsProduced,
    fetchPurchasedVsConsumed,
    fetchProductionPredictionData,
    fetchConsumptionPredictionData,
    getEnergyMeterData,
    getEnergyMeterDataAdmin,
    user.role,
  ]);

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
          {loading ? (
            <Loader />
          ) : (
            <section className="container-fluid py-4 dashboard">
              <div className="row">
                {/* Cards */}
                <Card
                  title={`${
                    user.role === 'admin'
                      ? `Energy Produced Today`
                      : `Energy Consumed Today`
                  }`}
                  value={parseFloat(cardsData.dp).toFixed(2)}
                />
                <Card
                  title={`${
                    user.role === 'admin'
                      ? `Energy Produced This Week`
                      : `Energy Consumed This Week`
                  }`}
                  value={parseFloat(cardsData.wp).toFixed(2)}
                />
                <Card
                  title={`${
                    user.role === 'admin'
                      ? `Energy Produced This Month`
                      : `Energy Consumed This Month`
                  }`}
                  value={parseFloat(cardsData.mp).toFixed(2)}
                />
                <Card
                  title={`${
                    user.role === 'admin'
                      ? `Energy Produced This Year`
                      : `Energy Consumed This Year`
                  }`}
                  value={parseFloat(cardsData.yp).toFixed(2)}
                />
              </div>

              {/* Charts */}
              <div className="row py-4">
                {/* Energy Meter */}
                <div className="col-md-5 my-2">
                  <div className="chart-container">
                    {user.role === 'admin' ? (
                      <>
                      {energyMeterDataAdmin.current>=0  && (
                        <>
                          <span>Energy Meter</span>
                          <hr />
                          <p>
                            <b>Energy Left:</b>
                            <i>
                              {' '}
                              {(
                                energyMeterDataAdmin?.current
                              ).toFixed(2)}{' '}
                              kWh
                            </i>
                          </p>
                          <RadialBarChart
                            currentEnergy={(
                              (energyMeterDataAdmin?.current/energyMeterDataAdmin?.capacity)*100
                            ).toFixed(2)}
                          />
                        </>
                      )}
                    </>
                    ) : (
                      <>
                        {energyMeterData.current>=0  && (
                          <>
                            <span>Energy Meter</span>
                            <hr />
                            <p>
                              <b>Energy Left:</b>
                              <i>
                                {' '}
                                {(
                                  energyMeterData?.current
                                ).toFixed(2)}{' '}
                                kWh
                              </i>
                            </p>
                            <RadialBarChart
                              currentEnergy={(
                                (energyMeterData?.current/energyMeterData?.capacity)*100
                              ).toFixed(2)}
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Production/Consumption Charts */}
                <div className="col-md-7 my-2">
                  <div className="chart-container">
                    {user.role === 'admin' ? (
                      <>
                        {productionPredict.dates.length > 0 && (
                          <>
                            <span>This Month's Production</span>
                            <PredictionChart
                              predictionData={productionPredict.predictions}
                              dates={productionPredict.dates}
                              forecastPoint={productionPredict.forecast}
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
                {/* Other Charts */}
                <div className="col-md-6 my-2">
                  <div className="chart-container">
                    {user.role === 'admin' ? (
                      <>
                        {last3monthsProduction.count.length > 0 && (
                          <>
                            <span>Last 3 Months Production</span>
                            <BarChart barData={last3monthsProduction} />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {monthsConsumption.count.length > 0 && (
                          <>
                            <span>Last 3 Months Consumption</span>
                            <BarChart barData={monthsConsumption} />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="chart-container">
                    {user.role === 'admin' ? (
                      <>
                        {soldvsProduced.count.length > 0 && (
                          <>
                            <span>Energy Sold vs Produced</span>
                            <BarChart barData={soldvsProduced} />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {purchasedvsConsumed.count.length > 0 && (
                          <>
                            <span>Energy Purchased vs Consumed</span>
                            <BarChart barData={purchasedvsConsumed} />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
