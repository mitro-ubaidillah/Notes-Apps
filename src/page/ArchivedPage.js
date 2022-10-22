import React from "react";
// import { useSearchParams } from "react-router-dom";
import { getArchiveNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";

const ArchivedPage = () => {
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getArchiveNotes().then(({data}) => {
            setNotes(data);
        });
    }, []);
    
    return (
        <section>
            <h2>Daftar Catatan</h2>
            <NoteList notes={notes} />
            <AddButton />
        </section>
    )
}

export default ArchivedPage;