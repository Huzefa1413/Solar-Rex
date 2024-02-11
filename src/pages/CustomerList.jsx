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
import { useState } from 'react';
import { get_all_users } from '../ContextAPI/APIs/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function CustomerList() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const navigate = useNavigate();
  const [data, setData] = useState([])

  const getAllUser = async () => {
    try {
      const response = await get_all_users()

      if (response.success) {
        setData(response.message)
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getAllUser()
  }, [])
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
                  <th scope="col">Email</th>
                  <th scope="col">Auto Purchase</th>
                  <th scope="col">View Profile</th>
                </tr>
              </thead>
              <tbody>

                {
                  data.length > 0 && data.map((item, i) => (

                    <tr>
                      <td>{item?.username}</td>
                      <td>{item?.phone}</td>
                      <td>{item?.email}</td>
                      <td>{item?.autopurchase ? "Yes" : "No"}</td>
                      <td>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          // id="tooltip742438047"
                          id={`tooltip742438047${i}`}
                          onClick={() => navigate(`/customer-profile/${item?._id}`)}
                        >
                          <img alt="..." className="rounded-circle" src={Image} />
                        </a>
                        <UncontrolledTooltip delay={0} target={`tooltip742438047${i}`}>
                          {item?.username}
                        </UncontrolledTooltip>
                      </td>
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

export default CustomerList;
