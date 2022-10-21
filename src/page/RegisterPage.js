import React from "react";
import PropTypes from "prop-types";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";

const RegisterPage = () => {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const {error} = await register(user);

        if(!error) {
            navigate('/');
        }
    }

    return (
        <section>
            <h2>Form pendafataran</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>kembali ke <Link to="/">Masuk</Link></p>
        </section>
    )
}

export default RegisterPage;