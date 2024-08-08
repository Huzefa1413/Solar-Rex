import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { reset_password } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import Loader from '../components/Loader';

function ResetPassword() {
  const { alert } = useToast();
  const navigate = useNavigate();
  const { token } = useParams();

  const formik = useFormik({
    initialValues: {
      otp: '',
      password: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string().required('OTP is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await reset_password(values, token);
        alert(response.message, response.success);
        if (response.success) {
          navigate('/');
        }
      } catch (e) {
        console.error('Error resetting password:', e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="authentication_section reset_pass_page d-flex ai-center">
      <div className="container">
        <div className="card">
          <div className="sign_form">
            <h3>Reset your Password</h3>
            <p>Set your new password.</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="otp"
                  className="form-control"
                  placeholder="OTP"
                  {...formik.getFieldProps('otp')}
                />
                {formik.touched.otp && formik.errors.otp && (
                  <div className="text-danger">{formik.errors.otp}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting || formik.isValidating}
                  className="btn sign_btn"
                >
                  {formik.isSubmitting ? <Loader /> : 'Reset Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
