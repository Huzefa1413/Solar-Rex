import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { reset_password } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import Loader from '../components/Loader';

function ResetPassword() {
  const { alert } = useToast();
  const navigate = useNavigate();
  const { token } = useParams();

  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const response = await reset_password(data, token);
      alert(response.message);
      if (response.success) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="authentication_section reset_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
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
                <button
                  disabled={loading}
                  onClick={() => reset()}
                  className="btn sign_btn"
                >
                  {loading ? <Loader /> : 'Reset Password'}
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
