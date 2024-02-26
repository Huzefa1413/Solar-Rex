import React, { useState } from 'react';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useProSidebar } from 'react-pro-sidebar';
import '../components/components.css';
import profilepic from '../assets/avatar.jpg';
import { useAuth } from '../ContextAPI/Components/auth';

const Profile = () => {
  const { user } = useAuth();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [apiData, setApiData] = useState({
    username: 'Huzefa',
    mobileNumber: '+9233342323431',
    email: 'huzefahafdihaifahiafjioafjafiojf@gmail.com',
    telephoneNumber: '-',
    address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
    postalCode: '75362',
    city: 'Karachi',
    country: 'Pakistan',
    profilePicture: null, // You can set an initial value for profile picture if needed}
  });

  const [formData, setFormData] = useState(apiData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
    setApiData(formData);
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
            {/* {
              user.role == "admin" ?
                <h1>Admin</h1>
                :
                <h1>User</h1>
            } */}

            <div className="welcome">
              <h2>Hello, {apiData.username}</h2>
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
                                  value={formData.username}
                                  onChange={handleInputChange}
                                  disabled={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input
                                  type="text"
                                  name="mobileNumber"
                                  value={formData.mobileNumber}
                                  onChange={handleInputChange}
                                  disabled={!isEditing}
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
                                  disabled={!isEditing}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Telephone Number</label>
                                <input
                                  type="text"
                                  name="telephoneNumber"
                                  value={formData.telephoneNumber}
                                  onChange={handleInputChange}
                                  disabled={!isEditing}
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
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  disabled={!isEditing}
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
                                  disabled={!isEditing}
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
                                  disabled={!isEditing}
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
                                  disabled={!isEditing}
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
                              value={formData.profilePicture}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <button
                        className={isEditing ? 'save' : 'edit'}
                        onClick={
                          isEditing
                            ? handleSaveButtonClick
                            : handleEditButtonClick
                        }
                      >
                        {isEditing ? 'Save' : 'Edit'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img src={apiData.profilepic} alt="" />
                    </div>
                    <div className="profilebody">
                      <h3>{apiData.username}</h3>
                      <h6>
                        {apiData.city}, {apiData.country}
                      </h6>
                      <h4>{apiData.email}</h4>
                      <h5>{apiData.mobileNumber}</h5>
                      <hr />
                      <p>{apiData.address}</p>
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
