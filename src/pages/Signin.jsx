import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { useToast } from '../ContextAPI/Components/toast';

function SignIn() {
  const { alert } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async () => {
    try {
      const response = await login(formData);
      alert(response.message, response.success);
      if (response.success) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <section className="authentication_section signin_pass_page d-flex ai-center">
      <div className="container">
        <div className="card">
          <div className="sign_form">
            <h3>Welcome</h3>
            <p>Please sign in using your account.</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <button onClick={loginUser} className="btn sign_btn">
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
                  <Link to="/forgot-password" className="link reset_pass">
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
  );
}

export default SignIn;
