import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import LOGO from "../assets/logo.png"
import { forget_password } from '../ContextAPI/APIs/api'
import { useToast } from '../ContextAPI/Components/toast'


function ForgotPassword() {

    const { alert } = useToast();
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: ""
    })

    const hnadleEmail = (e) => {
        setData({ ...data, email: e.target.value })
    }

    const forget = async (e) => {
        try {
            const payload = {
                email: data.email
            }

            console.log("DDD", payload);
            // return
            // const response = await forget_password(payload)
            // alert(response.message)
            // if (response.success) {
            //     navigate(`/reset-password/${response?.newtoken}`)
            // }
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <>


            <section className='authentication_section forgot_pass_page d-flex ai-center'>
                <div className="container">
                    <div className="card">
                        {/* <img src={LOGO} alt="logo" className='img-fluid' /> */}
                        <div className="sign_form">
                            <h3>Forgot your password?</h3>
                            <p>Enter your user account's verified email address and we will send you a password reset link.</p>
                            <div className="form-group">
                                <input type="email" onChange={(e) => hnadleEmail(e)} className="form-control" placeholder="Email" />
                            </div>
                            <div>
                                <button onClick={() => forget()} className="btn sign_btn">Send Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword
