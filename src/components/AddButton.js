import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddButton = () => {
    return (
        <div className="homepage__action">
            <Link to="/add">
                <button type="button" className="action">{<FiPlus />}</button>
            </Link>
        </div>
    )
}

export default AddButton;