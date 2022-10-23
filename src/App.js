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
import ArchivedPage from "./page/ArchivedPage";
import NavigationLocale from "./components/NavigationLocale";
import LocaleContext from "./context/LocaleContext";

const App = () => {
    const [authedUser, setAuthedUser] = React.useState(null);
    const navigate = useNavigate();
    const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
    
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

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    })

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
        
        if(authedUser === null){
            navigate('/');
        }
    }

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return newLocale;
        });
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    const localeContextValue = React.useMemo(() => {
        return {
          locale,
          toggleLocale,
          theme,
          toggleTheme,
        };
      }, [locale,theme]);

    
    if(authedUser === null){
        return (
            <>
                <LocaleContext.Provider value={localeContextValue}>
                    <div className="app-container">
                        <header>
                            <h1>{locale === 'id' ? 'Aplikasi Catatan Harian' : 'Daily Note Apps'}</h1>
                            <NavigationLocale />
                        </header>
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                                <Route path="/register" element={ <RegisterPage /> } />
                            </Routes>
                        </main>
                    </div>
                </LocaleContext.Provider>
            </>
        );
    }

    return (
        <>
            <LocaleContext.Provider value={localeContextValue}>
                <div className="app-container">
                    <header>
                        <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan Harian' : 'Daily Note Apps'}</Link></h1>
                        <Navigation logout={onLogout} name={authedUser.name} toggleLocale={toggleLocale} toggleTheme={toggleTheme}/>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/add" element={<AddPage />} />
                            <Route path="/notes/:id" element={<DetailPage />} />
                            <Route path="/archives" element={<ArchivedPage />} />
                        </Routes>
                    </main>
                </div>
            </LocaleContext.Provider>
        </>
    )
}

export default App;