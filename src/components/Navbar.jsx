import { Link } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { profilePicUrl } from '../helpers/data';
import LOGO from '../assets/logosolarrex.png';
import profile from '../assets/profile.svg';
import MobSidebar from './MobSidebar';
import { PiSignOutBold } from 'react-icons/pi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';
import './components.css';

function Navbar() {
  const { user, Logout } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nav-item navbar-brand nav_sidebar_toggle">
          <MobSidebar />
        </div>
        <div
          className={`${isMobile ? 'd-none' : 'd-block nav-item __heading'}`}
        >
          Solar-Rex
        </div>
        <div className={`${!isMobile ? 'd-none' : 'd-block nav-item logo'}`}>
          <img src={LOGO} alt="Solar-Rex Logo" />
        </div>
        <div className="nav-item form-inline">
          <div className="nav-item __account">
            <div className="account d-flex ai-center jc-end">
              <div className="img">
                <img
                  alt="Profile"
                  src={
                    user.profilepic
                      ? `${profilePicUrl}/${user.profilepic}`
                      : profile
                  }
                />
              </div>
              <div className="ml-2">
                <h6 className={`${isMobile ? 'd-none' : 'd-block mb-0'}`}>
                  {user?.username}
                </h6>
              </div>
            </div>
            <div className="profile_box">
              <div className="user_profile_info">
                <Link to="/profile" className="link">
                  <HiOutlineUserCircle className="logOut_icon" />
                  Profile
                </Link>
              </div>
              <div className="logout_box">
                <Link to="/" className="link" onClick={() => Logout()}>
                  <PiSignOutBold className="logOut_icon" />
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
