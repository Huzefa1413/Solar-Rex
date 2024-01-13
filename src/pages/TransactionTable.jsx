import React from 'react';
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from 'reactstrap';

import '../components/components.css';
import Image from '../assets/avatar.jpg';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from 'react-pro-sidebar';
function TransactionTable() {
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
          <section className="container-fluid py-3">
            <h2>Transactions</h2>
            <Table className="align-items-center " responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Huzefa Mustafa</td>
                  <td>huzefamustafa@gmail.com</td>
                  <td>2000 Rs</td>
                  <td>132419432571197</td>
                </tr>
                <tr>
                  <td>Saim Rafi</td>
                  <td>saim@gmail.com</td>
                  <td>1000 Rs</td>
                  <td>132419432571197</td>
                </tr>
                <tr>
                  <td>Huzefa Mustafa</td>
                  <td>huzefamustafa@gmail.com</td>
                  <td>2000 Rs</td>
                  <td>132419432571197</td>
                </tr>
                <tr>
                  <td>Saim Rafi</td>
                  <td>saim@gmail.com</td>
                  <td>1000 Rs</td>
                  <td>132419432571197</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </>
  );
}

export default TransactionTable;
