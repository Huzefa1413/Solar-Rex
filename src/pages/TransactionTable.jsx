import React, { useState } from 'react';
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
import { get_transactions } from '../ContextAPI/APIs/api';
import { useEffect } from 'react';
function TransactionTable() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();




  const [tx, setTX] = useState([])


  const getTX = async () => {
    try {
      const response = await get_transactions()
      setTX(response.message)
    }
    catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getTX()
  }, [])


  function convertTimestampToDateTime(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var hours = date.getHours();
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);
    var meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours) as 12 AM
    var dateTimeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + " " + meridiem;
    return dateTimeString;
  }


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
                  <th scope="col">Buyer</th>
                  <th scope="col">Seller</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  tx.length > 0 && tx.map((item, i) => (
                    <tr>
                      <td>{item?.buyerid.username}</td>
                      <td>{item?.sellerid.username}</td>
                      <td>{item?.price}</td>
                      <td>{item?.quantity}</td>
                      <td>{convertTimestampToDateTime(item?.timestamp)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </>
  );
}

export default TransactionTable;
