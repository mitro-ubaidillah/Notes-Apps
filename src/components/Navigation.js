import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";

const Navigation = ({ name, logout }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/archives">Arsip</Link></li>
                <li><button>{<FaMoon />}</button></li>
                <li><button>id</button></li>
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    );
}

Navigation.propTypes = {
    name: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
}

export default Navigation;