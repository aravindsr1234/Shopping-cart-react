import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/signupUserSlice/signupUserSlice";

const AllUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const userData = useSelector((state) => state.user.getAllUser)
    console.log(userData);

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </tbody>
            </table>
            {userData.map((data) => (
                <>
                    <h1>{data.firstName + " " + data.lastName}</h1>
                    <h1>{data.firstName}</h1>
                    <h1>{data.firstName}</h1>
                </>
            ))}
        </>
    );
};

export default AllUsers;