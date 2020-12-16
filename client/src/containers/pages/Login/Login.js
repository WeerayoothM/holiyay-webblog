import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import './Login.css'
import axios from '../../../config/axios'

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required(),
    password: Yup.string()
        .required()
});
function Login() {
    const { register, handleSubmit, errors } = useForm(
        {
            resolver: yupResolver(LoginSchema)
        }
    );
    const onSubmit = data => {
        axios.post('/users/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div data-aos='fade-right' className="formgroup">
                    <label>Username</label>
                    <input type="text" name="username" ref={register} style={{ padding: '0 10px' }} />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div data-aos='fade-right' className="formgroup">
                    <label>Password</label>
                    <input type="text" name="password" ref={register} style={{ padding: '0 10px' }} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div data-aos='fade-right' className="formgroup">
                    <span style={{ color: '#fff', fontSize: '16px', fontWeight: '450' }}>New user? <span ><Link to="/register" className="linktext">Create an account</Link></span></span>
                </div>
                <div data-aos='fade-right' className="formgroup btn-submit">
                    <input type="submit" value="Login" />
                </div>

            </form>
        </div>
    )
}

export default Login
