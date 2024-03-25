import React from 'react';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useProSidebar } from 'react-pro-sidebar';
import '../components/components.css';
import profilepic from '../assets/avatar.jpg';
import { useAuth } from '../ContextAPI/Components/auth';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getCustProfile } from '../ContextAPI/APIs/api';
import { useEffect } from 'react';
const CustProfile = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();



  const [cust, setCust] = useState({})


  const fetchAlldata = async () => {
    try {

      const response = await getCustProfile(id)

      if (response.message !== null) {
        setCust(response.message)
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    fetchAlldata()
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
          <section className="container-fluid py-3 profile">
            {/* {
            user.role == "admin" ?
              <h1>Admin</h1>
              :
              <h1>User</h1>
          } */}

            <div className="welcome">
              <h2>Hello, {cust.username}</h2>
              <p>This is your profile page. You can see your details here.</p>
            </div>
            <div className="container-fluid">
              <div className="row" style={{ flexWrap: 'wrap-reverse' }}>
                <div className="col-xl-8">
                  <div className="detailsbox">
                    <div className="boxheader">
                      <h3>My account</h3>
                    </div>
                    <div className="boxbody">
                      <div>
                        <h6>User Information</h6>
                        <div className="formdetails">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name="username"
                                  value={cust.username}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input
                                  type="text"
                                  name="mobileNumber"
                                  value={cust.phone}

                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input
                                  type="text"
                                  name="email"
                                  value={cust.email}

                                  disabled
                                />
                              </div>
                            </div>

                          </div>
                        </div>
                        <hr />
                        <h6>Address Details</h6>
                        <div className="formdetails">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="">Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  value={cust.address}

                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Postal Code</label>
                                <input
                                  type="text"
                                  name="postalCode"
                                  value={cust.postalCode}

                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">City</label>
                                <input
                                  type="text"
                                  name="city"
                                  value={cust.city}

                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Country</label>
                                <input
                                  type="text"
                                  name="country"
                                  value={cust.country}

                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h6>Profile Picture</h6>
                        <div className="formdetails">
                          <div className="form-group">
                            <label htmlFor="">Profile Picture</label>
                            <input
                              type="file"
                              accept="image/*"
                              name="profilePicture"
                              value={cust.profilePicture}

                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img src={profilepic} alt="" />
                    </div>
                    <div className="profilebody">
                      <h3>{cust.username}</h3>
                      <h6>
                        {cust.city}  {cust.country}
                      </h6>
                      <h4>{cust.email}</h4>
                      <h5>{cust.mobileNumber}</h5>
                      <hr />
                      <p>{cust.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>

  );
};

export default CustProfile;
