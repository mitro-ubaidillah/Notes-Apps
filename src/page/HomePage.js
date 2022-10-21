import React from "react";
import { getNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";


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
            <AddButton />
        </section>
    )
}

export default HomePage;