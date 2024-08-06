import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaBan } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import { account_verification } from '../ContextAPI/APIs/api';
import Loader from '../components/Loader';

const VerificationPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSignIn = () => {
    navigate('/');
  };

  const [loading, setLoading] = useState(false);

  const [verified, setVerified] = useState(false);

  const verification = async () => {
    try {
      setLoading(true);
      const response = await account_verification({ token: token });
      if (response.success) {
        setVerified(true);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    verification();
  }, []);

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
                <h3 className="mt-3">Account Verified Failed!</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationPage;
