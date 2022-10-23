import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import LocaleContext from "../context/LocaleContext";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {locale} = React.useContext(LocaleContext);

    async function onRegisterHandler(user) {
        if(user.password !== user.passwordConfirm){
           return false
        }else {
            const {error} = await register(user);
    
            if(!error) {
                navigate('/');
            } 
        }

    }

    return (
        <section className="input-register">
            <h2>{locale === 'id' ? 'Form Pendafataran' : 'Register Form'}</h2>
            <RegisterInput register={onRegisterHandler} locale={locale}/>
            <p>{locale === 'id' ? 'Sudah punya akun ? ' : 'Alredy have an account ? '} <Link to="/" >{locale === 'id' ? 'Masuk disni' : 'Login here' }</Link></p>
        </section>
    )
}

export default RegisterPage;