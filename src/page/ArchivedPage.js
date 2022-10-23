import React from "react";
import { useSearchParams } from "react-router-dom";
import { getArchiveNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../context/LocaleContext";

const ArchivedPage = () => {
    const [notes, setNotes] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale } = React.useContext(LocaleContext);

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
            <h2>{locale === 'id' ? 'Daftar Catatan Arsip' : 'Archive Note Lists'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NoteList notes={filteredNotes} />
            <AddButton />
        </section>
    )
}

export default ArchivedPage;