import React from "react";
import { getNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
    const [notes, setNotes] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });

    React.useEffect(() => {
        getNotes().then(({ data }) => {
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
        <section className="homepage">
            <h2>Daftar Catatan</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NoteList notes={filteredNotes} />
            <AddButton />
        </section>
    )
}

export default HomePage;