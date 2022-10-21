import React from "react";
import { FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";

const DeleteButton = ({onDelete, id}) => {
    return(
        <button className="action" type="button" id={id} onClick={() => onDelete(id)}>
            <FiTrash2 />
        </button>
    )
}

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default DeleteButton;