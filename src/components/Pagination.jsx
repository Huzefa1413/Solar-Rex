import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


function Pagination({ itemsPerPage, handlePagination, totalCount }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.

    const [itemOffset, setItemOffset] = useState(0);

    // Example items, to simulate fetching from another resources.

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);

    console.log(`totalCount ${totalCount}`);

    const pageCount = Math.ceil(totalCount / 10);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        handlePagination(event.selected)
        setItemOffset(newOffset);
    };

    return (
        <>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel={<GrFormNext />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                pageCount={pageCount}
                previousLabel={<GrFormPrevious />}
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination
