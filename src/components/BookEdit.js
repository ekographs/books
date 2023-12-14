import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(book.id, title);
    };

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange} />
        <button className="button is-primary">
            Update
        </button>
    </form>
}

export default BookEdit;