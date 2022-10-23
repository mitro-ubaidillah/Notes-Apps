import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';
import LocaleContext from "../context/LocaleContext";

const NoteList = ({notes}) => {
    const { locale } = React.useContext(LocaleContext);

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
                <p className="notes-list__empty">{locale === 'id' ? 'Tidak Ada Catatan' : 'Notes Not Found'}</p>
            </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;