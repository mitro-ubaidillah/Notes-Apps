import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";



const NoteItem = ({title, createdAt, body, id}) => {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default NoteItem;