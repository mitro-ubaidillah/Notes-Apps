import React from "react";
import PropTypes from "prop-types";
import useInput from "./hooks/useInput";

const LoginInput = ({login}) => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({email, password});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={email} onChange={onChangeEmail} placeholder="Masukan Email" />
            <input type="password" value={password} onChange={onChangePassword} placeholder="Masukan Password" />
            <input type="submit" value="Login" />
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;