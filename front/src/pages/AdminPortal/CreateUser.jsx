import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useProSidebar } from 'react-pro-sidebar';
import CopyToClipboard from 'react-copy-to-clipboard';

import NavSidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { BiCopy, BiKey } from 'react-icons/bi';

import Input from '../../components/Form/Input';
import SelectNew from '../../components/Form/Select_New';

import Table from "../../components/Table/Table"
import Text from "../../components/Table/Text"
import { create_user, getPendingUser } from '../../ContextAPI/APIs/api';
import Tabs from '../../components/tabs';
import { UserTypes } from '../../helpers/data';
import { useToast } from "../../ContextAPI/Components/toast"
import { useConfirm } from '../../ContextAPI/Components/confirm';


function CreateUser() {



    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    return (
        <>



            <div className="d-flex">
                <div className="sidebar_div">
                    <NavSidebar collapseSidebar={collapseSidebar} toggleSidebar={toggleSidebar} collapsed={collapsed} toggled={toggled} broken={broken} rtl={rtl} />
                </div>
                <div className="page_div">
                    <Navbar collapseSidebar={collapseSidebar} toggleSidebar={toggleSidebar} collapsed={collapsed} toggled={toggled} broken={broken} rtl={rtl} />

                    <section className='create_user_section'>

                    </section>
                </div>
            </div>

        </>
    )
}


export default CreateUser