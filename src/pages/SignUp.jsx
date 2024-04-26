import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../ContextAPI/Components/auth';

import LOGO from '../assets/logo.png';
import { signUp } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import { ValidatePhoneNumber } from '../helpers/validatePhoneNumber';
import { ValidateNIC } from '../helpers/validateNIC';

function SignUp() {
  const { alert } = useToast();
  const { SignUp } = useAuth();

  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleFirstname = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handleCNIC = (e) => {
    setData({ ...data, cnic: e.target.value });
  };

  const handlePhone = (e) => {
    setData({ ...data, phone: e.target.value });
  };
  const handleGender = (e) => {
    setData({ ...data, gender: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleCPassword = (e) => {
    setData({ ...data, cpassword: e.target.value });
  };

  const register = async () => {
    try {
      if (data?.password == data?.cpassword) {
        // console.log("PAYLOAD", payload);

        // if (ValidateNIC(data.cnic) == false) return alert("CNIC should be 13 characters long.", false)
        if (ValidatePhoneNumber(data.phone) == false)
          return alert(
            'Phone numbers should start with +92 and be 13 characters long.',
            false
          );

        const response = await signUp(data);

        console.log('RESPONSE', response);
        // if (response.success) {
        //     navigate("/sign-in")
        // }
        alert(response?.message, response.success);
        navigate('/sign-in');
      } else {
        alert('Passwords Do Not Match');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="authentication_section signup_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            {/* <img src={LOGO} alt="logo" className='img-fluid' /> */}
            <div className="sign_form">
              <h3>Welcome to Solar Rex!</h3>
              <p>Signup here to create your own dashboard.</p>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => handleFirstname(e)}
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => handleEmail(e)}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => handlePhone(e)}
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <small className="text-danger">
                      {ValidatePhoneNumber(data.phone) == false &&
                        'Phone numbers should start with +92 and be 13 characters long.'}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => handlePassword(e)}
                      type="password"
                      className="form-control"
                      placeholder="Type Password"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => handleCPassword(e)}
                      type="password"
                      className="form-control"
                      placeholder="Re-type Password"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <button onClick={() => register()} className="btn sign_btn">
                  Register
                </button>
              </div>

              <small>
                Already have an account? &nbsp;{' '}
                <Link to="/sign-in" className="Link">
                  {' '}
                  Sign In{' '}
                </Link>
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
