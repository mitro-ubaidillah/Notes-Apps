import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

const NoteList = ({notes}) => {
    return (
            notes.length ? 
            <section className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem
                        key={note.id}
                        id={note.id}
                        archived={note.archived}
                        {...note} />
                    ))
                }
            </section> : 
            <section className="notes-list-empty">
                <p className="notes-list__empty">Tidak ada catatan</p>
            </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;