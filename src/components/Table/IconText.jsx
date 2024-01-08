import React from 'react'
import TooltipComponent from "../../components/tooltip"


function IconText(props) {
    return (
        <>
            <div className='d-flex ai-center'>
                <div className='image'>
                    {
                        props.img &&
                        <img src={props.img} alt="image" className='img-fluid' />
                    }
                    {
                        props.icon &&
                        // <TooltipComponent className="" placement="top" tooltipText="View Profile">
                            <div>{props.icon}</div>
                        // </TooltipComponent>
                    }
                </div>
                <div className='ml-2'>
                    <span className='hash-tag text-truncate text-capital'>{props.text}</span> <br />
                    <small className='hash-tag text-truncate'>{props.smallText}</small>
                </div>
            </div>
        </>
    )
}

export default IconText
