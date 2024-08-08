import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { profilePicUrl } from '../helpers/data';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import {
  LuLayoutDashboard,
  LuUsers,
  LuActivity,
  LuZap,
  LuHeadphones,
} from 'react-icons/lu';
import logo from '../assets/logosolarrex.png';
import profile from '../assets/profile.svg';
function NavSidebar() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const isDashboardActive = pathname === '/dashboard';
  const isAdmin = user.role === 'admin';

  return (
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
        <Menu>
          <Link to="/dashboard" className="link">
            <MenuItem className="py-3 text-center" active={isDashboardActive}>
              <img
                src={logo}
                className="img-fluid"
                style={{ width: '150px' }}
              />
            </MenuItem>
          </Link>
          <hr />
          <Link to="/dashboard" className="link">
            <MenuItem
              className={`link_one ${
                isDashboardActive ? 'active' : 'unactive'
              }`}
              active={isDashboardActive}
              icon={<LuLayoutDashboard className="sidebar_icon" />}
            >
              Dashboard
            </MenuItem>
          </Link>
          {isAdmin && (
            <Link to="/customerlist" className="link">
              <MenuItem
                className={`link_one ${
                  pathname === '/customerlist' ? 'active' : 'unactive'
                }`}
                active={pathname === '/customerlist'}
                icon={<LuUsers className="sidebar_icon" />}
              >
                Customer List
              </MenuItem>
            </Link>
          )}
          <Link to="/transactiontable" className="link">
            <MenuItem
              className={`link_one ${
                pathname === '/transactiontable' ? 'active' : 'unactive'
              }`}
              active={pathname === '/transactiontable'}
              icon={<LuActivity className="sidebar_icon" />}
            >
              Transaction table
            </MenuItem>
          </Link>
          {user.role === 'user' && (
            <>
              <Link to="/support" className="link">
                <MenuItem
                  className={`link_one ${
                    pathname === '/support' ? 'active' : 'unactive'
                  }`}
                  active={pathname === '/support'}
                  icon={<LuHeadphones className="sidebar_icon" />}
                >
                  Customer Support
                </MenuItem>
              </Link>
              <Link to="/buyenergy" className="link">
                <MenuItem
                  className={`link_one ${
                    pathname === '/buyenergy' ? 'active' : 'unactive'
                  }`}
                  active={pathname === '/buyenergy'}
                  icon={<LuZap className="sidebar_icon" />}
                >
                  Energy
                </MenuItem>
              </Link>
            </>
          )}
          <hr />
          <Link to="/profile" className="link">
            <MenuItem
              className={`link_one ${
                pathname === '/profile' ? 'active' : 'unactive'
              }`}
              active={pathname === '/profile'}
              icon={
                <img
                  className="sidebar_icon"
                  src={
                    user.profilepic
                      ? `${profilePicUrl}/${user.profilepic}`
                      : profile
                  }
                  alt=""
                  style={{
                    width: '36px',
                    height: '36px',
                    marginTop: '6px',
                    borderRadius: '50px',
                  }}
                />
              }
            >
              {user?.username}
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default NavSidebar;
