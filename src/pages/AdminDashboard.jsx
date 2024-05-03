import React, { useEffect, useState } from 'react';
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

  const getAllCardsData = async () => {
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
  };

  const fetchLast3MonthsProduction = async () => {
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
  };

  const fetchLast3MonthsConsumption = async () => {
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
  };

  const fetchSoldVsProduced = async () => {
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
  };

  const fetchPurchasedVsConsumed = async () => {
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
  };

  const fetchProductionPredictionData = async () => {
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
  };

  const fetchConsumptionPredictionData = async () => {
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
  };

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
      ]);
      setLoading(false);
    };

    fetchData();
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
                        {soldvsProduced.count.length > 0 && (
                          <>
                            <span>Energy Meter</span>
                            <RadialBarChart
                              currentEnergy={(
                                100 -
                                (soldvsProduced.count[0] /
                                  soldvsProduced.count[1]) *
                                  100
                              ).toFixed(2)}
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {purchasedvsConsumed.count.length > 0 && (
                          <>
                            <span>Energy Meter</span>
                            <RadialBarChart
                              currentEnergy={(
                                100 -
                                (purchasedvsConsumed.count[1] /
                                  purchasedvsConsumed.count[0]) *
                                  100
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
