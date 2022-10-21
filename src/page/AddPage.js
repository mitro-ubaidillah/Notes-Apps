import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";

const AddPage = () => {
    const navigate = useNavigate();

    async function onAddNoteHandler(note){
        await addNote(note);
        navigate('/');
    }

    return (
        <section className="add-new-page">
            <NoteInput note={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;