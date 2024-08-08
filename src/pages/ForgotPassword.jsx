import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { forget_password } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import Loader from '../components/Loader';

function ForgotPassword() {
  const { alert } = useToast();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await forget_password(values);
        alert(response.message, response.success);
        if (response.success) {
          navigate('/');
        }
      } catch (e) {
        console.error('Error:', e);
        alert('An error occurred. Please try again later.', false);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="authentication_section forgot_pass_page d-flex ai-center">
      <div className="container">
        <div className="card">
          <div className="sign_form">
            <h3>Forgot your password?</h3>
            <p>
              Enter your user account's verified email address and we will send
              you a password reset link.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                  placeholder="Email"
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn sign_btn"
                >
                  {formik.isSubmitting ? <Loader /> : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
