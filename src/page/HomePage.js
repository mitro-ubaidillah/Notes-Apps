import React from "react";
import { getNotes } from "../utils/api";
import NoteList from "../components/NoteList";


const HomePage = () => {
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getNotes().then(({data}) => {
            setNotes(data);
        });
    }, []);

    return (
        <section>
            <h2>Daftar Catatan</h2>
            <NoteList notes={notes} />
        </section>
    )
}

export default HomePage;