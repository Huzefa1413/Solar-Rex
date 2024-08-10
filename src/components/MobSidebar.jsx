import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { profilePicUrl } from '../helpers/data';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import {
  LuLayoutDashboard,
  LuUsers,
  LuActivity,
  LuZap,
  LuHeadphones,
} from 'react-icons/lu';
import logo from '../assets/logosolarrex.png';
import profile from '../assets/profile.svg';

function MobSidebar() {
  const location = useLocation();
  const { user } = useAuth();
  const pathname = location.pathname;

  return (
    <>
      <button
        className="btn nav_sidebar_toggle_btn px-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <HiBars3 className="nav_sidebar_toggle_icon" />
      </button>

      <div
        className="offcanvas offcanvas-start mob_sidebar"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header d-flex ai-center">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <img
              src={logo}
              className="img-fluid"
              style={{ width: '200px' }}
              alt="Logo"
            />
          </h5>
          <button
            type="button"
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="offcanvas-body mob_sidebar_body">
          <Sidebar
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
              <hr />

              <Link to="/dashboard" className="link">
                <MenuItem
                  className={`link_one ${
                    pathname === '/dashboard' ? 'active' : 'unactive'
                  }`}
                  active={pathname === '/dashboard'}
                  icon={<LuLayoutDashboard className="sidebar_icon" />}
                >
                  Dashboard
                </MenuItem>
              </Link>
              {user.role === 'admin' && (
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
                  <Link to="/buyenergy" className="link">
                    <MenuItem
                      className={`link_one ${
                        pathname === '/buyenergy' ? 'active' : 'unactive'
                      }`}
                      active={pathname === '/buyenergy'}
                      icon={<LuZap className="sidebar_icon" />}
                    >
                      Buy Energy
                    </MenuItem>
                  </Link>
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
      </div>
    </>
  );
}

export default MobSidebar;
