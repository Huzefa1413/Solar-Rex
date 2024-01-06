import React from 'react'

function Select(props) {

    function replacing(text) {
        return (text?.replace(/ /g, "_")).toLowerCase()
    }


    return (
        <>
            <label className='form-label'>{props?.label}</label>
            <select className="form-select text-capital" aria-label="Default select example" disabled={props.disabled || false} value={props?.value} onChange={props?.onChange} required={props.required || false} {...props}>
                <option className="text-capital" value="" selected disabled>{props?.selectText}</option>
                {
                    (props?.options)?.length > 0 && (props?.options).map((opt, i) => {
                        return <option className="text-capital" key={i} value={replacing(opt)}>{opt}</option>
                    })
                }
                {
                    (props?.optionsJson)?.length > 0 && (props?.optionsJson).map((opt, i) => {
                        return <option className="text-capital" key={i} value={replacing(opt._id)}>{opt[props.optionKey]}</option>
                    })

                }


            </select>
        </>
    )
}


export default Select