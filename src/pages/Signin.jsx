import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../ContextAPI/Components/auth"
import { useToast } from '../ContextAPI/Components/toast'

import LOGO from "../assets/logo.png"

function SignIn() {
    const { alert } = useToast()
    const { Login, user } = useAuth()
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleEmail = (e) => {
        setData({ ...data, email: e.target.value })
    }

    const handlePassword = (e) => {
        setData({ ...data, password: e.target.value })
    }

    const loginUser = async () => {
        try {
            const payload = {
                email: data?.email,
                password: data?.password
            }

            console.log("PAYLOAD", payload);

            // const response = await Login(payload)

            // console.log("RESPONSE", response);
            // if (response.success) {

            //     if (response?.user?.role == "admin") {
            //         navigate("/admin-dashboard")

            //     } else if (response?.user?.role == "student") {

            //         if (response?.user?.step == 0) return navigate("/profile#password")

            //         navigate("/dashboard")

            //     } else if (response?.user?.role == "university") {
            //         navigate("/university-dashboard")

            //     } else {
            //         navigate("/")

            //     }
            // }
            // alert(response.message, response.success)
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <>



            <section className='authentication_section signin_pass_page d-flex ai-center'>
                <div className="container">
                    <div className="card">
                        {/* <img src={LOGO} alt="logo" className='img-fluid' /> */}
                        <div className="sign_form">
                            <h3>Welcome back!</h3>
                            <p>Please sign in using your account.</p>
                            {/* <h3>Sign in to your account</h3> */}
                            <div className="form-group">
                                <input onChange={(e) => handleEmail(e)} type="email" className="form-control" placeholder="Username or Email" />
                            </div>
                            <div className="form-group">
                                <input onChange={(e) => handlePassword(e)} type="password" className="form-control" placeholder="Type Password" />
                            </div>
                            <div className="">
                                <button onClick={() => loginUser()} className="btn sign_btn">Sign In</button>
                            </div>
                            <div className='form-check-group my-4 d-flex jc-between mx-2'>
                                <div>
                                    <label className='mb-0'>
                                        <Link to="/forgot-password" className='link'>Forgot your password?</Link>
                                    </label>
                                </div>
                                <div>
                                    <label className='mb-0'>
                                        <Link to="/reset-password/:token" className='link reset_pass'>Reset Here</Link>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Link to="/sign-up" className='link'>
                                    <button className="btn signup_btn">Create An Account</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignIn