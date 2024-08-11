import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/Components/auth';
import { get_transactions } from '../ContextAPI/APIs/api';
import NavSidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
function TransactionTable() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalCount, setTotalCount] = useState(4)

  useEffect(() => {
    if (user.role !== 'admin' && !user.profileSetup) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const fetchTransactions = useCallback(async (skip) => {
    try {
      const response = await get_transactions(skip);
      setTotalCount(response?.totalCount)
      setTransactions(response?.message);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setError('Failed to load transactions.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTransactions(pageSkip);
  }, [fetchTransactions]);


  const [pageSkip, setPageSkip] = useState(0)

    const handlePagination = (skip) => {
        console.log("SKIPPPPPPP", skip);
        setPageSkip(skip)
        fetchTransactions(skip)
        // search(selectedUni, selectedProgram, selectedCity, skip)
    }


  const convertTimestampToDateTime = useCallback((timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${meridiem} ${day}-${month}-${year} `;
  }, []);

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
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
            
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Buyer</th>
                  <th scope="col">Inverter ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction?.buyerid.username}</td>
                    <td>{transaction?.buyerid.inverterId}</td>
                    <td>$ {transaction?.price.toFixed(2)}</td>
                    <td>{transaction?.quantity} kWh</td>
                    <td>
                      {convertTimestampToDateTime(transaction?.timestamp)}
                    </td>
                    <td >
                      <div className={`txStatus-${transaction?.status}`}>
                      {transaction?.status}
                      </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Pagination totalCount={totalCount} handlePagination={handlePagination} itemsPerPage={10} />
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default TransactionTable;
