import React, { useEffect, useState } from 'react';
import { useAuth } from '../../ContextAPI/Components/auth';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import BarChart from '../../components/Charts/Charts.Students/BarChart';
import RadialBarChart from '../../components/Charts/Charts.Students/RadialBarChart';
import PredictionLineChart from '../../components/Charts/PredictionChart';

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

function AdminDashboard() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const soldvsproduced = {
    count: [2200, 2500],
    names: ['Sold', 'Produced'],
  };
  const lastmonths = {
    count: [100, 110, 90],
    names: ['October', 'November', 'December'],
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

          <section className="container-fluid py-3">
            <div className="row">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="row py-3 px-2">
              <div>
                Energy Meter
                <RadialBarChart noStd={75} />
              </div>
              <div>
                Last 3 Months Production
                <BarChart barData={lastmonths} />
              </div>
              <div>
                Production Prediction
                <PredictionLineChart predictions={[100, 120, 100, 90, 130]} />
              </div>
              <div>
                Energy Sold vs Produced
                <BarChart barData={soldvsproduced} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
