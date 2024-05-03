import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { get_transactions } from '../ContextAPI/APIs/api';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader'; // Import Loader component

function TransactionTable() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (user.role !== 'admin' && !user.profileSetup) {
      navigate('/profile');
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await get_transactions();
        setTransactions(response.message.reverse());
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const convertTimestampToDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert midnight (0 hours) to 12 AM
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes} ${meridiem}`;
    return formattedTime;
  };

  return (
    <div className="d-flex">
      <div className="sidebar_div">
        <NavSidebar />
      </div>
      <div className="page_div">
        <Navbar />
        <section className="container-fluid py-3">
          <h2>Transactions</h2>
          {loading ? (
            <Loader />
          ) : (
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Buyer</th>
                  <th scope="col">Inverter ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction?.buyerid.username}</td>
                    <td>{transaction?.buyerid.inverterId}</td>
                    <td>{transaction?.price}</td>
                    <td>{transaction?.quantity}</td>
                    <td>
                      {convertTimestampToDateTime(transaction?.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </section>
      </div>
    </div>
  );
}

export default TransactionTable;
