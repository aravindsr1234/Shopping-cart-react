import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/signupUserSlice/signupUserSlice";
import './AllUsers.css';
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const AllUsers = () => {

    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPages] = useState();
    const [itemsPerPage, setItems] = useState();
    console.log(currentPage);
    console.log(itemsPerPage);

    // useEffect(() => {
    //     dispatch(getAllUsers());
    // }, [dispatch]);

    const userData = useSelector((state) => state.user.user)
    console.log(userData);
    let slNo = ((currentPage - 1) * itemsPerPage) + 1;

    return (
        <>
            <div className="users">
                <Search />
                <table >
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.map((data, index) => (
                            <>
                                <tr key={index}>
                                    <td>{index + slNo}</td>
                                    <td>{data.firstName + " " + data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
                <Pagination setCurrentPages={setCurrentPages} setItems={setItems}/>
            </div>
        </>
    );
};

export default AllUsers;