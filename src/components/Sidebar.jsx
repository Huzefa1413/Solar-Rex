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
import { LuUsers } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';
import { LuZap } from 'react-icons/lu';
import { LiaUniversitySolid } from 'react-icons/lia';
import { MdAutorenew } from 'react-icons/md';
import { PiSignInBold, PiStudent, PiUserCirclePlus } from 'react-icons/pi';
import avatar from '../assets/avatar.jpg';
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
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
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
            <Link to="/dashboard" className="link">
              <MenuItem className="py-3 text-center">
                <img
                  src={logo}
                  className="img-fluid"
                  style={{ width: '150px' }}
                />
              </MenuItem>
            </Link>
            <Link>
              <hr />
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
            {user.role === 'admin' && (
              <Link to="/customerlist" className="link">
                <MenuItem
                  className={`${
                    style === 'customerlist' ? 'active' : 'unactive'
                  } ${
                    collapsed === true ? 'd-flex jc-center' : ''
                  } mt-2 link_one `}
                  icon={
                    <LuUsers
                      className={`${
                        style === 'customerlist'
                          ? 'active_sidebar_icon'
                          : 'sidebar_icon'
                      }`}
                    />
                  }
                >
                  <Link
                    to="/customerlist"
                    className={`mx-1 my-1 ${
                      style === 'customerlist' ? 'activeLink' : 'link'
                    } ${collapsed === true ? 'd-none' : 'd-block'}`}
                    style={{ width: 'maxContent' }}
                  >
                    {' '}
                    Customer List{' '}
                  </Link>
                </MenuItem>
              </Link>
            )}
            <Link to="/transactiontable" className="link">
              <MenuItem
                className={`${
                  style === 'transactiontable' ? 'active' : 'unactive'
                } ${
                  collapsed === true ? 'd-flex jc-center' : ''
                } mt-2 link_one `}
                icon={
                  <LuActivity
                    className={`${
                      style === 'transactiontable'
                        ? 'active_sidebar_icon'
                        : 'sidebar_icon'
                    }`}
                  />
                }
              >
                <Link
                  to="/transactiontable"
                  className={`mx-1 my-1 ${
                    style === 'transactiontable' ? 'activeLink' : 'link'
                  } ${collapsed === true ? 'd-none' : 'd-block'}`}
                  style={{ width: 'maxContent' }}
                >
                  {' '}
                  Transaction table{' '}
                </Link>
              </MenuItem>
            </Link>
            {user.role === 'user' && (
              <Link to="/buyenergy" className="link">
                <MenuItem
                  className={`${
                    style === 'buyenergy' ? 'active' : 'unactive'
                  } ${
                    collapsed === true ? 'd-flex jc-center' : ''
                  } mt-2 link_one `}
                  icon={
                    <LuZap
                      className={`${
                        style === 'buyenergy'
                          ? 'active_sidebar_icon'
                          : 'sidebar_icon'
                      }`}
                    />
                  }
                >
                  <Link
                    to="/buyenergy"
                    className={`mx-1 my-1 ${
                      style === 'buyenergy' ? 'activeLink' : 'link'
                    } ${collapsed === true ? 'd-none' : 'd-block'}`}
                    style={{ width: 'maxContent' }}
                  >
                    {' '}
                    Energy{' '}
                  </Link>
                </MenuItem>
              </Link>
            )}
            <Link>
              <hr />
            </Link>

            <Link to="/profile" className="link">
              <MenuItem
                className={`${style === 'profile' ? 'active' : 'unactive'} ${
                  collapsed === true ? 'd-flex jc-center' : ''
                } mt-2 link_one `}
                icon={
                  <img
                    className={`${
                      style === 'profile'
                        ? 'active_sidebar_icon'
                        : 'sidebar_icon'
                    }`}
                    src={avatar}
                    alt=""
                    style={{
                      width: '36px',
                      borderRadius: '50px',
                    }}
                  />
                }
              >
                <Link
                  to="/profile"
                  className={`mx-1 my-1 ${
                    style === 'profile' ? 'activeLink' : 'link'
                  } ${collapsed === true ? 'd-none' : 'd-block'}`}
                  style={{ width: 'maxContent' }}
                >
                  {user?.username}
                </Link>
              </MenuItem>
            </Link>
            <Link>
              <hr />
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default NavSidebar;
