import React from "react";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";
import { useNavigate } from "react-router-dom";

const App = () => {
    const [authedUser, setAuthedUser] = React.useState('');
    const navigate = useNavigate();
    
    
    async function onLoginSuccess({accessToken}) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
    }
    
    const onLogout = () => {
        setAuthedUser('');
        putAccessToken('');
        
        if(authedUser === ''){
            navigate('/');
        }
    }

    
    if(authedUser === ''){
        return (
            <>
                <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                    <Route path="/register" element={ <RegisterPage /> } />
                </Routes>
            </>
        );
    }

    return (
        <div className="">
            <header>
                <h1><Link to="/">Aplikasi Catatan</Link></h1>
                <Navigation logout={onLogout} name={authedUser.name} />
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App;