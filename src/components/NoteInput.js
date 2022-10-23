import React from "react";
import { BiCheck } from "react-icons/bi";
import useInput from "./hooks/useInput";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

const NoteInput = ({ note }) => {
    const [title, onTitleChange] = useInput('');
    const [body, setBody] = React.useState('');
    const { locale } = React.useContext(LocaleContext);

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
                    <input type="text" className="add-new-page__input__title" placeholder={locale === 'id' ? 'Catatan rahasia' : 'Secret Notes'} value={title} onChange={onTitleChange} />
                    <div className="add-new-page__input__body" data-placeholder={locale === 'id' ? 'Sebenarnya saya adalah....' : 'Actually I am...'}  contentEditable onInput={onBodyChange} />
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