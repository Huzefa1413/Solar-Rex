import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { signUp } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';

function SignUp() {
  const { alert } = useToast();
  const { SignUp } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    cpassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const register = async () => {
    try {
      if (data.password === data.cpassword) {
        const response = await signUp(data);
        alert(response?.message, response.success);
        if (response.success) {
          navigate('/');
        }
      } else {
        alert('Passwords Do Not Match');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <>
      <section className="authentication_section signup_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            <div className="sign_form">
              <h3>Welcome to Solar Rex!</h3>
              <p>Signup here to create your own dashboard.</p>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={handleInputChange}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                />
                <small className="text-danger">
                  {data.phone &&
                    !/^\+92\d{10}$/.test(data.phone) &&
                    'Phone numbers should start with +92 and be 13 characters long.'}
                </small>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={handleInputChange}
                      type="password"
                      className="form-control"
                      placeholder="Type Password"
                      name="password"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      onChange={handleInputChange}
                      type="password"
                      className="form-control"
                      placeholder="Re-type Password"
                      name="cpassword"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <button onClick={register} className="btn sign_btn">
                  Register
                </button>
              </div>
              <small>
                Already have an account? &nbsp;
                <Link to="/" className="Link">
                  Sign In
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
