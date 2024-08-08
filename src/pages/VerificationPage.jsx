import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCheckCircle, FaBan } from 'react-icons/fa';
import { account_verification } from '../ContextAPI/APIs/api';
import Loader from '../components/Loader';

const VerificationPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const verification = useCallback(async () => {
    try {
      setLoading(true);
      const response = await account_verification({ token });
      if (response.success) {
        setVerified(true);
      } else {
        setError('Verification failed. Please try again later.');
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    verification();
  }, [verification]);

  return (
    <section className="authentication_section forgot_pass_page verification_page d-flex ai-center">
      <div className="container">
        <div className="card text-center">
          <div className="sign_form">
            {loading ? (
              <Loader />
            ) : verified ? (
              <>
                <FaCheckCircle className="check-icon" size={60} color="green" />
                <h3 className="mt-3">Account Verified Successfully!</h3>
                <p>Your account has been verified. You can now sign in.</p>
                <button onClick={handleSignIn} className="btn mt-3 sign_btn">
                  Go to Sign In
                </button>
              </>
            ) : (
              <>
                <FaBan size={60} color="red" />
                <h3 className="mt-3">Account Verification Failed!</h3>
                {error && <p className="text-danger">{error}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationPage;
