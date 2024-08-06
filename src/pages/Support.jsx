import React, { useState, useEffect } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { getAdminEmail } from '../ContextAPI/APIs/api';
import Loader from '../components/Loader';

const Support = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.username,
    email: user.email,
    message: '',
  });
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    if (user.role !== 'admin' && !user.profileSetup) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${adminEmail}?subject=Support Request from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const getEmailForAdmin = async () => {
    const response = await getAdminEmail();
    console.log('response', response);
    if (response.success) {
      setAdminEmail(response.message);
    }
  };
  useEffect(() => {
    getEmailForAdmin();
  }, []);
  return (
    <div className="d-flex">
      <div className="sidebar_div">
        <NavSidebar />
      </div>
      <div className="page_div">
        <Navbar />
        <section className="container-fluid py-3">
          <div className="support-container container my-5">
            <div className="row">
              {loading ? (
                <Loader />
              ) : (
                <div className="col-md-6 mb-5">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions or need assistance, feel free to
                    contact us through the form below.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        readOnly
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        readOnly
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              )}

              <div className="col-md-6">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is your refund policy?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Our refund policy is ...
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How do I track my order?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        You can track your order by ...
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you offer technical support?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we offer technical support for ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
