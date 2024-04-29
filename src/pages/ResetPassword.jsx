import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import { reset_password } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';

function ResetPassword() {
  const Navigate = useNavigate();
  const { token } = useParams();

  const { alert } = useToast();

  const [data, setData] = useState({
    otp: '',
    password: '',
  });

  const handleOTP = (e) => {
    setData({ ...data, otp: e.target.value });
  };

  const handlePass = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const reset = async () => {
    try {
      // const response = await reset_password(data, token)
      // alert(response.message)
      // if (response.success) {
      //     Navigate("/sign-in")
      // }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section className="authentication_section reset_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            {/* <img src={LOGO} alt="logo" className='img-fluid' /> */}
            <div className="sign_form">
              <h3>Reset your Password</h3>
              <p>Set your new password.</p>
              <div className="form-group">
                <input
                  onChange={(e) => handleOTP(e)}
                  type="text"
                  className="form-control"
                  placeholder="OTP"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handlePass(e)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div>
                <button onClick={() => reset()} className="btn sign_btn">
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
