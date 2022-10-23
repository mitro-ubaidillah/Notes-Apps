import React from "react";
import PropTypes from "prop-types";
import useInput from "./hooks/useInput";
import LocaleContext from "../context/LocaleContext";

const LoginInput = ({login}) => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { locale } = React.useContext(LocaleContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({email, password});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={email} onChange={onChangeEmail} placeholder={locale === 'id' ? 'Masukan Email' : 'Input Email'} />
            <input type="password" value={password} onChange={onChangePassword} placeholder={locale === 'id' ? 'Masukan Password' : 'Input Password'} />
            <button type="submit">{locale === 'id' ? "Masuk" : "Login"}</button>
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
};

export default LoginInput;