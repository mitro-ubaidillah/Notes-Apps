import React from "react";
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginPage = ({loginSuccess}) => {
    
    async function onLogin(user) {
        const { error, data } = await login(user);

        if(!error) {
            loginSuccess(data);
        }
    }

    return (
        <section>
            <h2>Silakan masuk untuk melanjutkan...</h2>
            <LoginInput  login={onLogin} />
            <p>Belum punya akun, <Link to="/register">daftar disni</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;