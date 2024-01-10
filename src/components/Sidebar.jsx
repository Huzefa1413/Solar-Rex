import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../ContextAPI/Components/auth';
import { usePathname } from '../ContextAPI/Components/PathnameContext';

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from 'react-pro-sidebar';

import { BsBook } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiBars3 } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { FaWpforms } from 'react-icons/fa';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LiaUniversitySolid } from 'react-icons/lia';
import { MdAutorenew } from 'react-icons/md';
import { PiSignInBold, PiStudent, PiUserCirclePlus } from 'react-icons/pi';

import logo from '../assets/logosolarrex.png';
import logo2 from '../assets/logo-icon.png';
import DarkMode from './Darkmode';

function NavSidebar({
  collapseSidebar,
  toggleSidebar,
  collapsed,
  toggled,
  broken,
  rtl,
}) {
  const { user } = useAuth();

  const { pathname: currentPath } = useLocation();

  const { style } = usePathname();

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      <div className="sidebar_main">
        <Sidebar
          defaultCollapsed={isTablet ? true : false}
          id="sideBar"
          className="navsidebar"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              padding: '10px',
              width: '100%',
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? '#f5d9ff' : '#d359ff',
                    backgroundColor: active ? '#eecef9' : undefined,
                    paddingRight: '5px',
                    paddingLeft: '5px',
                  };
              },
            }}
          >
            {/* <MenuItem className="py-3 sidebar_toggle">
              <div className="d-flex jc-between ai-center">
                {collapsed ? (
                  <Link to="/" className="activeLink1 hash-tag text-truncate">
                    <img
                      src={logo}
                      alt="logo"
                      className="img-fluid"
                      style={{ width: '40px' }}
                    />
                  </Link>
                ) : (
                  <> */}
            {/* <Link to={`${(user.role === "admin" && "/admin-dashboard") || (user.role === "student" && "/dashboard") || (user.role === "university" && "/university-dashboard")}`} className="activeLink1 hash-tag text-truncate" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                                <img src={logo} alt="logo" className='img-fluid' />
                                            </Link> */}
            {/* </>
                )} */}
            {/* <main className="oo78uijk">
                                    {
                                        isSmallMobile ?
                                            <button className="btn btnFocus" onClick={() => { collapseSidebar(); console.log("collapsed", collapsed); newfunction() }}><HiBars3 className="mr-1" style={{ color: "#b1bad3", fontSize: "25px" }} /></button>
                                            :
                                            <button className="btn btnFocus" onClick={() => { collapseSidebar(); console.log("collapsed", collapsed) }}><HiBars3 className="mr-1" style={{ color: "#b1bad3", fontSize: "25px" }} /></button>
                                    }
                                </main> */}
            {/* </div>
            </MenuItem> */}

            <Link to="/" className="link">
              <MenuItem className="py-3 text-center">
                <img
                  src={logo}
                  className="img-fluid"
                  style={{ width: '150px' }}
                />
              </MenuItem>
            </Link>

            <Link to="/sign-in" className="link">
              <MenuItem
                className={`${style === 'sign_in' ? 'active' : 'unactive'} ${
                  collapsed === true ? 'd-flex jc-center' : ''
                }`}
                icon={
                  <PiSignInBold
                    className={`${
                      style === 'sign_in'
                        ? 'active_sidebar_icon'
                        : 'sidebar_icon'
                    }`}
                  />
                }
              >
                <Link
                  to="/sign-in"
                  className={`mx-1 my-1 ${
                    style === 'sign_in' ? 'activeLink' : 'link'
                  } ${collapsed === true ? 'd-none' : 'd-block'}`}
                  style={{ width: 'maxContent' }}
                >
                  {' '}
                  Sign In{' '}
                </Link>
              </MenuItem>
            </Link>

            <Link to="/dashboard" className="link">
              <MenuItem
                className={`${style === 'dashboard' ? 'active' : 'unactive'} ${
                  collapsed === true ? 'd-flex jc-center' : ''
                } mt-2 link_one `}
                icon={
                  <LuLayoutDashboard
                    className={`${
                      style === 'admin_dashboard'
                        ? 'active_sidebar_icon'
                        : 'sidebar_icon'
                    }`}
                  />
                }
              >
                <Link
                  to="/dashboard"
                  className={`mx-1 my-1 ${
                    style === 'admin_dashboard' ? 'activeLink' : 'link'
                  } ${collapsed === true ? 'd-none' : 'd-block'}`}
                  style={{ width: 'maxContent' }}
                >
                  {' '}
                  Dashboard{' '}
                </Link>
              </MenuItem>
            </Link>
          </Menu>

          {/* <div className={`mt-5 d-flex jc-center ${collapsed === true ? 'd-none' : 'd-block'} ${collapsed === true ? 'd-flex jc-center' : ''} theme_switcher`}>
                        <DarkMode />
                    </div> */}
        </Sidebar>
      </div>
    </>
  );
}

export default NavSidebar;
