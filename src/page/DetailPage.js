import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import LocaleContext from "../context/LocaleContext";
import { archiveNote, deleteNotes, getNote, unarchiveNote } from "../utils/api";

const DetailPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [note, setNote] = React.useState([]);
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getNote(id).then(({data}) => {
            setNote(data);
        });
    }, [id]);

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


    if(note.length === 0) {
        return (
            <section className="notes-list-empty">
                <p className="notes-list__empty">{locale === 'id' ? 'Catatan Tidak Ditemukan' : 'Note Not found'}</p>
            </section>
        )
    }

    return (
        <section className="detail-page">
            <DetailNote
               {...note} 
                onDelete={onDeleteHandler} 
                onArchive={onArchiveHandler} 
                unArchive={unArchiveHandler} 
            />
        </section>
    )
}

export default DetailPage;