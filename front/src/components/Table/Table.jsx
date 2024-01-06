import React from 'react'
import Pagination from '../Pagination';

function Table(props) {

    const { head } = props;
   
    
    return (
        <>
            <section className='main_table'>
                <div className='table-responsive'>
                    <table className="table ">
                        <thead>
                            <tr>
                                {
                                    head && head.map((head, i) => {
                                        return <th key={i} scope="col">{head}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>

                            {props.children}

                        </tbody >
                    </table>

                    {/* <Pagination itemsPerPage={4} /> */}

                </div>
            </section>
        </>
    )
}

export default Table
