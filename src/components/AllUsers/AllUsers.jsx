import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/signupUserSlice/signupUserSlice";
import './AllUsers.css'

const AllUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const userData = useSelector((state) => state.user.getAllUser)
    console.log(userData);

    return (
        <>
            <div className="users">
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
                        {userData.map((data, index) => (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.firstName + " " + data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;