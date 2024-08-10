import React, { useState, useEffect } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import { buy } from '../ContextAPI/APIs/api';
import { useToast } from '../ContextAPI/Components/toast';
import { useNavigate } from 'react-router-dom';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import { useProSidebar } from 'react-pro-sidebar';
import { Input, Button } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PRICE_PER_UNIT = 20;
const MIN_AMOUNT = 100;
const MAX_AMOUNT = 2500;

const BuyEnergy = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { alert } = useToast();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.role !== 'admin') {
      if (!user.profileSetup) {
        navigate('/profile');
      }
    } else {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
    amount: Yup.number()
      .min(MIN_AMOUNT, `Min amount is ${MIN_AMOUNT} units`)
      .max(MAX_AMOUNT, `Max amount is ${MAX_AMOUNT} units`)
      .required('Amount is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      if (values.amount > 0) {
        const response = await buy({
          amount: values.amount,
          price: PRICE_PER_UNIT,
        });
        alert(response.message, response.success);

        if (response.success) {
          // navigate(response.message.data.invoice_url);
          window.location.href = response.message.data.invoice_url
          resetForm(); // Reset form fields after successful purchase
        }
      } else {
        alert('Please enter a valid amount', false);
      }
    } catch (error) {
      console.error('Error buying energy:', error);
      alert('An error occurred while buying energy', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="sidebar_div">
          <NavSidebar
            collapseSidebar={collapseSidebar}
            toggleSidebar={toggleSidebar}
            collapsed={collapsed}
            toggled={toggled}
            broken={broken}
            rtl={rtl}
          />
        </div>
        <div className="page_div">
          <Navbar
            collapseSidebar={collapseSidebar}
            toggleSidebar={toggleSidebar}
            collapsed={collapsed}
            toggled={toggled}
            broken={broken}
            rtl={rtl}
          />
          <section className="container-fluid">
            <div className="buyenergy">
              <h2 className="px-3">Buy Solar Energy</h2>
              <Formik
                initialValues={{ amount: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values }) => (
                  <Form>
                    <p className="d-flex align-items-center justify-content-start">
                      <span className="col-md-5">Amount of Energy:</span>
                      <div className="col-md-7">
                        <Field as={Input} type="number" name="amount" min="0" />
                        <ErrorMessage
                          name="amount"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </p>
                    <p className="d-flex align-items-center justify-content-start">
                      <span className="col-md-5">Price:</span>
                      <span className="col-md-7">
                        {values.amount * PRICE_PER_UNIT} Rs
                      </span>
                    </p>
                    <p className="px-3">
                      <Button
                        type="submit"
                        color="primary"
                        className="col-md-12"
                        disabled={loading}
                      >
                        {loading ? <Loader /> : 'Buy Now'}
                      </Button>
                    </p>
                    <p className="text-muted px-3">
                      Note: The price is calculated at Rs {PRICE_PER_UNIT} per
                      unit of energy.
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BuyEnergy;
