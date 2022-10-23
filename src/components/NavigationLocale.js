import React from "react";
import { FaMoon } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext from "../context/LocaleContext";

const NavigationLocale = () => {

    const { toggleLocale, toggleTheme } = React.useContext(LocaleContext);

    return (
        <>
            <button className="toggle-locale" onClick={toggleLocale}>{<SiGoogletranslate />}</button>
            <button className="toggle-theme" onClick={toggleTheme}>{<FaMoon />}</button>
        </>
    );
}


export default NavigationLocale;