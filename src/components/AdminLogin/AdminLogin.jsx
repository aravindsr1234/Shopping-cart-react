import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        userName: "",
        password: "",
    });
    console.log('value from form', loginData);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setLoginData({ ...loginData, [inputName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/admin/login', loginData)
            .then((data) => {
                localStorage.setItem('AdminToken', JSON.stringify(data.data));
            })
        navigate('/adminPanel')
    }

    return (
        <>
            <h1>ADMIN LOGin</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={loginData.userName} onChange={handleChange} />
                <input type="text" name="password" value={loginData.password} onChange={handleChange} />
                <button type="submit">Login</button>
                <button type="button" onClick={() => navigate('/adminSignup')}>Signup</button>
            </form>
        </>
    )
};

export default AdminLogin;