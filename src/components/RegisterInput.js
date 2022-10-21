import React from "react";
import PropTypes from "prop-types";
import useInput from "./hooks/useInput";

const RegisterInput = ({register}) => {
    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({name, email, password});
    }

    return  (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={name} onChange={onChangeName} placeholder="Masukan Nama Anda" />
            <input type="email" value={email} onChange={onChangeEmail} placeholder="Masukan Email Anda" />
            <input type="password" value={password} onChange={onChangePassword} placeholder="Masukan Password" />
            <button>Daftar</button>
        </form>
    )

}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;