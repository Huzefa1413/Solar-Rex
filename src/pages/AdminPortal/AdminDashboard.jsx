import React, { useEffect, useState } from 'react';
import { useAuth } from '../../ContextAPI/Components/auth';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import moment from 'moment';

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

          <section className="">
            <h1>Admin DASHBOARD</h1>
            <Card />
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
