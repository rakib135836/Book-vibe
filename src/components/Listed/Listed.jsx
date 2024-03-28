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

    }

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const filteredBooks = books.filter(book => storedBookIds.includes(book.book_id));
            setListedBooks(filteredBooks);
            setDisplayPost(filteredBooks);
        }
    }, [books]);

    return (

        <div>
                <h1 className="font-bold text-2xl text-center">Books</h1>

            <details className="dropdown ">
                <summary className="bg-green-300 m-1 btn">Short By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={() => handleSortBy('rating')}>Rating</a></li>
                    <li><a onClick={() => handleSortBy('totalPages')}>Number of pages</a></li>
                    <li><a onClick={() => handleSortBy('publishYear')}>publish Year</a></li>
                </ul>
            </details>

            <div className="flex flex-col gap-3">
                {displayPost.map(book => (
                    <ListedBook key={book.book_id} book={book} />
                ))}
            </div>
        </div>

    );
};

export default Listed;

