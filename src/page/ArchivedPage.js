import React from "react";
import { useSearchParams } from "react-router-dom";
import { getArchiveNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";

const ArchivedPage = () => {
    const [notes, setNotes] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });

    React.useEffect(() => {
        getArchiveNotes().then(({data}) => {
            setNotes(data);
        });
    }, []);
    
    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    return (
        <section>
            <h2>Daftar Catatan Arsip</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NoteList notes={filteredNotes} />
            <AddButton />
        </section>
    )
}

export default ArchivedPage;