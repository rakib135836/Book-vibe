import { FaStar } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {

    const {book_id, tags, bookName, author, category, rating, image } = book;

    return (
        <Link to={`/book/${book_id}`}>

            <div className='flex flex-col p-5 border border-gray-400 border-solid  rounded-lg
         cursor-pointer transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 my-8'>

                <div className=' flex-grow'>
                    <img src={image} alt="" />

                    <div className="flex flex-row gap-5">
                        <p className="text-green-500 text-base font-semibold">{tags[0]}</p>
                        <p className="text-green-500 text-base font-semibold">{tags[1]}</p>
                    </div>
                </div>


                <div>
                    <h1 className='text-2xl font-bold text-black'>{bookName}</h1>
                    <p>By: {author} </p> <hr />

                    <div className='flex flex-row justify-between'>
                        <p> {category} </p>
                        <div className='flex items-center gap-2'>
                            <p> {rating} </p>
                            <FaStar />

                        </div>
                    </div>
                </div>



            </div>

        </Link>
    );
};

SingleBook.propTypes = {
    book: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        book_id:PropTypes.number.isRequired
    }).isRequired
}

export default SingleBook;