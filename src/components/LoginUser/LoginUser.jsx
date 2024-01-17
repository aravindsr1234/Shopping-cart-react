import "./LoginUser.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        firstName: "",
        password: "",
    });
    console.log(loginData);
    const [token] = useState([])
    console.log(token);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        console.log(value);
        setLoginData({ ...loginData, [inputName]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("corret");
        await axios.post('http://localhost:4000/user/login', loginData)
            .then((data) => {
                localStorage.setItem('token', JSON.stringify(data.data));
                localStorage.setItem('userId', JSON.stringify(data.data.user.userId));
            })
        navigate("/");
    }

    return (
        <div className="login">
            <div className="container ">
                <div className="loginLDiv">
                    <div class="loginHead"><h1>Log in</h1>
                        <div className="body-form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="firstName" id="loginEmail" className="form-control" value={loginData.firstName} onChange={handleChange} placeholder="Username" />
                                </div>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="password" id="loginPassword" className="form-control" value={loginData.password} onChange={handleChange} placeholder="Password" />
                                </div>
                                <div class="register">
                                    <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                                    <button type="button" className="signUpBtn" onClick={() => navigate('/SignupUser')}>SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginUser;