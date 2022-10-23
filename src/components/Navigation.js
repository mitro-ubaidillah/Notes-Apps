import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext from "../context/LocaleContext";

const Navigation = ({ name, logout }) => {
    const {locale, toggleLocale, toggleTheme} = React.useContext(LocaleContext);

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archived'}</Link></li>
                </ul>
            </nav>
            <button className="toggle-locale" onClick={toggleLocale}>{<SiGoogletranslate />}</button>
            <button className="toggle-theme" onClick={toggleTheme}>{<FaMoon />}</button>
            <button className="button-logout" onClick={logout}>{name} <FiLogOut /></button>
        </>
    );
}

Navigation.propTypes = {
    name: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
    toggleLocale: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired
}

export default Navigation;