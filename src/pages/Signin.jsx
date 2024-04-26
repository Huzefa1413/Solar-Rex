import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { useToast } from '../ContextAPI/Components/toast';

import LOGO from '../assets/logo.png';

function SignIn() {
  const { alert } = useToast();
  const { Login, user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleEmail = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const loginUser = async () => {
    try {
      const payload = {
        username: data?.username,
        password: data?.password,
      };

      console.log('PAYLOAD', payload);

      const response = await Login(payload);

      console.log('RESPONSE', response);
      if (response.success) {
        navigate('/dashboard');
      }
      // if (response?.user?.role == "admin") {
      //     navigate("/admin-dashboard")

      // } else if (response?.user?.role == "student") {

      //     if (response?.user?.step == 0) return navigate("/profile#password")

      //     navigate("/dashboard")

      // } else if (response?.user?.role == "university") {
      //     navigate("/university-dashboard")

      // }
      else {
        navigate('/');
      }
      alert(response.message, response.success);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="authentication_section signin_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            <div className="sign_form">
              <h3>Welcome</h3>
              <p>Please sign in using your account.</p>
              <div className="form-group">
                <input
                  onChange={(e) => handleEmail(e)}
                  type="text"
                  className="form-control"
                  placeholder="Username "
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handlePassword(e)}
                  type="password"
                  className="form-control"
                  placeholder="Type Password"
                />
              </div>
              <div className="">
                <button onClick={() => loginUser()} className="btn sign_btn">
                  Sign In
                </button>
              </div>
              <div className="form-check-group my-4 d-flex jc-between mx-2">
                <div>
                  <label className="mb-0">
                    <Link to="/forgot-password" className="link">
                      Forgot your password?
                    </Link>
                  </label>
                </div>
                <div>
                  <label className="mb-0">
                    <Link
                      to="/reset-password/:token"
                      className="link reset_pass"
                    >
                      Reset Here
                    </Link>
                  </label>
                </div>
              </div>
              <div>
                <Link to="/sign-up" className="link">
                  <button className="btn signup_btn">Create An Account</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container my-5">
        <div
          className="card"
          style={{
            backgroundColor: 'linear-gradient(87deg, #11cdef, #1171ef)',
          }}
        >
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <i
                    className="fas fa-cubes fa-3x me-3"
                    style={{ color: '#ff6219' }}
                  ></i>
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>
                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: '1px' }}
                >
                  Sign into your account
                </h5>
                <input
                  className="form-control-lg mb-4"
                  placeholder="Email address"
                  type="email"
                />
                <input
                  className="form-control-lg mb-4"
                  placeholder="Password"
                  type="password"
                />
                <button className="btn btn-dark mb-4 px-5" type="button">
                  Login
                </button>
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Don't have an account?{' '}
                  <a href="#!" style={{ color: '#393f81' }}>
                    Register here
                  </a>
                </p>
                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SignIn;
