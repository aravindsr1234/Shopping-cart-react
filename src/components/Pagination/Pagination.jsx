import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, setCurrentPage } from '../../features/signupUserSlice/signupUserSlice';

const Pagination = ({ setCurrentPages, setItems }) => {

    const dispatch = useDispatch();
    const { totalUsers, currentPage, searchValue, itemsPerPage } = useSelector((state) => state.user);
    setCurrentPages(currentPage);
    setItems(itemsPerPage);

    useEffect(() => {
        const fetchData = async () => {
            const params = { currentPage, searchValue, itemsPerPage };
            dispatch(getAllUsers(params));
        };
        fetchData();
    }, [dispatch, currentPage, searchValue, itemsPerPage]);

    const totalPages = Math.ceil(totalUsers / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const goToPage = (page) => {
        dispatch(setCurrentPage(page));
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    return (
        <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            {pageNumbers.map((pageNumber) => (
                <button key={pageNumber} onClick={() => goToPage(pageNumber)}>{pageNumber}</button>
            ))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;
