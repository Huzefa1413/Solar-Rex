import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';

import LOGO from '../assets/logosolarrex.png';

import avatar from '../assets/avatar.jpg';

import MobSidebar from './MobSidebar';
import { PiGraduationCap, PiSignOutBold } from 'react-icons/pi';
import { useCookies } from 'react-cookie';

import { HiOutlineUserCircle } from 'react-icons/hi2';
import { MdOutlineLock } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import './components.css';
function Navbar() {
  const { user, Logout } = useAuth();

  const { hash } = useLocation();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState('');

  useEffect(() => {
    setShowForm(hash.split('#')[1] || 'instructions');
  }, [hash]);

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="nav-item navbar-brand nav_sidebar_toggle">
            <MobSidebar />
          </div>
          <div
            className={`${isMobile ? 'd-none' : 'd-block nav-item __heading'}`}
          >
            Solar-Rex
          </div>
          <div className={`${!isMobile ? 'd-none' : 'd-block nav-item logo'}`}>
            <img src={LOGO} alt="" />
          </div>
          <div class="nav-item form-inline">
            <div className="nav-item __account">
              <div className="account d-flex ai-center jc-end">
                <div className="img">
                  <img src={avatar} alt="" />
                </div>
                <div className="ml-2">
                  <h6 className={`${isMobile ? 'd-none' : 'd-block mb-0'}`}>
                    {user?.username}
                    {/* Huzefa Mustafa */}
                  </h6>
                </div>
              </div>

              <div className="profile_box">
                <div className="user_profile_info">
                  {/* <div className="mb-2"> */}
                  <Link to="/profile" className="link">
                    <HiOutlineUserCircle className="logOut_icon" />
                    Profile
                  </Link>
                  {/* </div> */}
                  {/* <div>
                    <Link to="/university-profile#password" className="link">
                      <MdOutlineLock className="logOut_icon" />
                      Password
                    </Link>
                  </div> */}
                </div>

                {/* <div className="user_profile_info">
                  <div className="mb-2">
                    <Link to="/profile" className="link">
                      <HiOutlineUserCircle className="logOut_icon" />
                      Profile
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link to="/profile#qualification" className="link">
                      <PiGraduationCap className="logOut_icon" />
                      Qualification
                    </Link>
                  </div>

                  <div>
                    <Link to="/profile#password" className="link">
                      <MdOutlineLock className="logOut_icon" />
                      Password
                    </Link>
                  </div>
                </div> */}

                <div className="logout_box">
                  <Link to="#" className="link" onClick={() => Logout()}>
                    <PiSignOutBold className="logOut_icon" />
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
