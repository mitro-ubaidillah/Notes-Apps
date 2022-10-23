import React from "react";
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

const LoginPage = ({ loginSuccess }) => {
    const { locale } = React.useContext(LocaleContext);
    
    async function onLogin(user) {
        const { error, data } = await login(user);

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="input-login">
            <h2>{locale === 'id' ? 'Yuk, login dulu' : 'Please, first login '}</h2>
            <LoginInput login={onLogin} locale={locale}/>
            <p>{locale === 'id' ? 'Belum punya akun ? ': "Don't have an account ? " } <Link to="/register">{locale === 'id' ? 'Daftar disni' : 'Register here' }</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;