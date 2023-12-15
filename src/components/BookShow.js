import { useState} from "react";
import useBookContext from "../hooks/usebooks-context";
import BookEdit from "./BookEdit";

function BookShow({ book}) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBookContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditCLick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return <div className="book-show">
        <img
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/200/300`}
        />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditCLick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>;
}

export default BookShow;