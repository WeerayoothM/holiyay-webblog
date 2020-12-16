import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import './Register.css';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    age: Yup.number().required().positive().integer(),
    description: Yup.string().required(),
    email: Yup.string().email().required()
});

function Register() {
    const { register, handleSubmit, errors } = useForm(
        {
            resolver: yupResolver(SignupSchema)
        }
    );
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className="register-container">
            <h1 style={{
                color: 'white', fontSize: '3rem', marginBottom: '30px', fontWeight: '600',
                paddingBottom: '10px',
                borderBottom: '1px solid rgb(79, 98, 148)'
            }}>Register Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div data-aos-delay="20" data-aos='fade-right' className="formgroup">
                    <label>First Name</label>
                    <input type="text" name="firstName" ref={register} style={{ padding: '0 10px' }} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div data-aos-delay="40" data-aos='fade-right' className="formgroup">
                    <label>Last Name</label>
                    <input type="text" name="lastName" ref={register} style={{ padding: '0 10px' }} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div data-aos-delay="40" data-aos='fade-right' className="formgroup">
                    <label>Email</label>
                    <input type="text" name="email" ref={register} style={{ padding: '0 10px' }} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div data-aos-delay="60" data-aos='fade-right' data-aos-offset="100" className="formgroup">
                    <label>Age</label>
                    <input type="text" name="age" ref={register} style={{ padding: '0 10px' }} />
                    {errors.age && <p>{errors.age.message}</p>}
                </div>
                <div data-aos-delay="80" data-aos='fade-right' className="formgroup">
                    <label>Description</label>
                    <input type="text" name="description" ref={register} style={{ padding: '0 10px' }} />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <div data-aos-delay="100" data-aos='fade-right' className="formgroup btn-submit">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div >
    )
}

export default Register
