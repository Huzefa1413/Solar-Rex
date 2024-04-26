import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from '../ContextAPI/Components/auth';
import { usePathname } from '../ContextAPI/Components/PathnameContext';

import { BsBook } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { FaWpforms } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';
import { LuZap } from 'react-icons/lu';
import { LiaUniversitySolid } from 'react-icons/lia';
import { FiChevronDown, FiUsers } from 'react-icons/fi';
import { MdAutorenew, MdOutlineLanguage } from 'react-icons/md';
import {
  PiSignInBold,
  PiSignOutBold,
  PiUserCirclePlus,
  PiStudent,
} from 'react-icons/pi';

import logo from '../assets/logosolarrex.png';
import logo2 from '../assets/logo-icon.png';
import germany_flag from '../assets/language icons/germany.png';
import england_flag from '../assets/language icons/united-kingdom.png';
import avatar from '../assets/avatar.jpg';

import Collapse from 'react-bootstrap/Collapse';

function MobSidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { handlePathname, style } = usePathname();
  const [cookies, setCookie, removeCookie] = useCookies(['pk2']);

  const [open, setOpen] = useState(false);

  function signout() {
    removeCookie('pk2');
    // setUser(null);
  }

  return (
    <>
      {/* <img src={logo2} alt="logo" className='img-fluid me-1' style={{ width: "50px" }} /> */}
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
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header d-flex ai-center">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {/* <img src={logo} alt="logo" className='img-fluid' /> */}
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
          <ul>
            <li className="py-3">
              <img
                src={logo}
                className="img-fluid"
                style={{ width: '150px' }}
              />
            </li>
            <Link>
              <hr />
            </Link>
            <li
              className={`${
                style == 'admin_dashboard' ? 'active' : 'unactive'
              }`}
            >
              <Link
                to="/dashboard"
                className={`${
                  style == 'admin_dashboard' ? 'activeLink' : 'link'
                }`}
              >
                <div className="d-flex ai-center">
                  <LuLayoutDashboard className="me-2 link_icon" />
                  <p>Dashboard</p>
                </div>
              </Link>
            </li>

            {user.role === 'admin' && (
              <li
                className={`${style == 'customerlist' ? 'active' : 'unactive'}`}
              >
                <Link
                  to="/customerlist"
                  className={`${
                    style == 'customerlist' ? 'activeLink' : 'link'
                  }`}
                >
                  <div className="d-flex ai-center">
                    <LuUsers className="me-2 link_icon" />
                    <p>Customer List</p>
                  </div>
                </Link>
              </li>
            )}

            <li
              className={`${
                style == 'transactiontable' ? 'active' : 'unactive'
              }`}
            >
              <Link
                to="/transactiontable"
                className={`${
                  style == 'transactiontable' ? 'activeLink' : 'link'
                }`}
              >
                <div className="d-flex ai-center">
                  <LuActivity className="me-2 link_icon" />
                  <p>Transaction Table</p>
                </div>
              </Link>
            </li>
            {user.role === 'user' && (
              <li className={`${style == 'buyenergy' ? 'active' : 'unactive'}`}>
                <Link
                  to="/buyenergy"
                  className={`${style == 'buyenergy' ? 'activeLink' : 'link'}`}
                >
                  <div className="d-flex ai-center">
                    <LuZap className="me-2 link_icon" />
                    <p>Energy</p>
                  </div>
                </Link>
              </li>
            )}
            <Link>
              <hr />
            </Link>
            <li className={`${style == 'profile' ? 'active' : 'unactive'}`}>
              <Link
                to="/profile"
                className={`${style == 'profile' ? 'activeLink' : 'link'}`}
              >
                <div className="d-flex ai-center">
                  <img
                    className="me-2 link_icon"
                    src={avatar}
                    alt=""
                    style={{
                      width: '36px',
                      marginTop: '6px',
                      borderRadius: '50px',
                    }}
                  />
                  <p>{user?.username}</p>
                </div>
              </Link>
            </li>

            <Link>
              <hr />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobSidebar;
