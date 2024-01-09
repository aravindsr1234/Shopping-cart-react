import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../features/signupUserSlice/signupUserSlice";

const SignupUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        state: "",
        address: ""
    });
    console.log(postData)
    const [userId, serUserId] = useState('')
    console.log(userId);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        console.log(value);
        setPostData({
            ...postData,
            [inputName]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createUser(postData))
            .then((data) => localStorage.setItem('userId', JSON.stringify(data.payload._id)));
    };

    useEffect(() => {
        localStorage.setItem('userId', JSON.stringify(userId));
    }, [userId]);

    return (
        <div className="login">
            <div className="container">
                <div className="loginLDiv">
                    <div class="loginHead"><h1>Sign In</h1>
                        <div className="body-form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="firstName" className="form-control" value={postData.firstName} onChange={handleChange} placeholder="FIRSTNAME" />
                                    <input type="text" name="lastName" className="form-control" value={postData.lastName} onChange={handleChange} placeholder="LASTNAME" />
                                </div>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="email" className="form-control" value={postData.email} onChange={handleChange} placeholder="EMAIL" />
                                    <input type="text" name="password" className="form-control" value={postData.password} onChange={handleChange} placeholder="PASSWORD" />
                                </div>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="city" className="form-control" value={postData.city} onChange={handleChange} placeholder="CITY" />
                                    <input type="text" name="state" className="form-control" value={postData.state} onChange={handleChange} placeholder="STATE" />
                                </div>
                                <div className="input-group mb-3 LoginUser">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input type="text" name="address" className="form-control" value={postData.address} onChange={handleChange} placeholder="ADDRESS" />
                                </div>
                                <div class="register">
                                    <button type="submit" className="btn btn-secondary btn-block">SignUp</button>
                                    <button type="button" onClick={() => navigate('/login')}>LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default SignupUser;