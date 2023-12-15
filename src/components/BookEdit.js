import { useState} from "react";
import useBookContext from "../hooks/usebooks-context";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const { editBookById } = useBookContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, title);
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