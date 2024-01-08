import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';


function Tabs(props) {
    const { hash } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            {/* <!-- Tab Cool --> */}
            <ul className="nav nav-tabs nav-cool mb-4" id="pills-tab" role="tablist">
                {
                    props.tabLinks.length > 0 && props.tabLinks.map((item, i) => {
                        return <>
                            <li key={i} className="nav-item" onClick={() => navigate(item.pathName)}>
                                <Link className={`nav-link ${hash == item.pathName ? "active" : "unactive"}`} to={item.pathName} data-bs-toggle="tab" role="tab">{item.tabName}</Link>
                            </li>
                        </>
                    })
                }
            </ul>

        </>
    )
}

export default Tabs
