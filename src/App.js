import React from "react";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";
import { useNavigate } from "react-router-dom";
import AddPage from "./page/AddPage";
import DetailPage from "./page/DetailPage";

const App = () => {
    const [authedUser, setAuthedUser] = React.useState(null);
    const navigate = useNavigate();
    
    
    async function onLoginSuccess({accessToken}) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        return setAuthedUser(data);
    }
    
    React.useEffect(() => {
        getUserLogged().then(({data}) => {
            setAuthedUser(data);
        });
    }, []);

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
        
        if(authedUser === null){
            navigate('/');
        }
    }

    
    if(authedUser === null){
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
                <Route path="/add" element={<AddPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
        </div>
    )
}

export default App;