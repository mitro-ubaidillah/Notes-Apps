import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddButton = () => {
    return (
        <div>
            <Link to="/add">
                <button type="button">{<FiPlus />}</button>
            </Link>
        </div>
    )
}

export default AddButton;