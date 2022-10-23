import React from "react";
import PropTypes from "prop-types";
import useInput from "./hooks/useInput";

const RegisterInput = ({register, locale}) => {
    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordConfirm, onChangePasswordConfirm] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({name, email, password, passwordConfirm});
    }

    return  (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={name} onChange={onChangeName} placeholder={locale === 'id' ? 'Masukan Nama Anda' : 'Input Your Name'} />
            <input type="email" value={email} onChange={onChangeEmail} placeholder={locale === 'id' ? 'Masukan Email Anda' : 'Input Your Email'} />
            <input type="password" value={password} onChange={onChangePassword} placeholder={locale === 'id' ? 'Masukan Password' : 'Input Password'} />
            <input type="password" value={passwordConfirm} onChange={onChangePasswordConfirm} placeholder={locale === 'id' ? 'Masukan Ulang Password' : 'Re-typing Password'} />
            {password !== passwordConfirm && passwordConfirm ?  <p className="wrong">{locale === 'id' ? 'Password tidak sama' : 'Password not match'}</p> : null}
            <button type="submit">{locale === 'id' ? "Daftar" : "Register"}</button>
        </form>
    )

}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}

export default RegisterInput;