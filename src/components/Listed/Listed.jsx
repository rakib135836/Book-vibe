import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../utility/LocalStorage";
import ListedBook from "../ListedBook/ListedBook";

const Listed = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);
    const [displayPost, setDisplayPost] = useState([]);

    const handleSortBy = (filter) => {
        if (filter === 'rating') {
            const sortedBooks = [...displayPost].sort((a, b) => b.rating - a.rating);
            setDisplayPost(sortedBooks);
        } else if (filter === 'totalPages') {
            const sortedBooks = [...displayPost].sort((a, b) => b.totalPages - a.totalPages);
            setDisplayPost(sortedBooks);
        } else if (filter === 'publishYear') {
            const sortedBooks = [...displayPost].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayPost(sortedBooks);
        }
    };

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const filteredBooks = books.filter(book => storedBookIds.includes(book.book_id));
            setListedBooks(filteredBooks);
            setDisplayPost(filteredBooks);
        }
    }, [books]);

    return (
        <div className="flex flex-col gap-3 my-8">
            <div>
                <button onClick={() => handleSortBy('rating')}>Sort by Rating</button>
                <button onClick={() => handleSortBy('totalPages')}>Sort by Total Pages</button>
                <button onClick={() => handleSortBy('publishYear')}>Sort by Publish Year</button>
            </div>
            {displayPost.map(book => (
                <ListedBook key={book.book_id} book={book} />
            ))}
        </div>
    );
};

export default Listed;





