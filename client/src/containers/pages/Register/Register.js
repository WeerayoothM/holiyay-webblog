import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import './Register.css';
import axios from '../../../config/axios'


const SignupSchema = Yup.object().shape({
    username: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(3),
    confirmPassword: Yup.string()
        .required()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value
        }),
    mobile: Yup.string().required().min(10).max(10),
    description: Yup.string().required(),
    // imageUrl: Yup.string().required(),
});

function Register() {

    const { register, handleSubmit, errors, } = useForm(
        {
            resolver: yupResolver(SignupSchema)
        }
    );
    const onSubmit = (data) => {
        console.log(data)
        axios.post('/users/register', { ...data, imageUrl: '' })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };
    return (
        <div className="register-container">
            <div style={{ padding: '20px 40px', borderRadius: '20px', background: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 style={{
                    color: 'white', fontSize: '2.5rem', marginBottom: '30px', fontWeight: '600',
                    paddingBottom: '10px',
                    borderBottom: '1px solid rgb(79, 98, 148)'
                }}>Registration Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div data-aos-once="true" data-aos-delay="20" data-aos='fade-right' className="formgroup">
                        <label>Username</label>
                        <input type="text" name="username" ref={register} style={{ padding: '0 10px' }} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="20" data-aos='fade-right' className="formgroup">
                        <label>First Name</label>
                        <input type="text" name="firstName" ref={register} style={{ padding: '0 10px' }} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="40" data-aos='fade-right' className="formgroup">
                        <label>Last Name</label>
                        <input type="text" name="lastName" ref={register} style={{ padding: '0 10px' }} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="40" data-aos='fade-right' className="formgroup">
                        <label>Email</label>
                        <input type="text" name="email" ref={register} style={{ padding: '0 10px' }} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="40" data-aos='fade-right' className="formgroup">
                        <label>Password</label>
                        <input type="password" name="password" ref={register} style={{ padding: '0 10px' }} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="40" data-aos='fade-right' className="formgroup">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" ref={register} style={{ padding: '0 10px' }} />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="60" data-aos='fade-right' data-aos-offset="100" className="formgroup">
                        <label>Mobile</label>
                        <input type="text" name="mobile" ref={register} style={{ padding: '0 10px' }} />
                        {errors.mobile && <p>{errors.mobile.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="80" data-aos='fade-right' className="formgroup">
                        <label>Description</label>
                        <input type="text" name="description" ref={register} style={{ padding: '0 10px' }} />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>
                    <div data-aos-once="true" data-aos-delay="100" data-aos='fade-right' className="formgroup btn-submit">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register
