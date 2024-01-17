import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAdmin } from "../../features/signupAdminSlice/signupAdminSlice";

const AdminSignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupData, setSignupData] = useState({
        userName: "",
        password: "",
        email: "",
        phone: "",
    });
    console.log(signupData);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setSignupData({...signupData, [inputName]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createAdmin(signupData));
    };

    return (
        <>
            <h1>ADMIN SIGNUP</h1>
            <form onSubmit={handleSubmit}>
                <input type="userName" name="userName" value={signupData.userName} onChange={handleChange}/>
                <input type="password" name="password" value={signupData.password} onChange={handleChange}/>
                <input type="email" name="email" value={signupData.email} onChange={handleChange}/>
                <input type="phone" name="phone" value={signupData.phone} onChange={handleChange}/>
                <button type="submit">SignUp</button>
                <button type="button" onClick={(() => navigate('/adminLogin'))}>LOGIN</button>
            </form>
        </>
    )
};

export default AdminSignUp;