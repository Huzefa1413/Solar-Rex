import React, { useState, useEffect } from 'react';
import { useAuth } from '../ContextAPI/Components/auth';
import { Table, UncontrolledTooltip } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import { profilePicUrl } from '../helpers/data';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader'; // Import Loader component
import { get_all_users } from '../ContextAPI/APIs/api';
import profile from '../assets/profile.svg';

function CustomerList() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (user.role !== 'admin') {
      navigate('/dashboard');
      return;
    }

    const getAllUser = async () => {
      try {
        const response = await get_all_users();
        if (response.success) {
          setData(response.message.reverse());
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    getAllUser();
  }, [user.role, navigate]);

  return (
    <>
      <div className="d-flex">
        <div className="sidebar_div">
          <NavSidebar />
        </div>
        <div className="page_div">
          <Navbar />
          <section className="container-fluid py-3">
            <h2>Customer List</h2>
            {loading ? (
              <Loader />
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              <Table className="align-items-center" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Email</th>
                    <th scope="col">View Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id}>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link
                          to={`/customer-profile/${item._id}`}
                          className="avatar avatar-sm"
                          id={`tooltip-${item._id}`}
                        >
                          <img
                            alt="Profile"
                            className="rounded-circle"
                            src={
                              item.profilepic
                                ? `${profilePicUrl}/${item.profilepic}`
                                : profile
                            }
                          />
                        </Link>
                        <UncontrolledTooltip
                          delay={0}
                          target={`tooltip-${item._id}`}
                        >
                          {item.username}
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
