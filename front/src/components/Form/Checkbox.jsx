import React from 'react'

function Checkbox(props) {
    return (
        <>
            <div className='d-flex'>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label me-5" for="flexCheckDefault">{props.optOne}</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">{props.optTwo}</label>
                </div>
            </div>
        </>
    )
}

export default Checkbox
