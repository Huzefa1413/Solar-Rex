import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forget_password } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import Loader from '../components/Loader';

function ForgotPassword() {
  const { alert } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
  });

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const forget = async (e) => {
    setLoading(true);
    try {
      const payload = {
        email: data.email,
      };
      const response = await forget_password(payload);
      alert(response.message, response.success);
      if (response.success) {
        navigate(`/reset-password/${response?.token}`);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="authentication_section forgot_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            <div className="sign_form">
              <h3>Forgot your password?</h3>
              <p>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <div className="form-group">
                <input
                  type="email"
                  onChange={(e) => handleEmail(e)}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={() => forget()}
                  className="btn sign_btn"
                >
                  {loading ? <Loader /> : 'Send Request'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
