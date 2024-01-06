import React from 'react'


function Radio(props) {
    return (
        <>
            <label className='form-label'>{props.label}</label>
            <div className='d-flex'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault55" checked />
                    <label className="form-check-label me-5" for="flexRadioDefault55">{props.optOne}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault66" />
                    <label className="form-check-label" for="flexRadioDefault66">{props.optTwo}</label>
                </div>
            </div>
        </>
    )
}


export default Radio