import React, { useState, useEffect } from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { profilePicUrl } from '../helpers/data';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { get_all_users } from '../ContextAPI/APIs/api';
import profile from '../assets/profile.svg';

function CustomerList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await get_all_users();
        if (response.success) {
          setData(response.message);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getAllUser();
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="sidebar_div">
          <NavSidebar />
        </div>
        <div className="page_div">
          <Navbar />
          <section className="container-fluid py-3">
            <h2>Customer List</h2>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">View Profile</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <a
                        className="avatar avatar-sm"
                        href="#"
                        id={`tooltip-${item._id}`}
                        onClick={() =>
                          navigate(`/customer-profile/${item._id}`)
                        }
                      >
                        <img
                          alt="Profile"
                          className="rounded-circle"
                          src={
                            item.profilepic
                              ? `${profilePicUrl}/${item.profilepic}`
                              : profile
                          }
                        />
                      </a>
                      <UncontrolledTooltip
                        delay={0}
                        target={`tooltip-${item._id}`}
                      >
                        {item.username}
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
