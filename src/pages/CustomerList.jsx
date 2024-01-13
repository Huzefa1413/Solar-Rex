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
function CustomerList() {
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
            <h2>Customer List</h2>
            <Table className="align-items-center " responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Account Number</th>
                  <th scope="col">View Profile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Huzefa Mustafa</td>
                  <td>0335-7235292</td>
                  <td>North Nazimabad, Karachi, Pakistan</td>
                  <td>132419432571197</td>
                  <td>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742438047"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." className="rounded-circle" src={Image} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742438047">
                      Huzefa Mustafa
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td>Saim Rafi</td>
                  <td>0335-2224192</td>
                  <td>North Nazimabad, Karachi, Pakistan</td>
                  <td>132419432571197</td>
                  <td>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742438043"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." className="rounded-circle" src={Image} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742438043">
                      Saim Rafi
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td>Hammad Ahmed</td>
                  <td>0335-3333333</td>
                  <td>Nazimabad, Karachi, Pakistan</td>
                  <td>132419432571197</td>
                  <td>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742433047"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." className="rounded-circle" src={Image} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742433047">
                      Hammad Ahmed
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td>Bilal Hamid</td>
                  <td>0335-2323232</td>
                  <td>Gulshan-e-Iqbal, Karachi, Pakistan</td>
                  <td>132419432571197</td>
                  <td>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip742438027"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img alt="..." className="rounded-circle" src={Image} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742438027">
                      Bilal Hamid
                    </UncontrolledTooltip>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
