import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const VerificationPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <section className="authentication_section reset_pass_page verification_page d-flex ai-center">
      <div className="container">
        <div className="card text-center">
          <div className="verification_form">
            <FaCheckCircle className="check-icon" size={60} color="green" />
            <h3 className="mt-3">Account Verified Successfully!</h3>
            <p>Your account has been verified. You can now sign in.</p>
            <button onClick={handleSignIn} className="btn btn-primary mt-3">
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationPage;
