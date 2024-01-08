import React from 'react'

function Badges(props) {
    return (
        <>
            <div className={`badges ${props.classes }`}>
                <span>{props.text}</span>
            </div>
        </>
    )
}

export default Badges
