import React from 'react'

function Form(props) {
    return (
        <>
            <section className='main_form'>
                {/* <div className="card"> */}
                    {props.children}
                {/* </div> */}
            </section>
        </>
    )
}

export default Form
