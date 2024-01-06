import React from 'react'

function IconGroup() {
    return (
        <>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" >Active</button>
                    <button className="dropdown-item" >Unactive</button>
                </div>
            </div>
        </>
    )
}

export default IconGroup
