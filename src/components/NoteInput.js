import React from "react";
import { BiCheck } from "react-icons/bi";
import useInput from "./hooks/useInput";
import PropTypes from "prop-types";

const NoteInput = ({ note }) => {
    const [title, onTitleChange] = useInput('');
    const [body, setBody] = React.useState('');

    const onBodyChange = (event) => {
        setBody(event.target.innerHTML);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        note({ title, body });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="add-new-page">
                <div className="add-new-page__input">
                    <input type="text" className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={onTitleChange} />
                    <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah...." contentEditable onInput={onBodyChange} />
                </div>
            </div>
            <div className="add-new-page__action">
                <button className="action" type="submit" title="Simpan"><BiCheck /></button>
            </div>
        </form>
    )
}

NoteInput.propTypes = {
    note: PropTypes.func.isRequired,
}

export default NoteInput;