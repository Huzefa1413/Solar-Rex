import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../ContextAPI/Components/auth';
import { signUp } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';

function SignUp() {
  const { alert } = useToast();
  const { SignUp } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
      cpassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 20 characters')
        .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
      cpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      phone: Yup.string()
        .matches(
          /^\+92\d{10}$/,
          'Phone number must start with +92 and be 13 characters long'
        )
        .required('Phone is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await signUp(values);
        alert(response?.message, response.success);
        if (response.success) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error registering:', error);
      }
    },
  });

  return (
    <>
      <section className="authentication_section signup_pass_page d-flex ai-center">
        <div className="container">
          <div className="card">
            <div className="sign_form">
              <h3>Welcome to Solar Rex!</h3>
              <p>Signup here to create your own dashboard.</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        {...formik.getFieldProps('username')}
                      />
                      {formik.touched.username && formik.errors.username && (
                        <div className="text-danger">
                          {formik.errors.username}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...formik.getFieldProps('email')}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger">{formik.errors.phone}</div>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Type Password"
                        {...formik.getFieldProps('password')}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className="text-danger">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-type Password"
                        {...formik.getFieldProps('cpassword')}
                      />
                      {formik.touched.cpassword && formik.errors.cpassword && (
                        <div className="text-danger">
                          {formik.errors.cpassword}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <button type="submit" className="btn sign_btn">
                    Register
                  </button>
                </div>
                <small>
                  Already have an account?{' '}
                  <Link to="/" className="Link">
                    Sign In
                  </Link>
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
