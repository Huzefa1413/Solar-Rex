import React, { useState } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import { update_profile } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import { profilePicUrl } from '../helpers/data';
import Upload_Profile_Pic from '../ContextAPI/Components/Upload_Profile_Pic';
import Navbar from '../components/Navbar';
import NavSidebar from '../components/Sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import '../components/components.css';

const Profile = () => {
  const { user, GetLoginUser } = useAuth();
  const { alert } = useToast();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [formData, setFormData] = useState({
    username: user.username || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
    city: user.city || '',
    country: user.country || '',
    inverterId: user.inverterId || '',
    postalCode: user.postalCode || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveButtonClick = async () => {
    try {
      const response = await update_profile(formData);
      alert(response.message, response.success);
      if (response.success) {
        GetLoginUser();
      }
    } catch (e) {
      console.error(e);
    }
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
          <section className="container-fluid py-3 profile">
            <div className="welcome">
              <h2>Hello, {user.username}</h2>
              {!user.profileSetup ? (
                <p>Please Setup Your Profile to proceed.</p>
              ) : (
                <p>This is your profile page. You can see your details here.</p>
              )}
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
                                  value={formData.username}
                                  onChange={handleInputChange}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input
                                  type="text"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
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
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        {user.role !== 'admin' && (
                          <>
                            <h6>Inverter Details</h6>
                            <div className="formdetails">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="">Inverter ID</label>
                                    <input
                                      type="text"
                                      name="inverterId"
                                      value={formData.inverterId}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </>
                        )}
                        <h6>Address Details</h6>
                        <div className="formdetails">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="">Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
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
                                  value={formData.postalCode}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">City</label>
                                <input
                                  type="text"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Country</label>
                                <input
                                  type="text"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="formdetails">
                          <h6>Profile Picture</h6>
                          <Upload_Profile_Pic />
                        </div>
                      </div>
                      <hr />
                      <button
                        className={'save'}
                        onClick={handleSaveButtonClick}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img
                        src={`${profilePicUrl}/${user.profilepic}`}
                        alt="User Avatar"
                      />
                    </div>
                    <div className="profilebody">
                      <h3>{user.username}</h3>
                      <h6>
                        {user.city} {user.country}
                      </h6>
                      <h4>{user.email}</h4>
                      <h5>{user.phone}</h5>
                      <hr />
                      <p>{user.address}</p>
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

export default Profile;
