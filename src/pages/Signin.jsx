import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../ContextAPI/Components/auth';
import { useToast } from '../ContextAPI/Components/toast';
import Loader from '../components/Loader';

function SignIn() {
  const { alert } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await login(values);
        alert(response.message, response.success);
        if (response.success) {
          navigate('/dashboard');
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="authentication_section signin_pass_page d-flex ai-center">
      <div className="container">
        <div className="card">
          <div className="sign_form">
            <h3>Welcome</h3>
            <p>Please sign in using your account.</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
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
              <div className="mb-4">
                <button
                  disabled={formik.isSubmitting}
                  type="submit"
                  className="btn sign_btn"
                >
                  {formik.isSubmitting ? <Loader /> : 'Sign In'}
                </button>
              </div>
            </form>
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
