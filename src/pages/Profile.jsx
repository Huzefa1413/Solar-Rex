import React from 'react';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useProSidebar } from 'react-pro-sidebar';
import '../components/components.css';
import profilepic from '../assets/avatar.jpg';
const Profile = () => {
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
          <section className="container-fluid py-3 profile">
            {/* {
              user.role == "admin" ?
                <h1>Admin</h1>
                :
                <h1>User</h1>
            } */}

            <div className="welcome">
              <h2>Hello Admin</h2>
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
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h6>Contact Information</h6>
                        <div className="formdetails">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="">Address</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h6>About Me</h6>
                        <div className="formdetails">
                          <div className="form-group">
                            <label htmlFor="">About Me</label>
                            <textarea
                              placeholder="A few words about you ..."
                              rows="4"
                            >
                              A beautiful Dashboard for Bootstrap 4. It is Free
                              and Open Source.
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profilebox">
                    <div className="profileheader">
                      <img src={profilepic} alt="" />
                    </div>
                    <div className="profilebody">
                      <h3>
                        Huzefa Mustafa <span>22</span>
                      </h3>
                      <h6>Karachi, Pakistan</h6>
                      <h4>Solution Manager - Creative Tim Officer</h4>
                      <h5>University of Computer Science</h5>
                      <hr />
                      <p>
                        Ryan — the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music.
                      </p>
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
