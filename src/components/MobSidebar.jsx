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
import { LiaUniversitySolid } from 'react-icons/lia';
import { FiChevronDown, FiUsers } from 'react-icons/fi';
import { MdAutorenew, MdOutlineLanguage } from 'react-icons/md';
import { PiSignInBold, PiSignOutBold, PiUserCirclePlus, PiStudent } from 'react-icons/pi';

import logo from "../assets/logo.png";
import logo2 from "../assets/logo-icon.png";
import germany_flag from "../assets/language icons/germany.png";
import england_flag from "../assets/language icons/united-kingdom.png";

import Collapse from 'react-bootstrap/Collapse';


function MobSidebar() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const { handlePathname, style } = usePathname();
    const [cookies, setCookie, removeCookie] = useCookies(["pk2"]);

    const [open, setOpen] = useState(false);

    function signout() {
        removeCookie("pk2")
        setUser(null)
    }


    return (
        <>
            {/* <img src={logo2} alt="logo" className='img-fluid me-1' style={{ width: "50px" }} /> */}
            <button className="btn nav_sidebar_toggle_btn px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <HiBars3 className='nav_sidebar_toggle_icon' />
            </button>

            <div className="offcanvas offcanvas-start mob_sidebar" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header d-flex ai-center">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        {/* <img src={logo} alt="logo" className='img-fluid' /> */}
                    </h5>
                    <button type="button" className="btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="offcanvas-body mob_sidebar_body">
                    <ul>
                        <>


                            <li className={`${style == "sign_in" ? "active" : "unactive"}`}>
                                <Link to="/sign-in" className={`${style == "sign_in" ? "activeLink" : "link"}`}>
                                    <div className='d-flex ai-center'>
                                        <PiSignInBold className='me-2 link_icon' />
                                        <p>Sign In</p>
                                    </div>
                                </Link>
                            </li>

                        </>
                        <>

                            <li className={`${style == "admin_dashboard" ? "active" : "unactive"}`}>
                                <Link to="/admin-dashboard" className={`${style == "admin_dashboard" ? "activeLink" : "link"}`}>
                                    <div className='d-flex ai-center'>
                                        <LuLayoutDashboard className='me-2 link_icon' />
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                            </li>

                        </>


                    </ul>

                    {/* <div className="mob_language_show">
                        <div className="btn-group dropup">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <MdOutlineLanguage className='language_icon' />
                            </button>
                            <ul className="dropdown-menu mob_language_box" style={{ background: "transparent" }}>
                                <li><div className='d-flex ai-center mb-2'>
                                    <img src={england_flag} alt="icon" className='img-fluid me-2' style={{ width: "16px" }} />
                                    <p>Eng</p>
                                </div>
                                </li>
                                <li>
                                    <div className='d-flex ai-center'>
                                        <img src={germany_flag} alt="icon" className='img-fluid me-2' style={{ width: "16px" }} />
                                        <p>Ger</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MobSidebar
