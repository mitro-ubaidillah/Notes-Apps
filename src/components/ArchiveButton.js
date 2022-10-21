import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";

const ArchiveButton = ({id, onArchive, unArchive, archived}) => {
    return (
        <button className="action" type="button" title={archived ? "Aktif" : "Arsip"}
        onClick={() => {archived ? unArchive(id) : onArchive(id)}} archived={archived ? 'false' : undefined}>
            {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    unArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default ArchiveButton;