import React from 'react'
import TooltipComponent from '../tooltip';
import { MdInfoOutline } from 'react-icons/md';

/**
 * 
 * props label == false(boolean) 
 *    => then label will no show 
 *  
 */


function Input(props) {
    return (
        <>
            {
                (props.label != false && typeof props.label != "boolean") &&
                <>
                    <div className='d-flex'>
                        <label className='form-label'>{props.label}</label>
                        {
                            props.tooltip == true &&
                            <TooltipComponent className="" placement="top" tooltipText={props.tooltipText}>
                                <div><MdInfoOutline className='hint-icon mb-2 ml-1' /></div>
                            </TooltipComponent>
                        }
                    </div>
                </>
            }
            <input
                {...props}
                type={props.inputType}
                value={props.value}
                onChange={props.onChange}
                className='form-control'
                placeholder={props.placeholder || 'Enter here'}
                disabled={props.disabled || false}
                required={props.required || false}
            />
        </>
    )
}


export default Input;