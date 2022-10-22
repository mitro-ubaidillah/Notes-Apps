import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";


const DetailNote = ({title, createdAt, body, archived, onArchive, onDelete, id, unArchive}) => {
    return(
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
            <section className="detail-page__action">
                <ArchiveButton id={id} onArchive={onArchive} archived={archived} unArchive={unArchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </section>
        </>
    );
}

DetailNote.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
    unArchive: PropTypes.func.isRequired,
}

export default DetailNote;