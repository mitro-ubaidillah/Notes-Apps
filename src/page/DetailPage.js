import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import { archiveNote, deleteNotes, getNote, unarchiveNote } from "../utils/api";

const DetailPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [note, setNote] = React.useState([]);

    React.useEffect(() => {
        getNote(id).then(({data}) => {
            setNote(data);
        });
    }, []);

    async function onDeleteHandler(id) {
        await deleteNotes(id);
        navigate('/');
    }

    async function onArchiveHandler(id) {
        await archiveNote(id);
        navigate('/');
    }
    
    async function unArchiveHandler(id) {
        await unarchiveNote(id);
        navigate('/');
    }


    if(!note) {
        return (
            <section className="notes-list-empty">
                <p className="notes-list__empty">Catatan Tidak ditemukan</p>
            </section>
        )
    }

    return (
        <section className="detail-page">
            <DetailNote id={note.id} title={note.title} body={note.body}
            createdAt={note.createdAt} onDelete={onDeleteHandler} onArchive={onArchiveHandler} unArchive={unArchiveHandler} />
        </section>
    )
}

export default DetailPage;