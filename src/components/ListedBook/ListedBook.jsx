import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';
import { FaUserGroup } from "react-icons/fa6";
import { TbBrandPagekit } from "react-icons/tb";
import { Link } from "react-router-dom";


const ListedBook = ({ book }) => {
    const { image, bookName, author, category, tags, publisher, yearOfPublishing, totalPages, rating,book_id } = book;

    return (
        <div className="border border-gray-400 p-4 rounded-lg flex flex-row gap-5 max-h-72 items-center">

            <div>
                <img className="max-h-64" src={image} alt="" />
            </div>

            <div>

                <p className='font-bold text-xl'>{bookName} </p>
                <p>By:{author} </p>

                <div className="flex flex-row gap-5 items-center">
                    <p className="font-bold">Tags</p>
                    <p className="text-green-600">{tags[0]} </p>
                    <p className="text-green-600">{tags[1]}</p>

                    <div className="flex flex-row gap-1 items-center">
                        <CiLocationOn></CiLocationOn>
                        <p> year of publishing: {yearOfPublishing} </p>
                    </div>

                </div>


                <div className="flex flex-row gap-5 items-center">

                    <div className="flex flex-row gap-1 items-center">
                        <FaUserGroup></FaUserGroup>
                        <p> Publisher: {publisher} </p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <TbBrandPagekit></TbBrandPagekit>
                        <p> total pages: {totalPages} </p> <br /> <hr />
                    </div>


                </div>

                <div className="flex flex-row gap-5 items-center">
                    <p className="p-2 rounded-3xl bg-blue-200 text-blue-700">category: {category} </p>
                    <p className="p-2 rounded-3xl bg-orange-100 text-orange-600">rating: {rating} </p>

                    <Link className=" text-white btn-primary bg-green-400 p-3 rounded-3xl" to={`/book/${book_id}`}> view details</Link>

                </div>
            </div>


        </div>
    );
};


ListedBook.propTypes = {
    book: PropTypes.shape({
        image: PropTypes.string,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        review: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        publisher: PropTypes.string,
        yearOfPublishing: PropTypes.number,
        totalPages: PropTypes.number,
        rating: PropTypes.number,
        book_id:PropTypes.number,
    }).isRequired,
};

export default ListedBook;
