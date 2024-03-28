import { useLoaderData, useParams } from "react-router-dom";

// ----------------for toast--
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// ----------------for toast--



const BookDetails = () => {
  const books = useLoaderData();
  const { book_id } = useParams();
  const idInt = parseInt(book_id);
  const book = books.find(book => book.book_id === idInt)
  console.log(book)
 

// ---------------------------------

const [clickCount1, setClickCount1] = useState(0);
const [clickCount2, setClickCount2] = useState(0);

const notify = (buttonNumber) => {
  if (buttonNumber === 1) {
    if (clickCount1 % 2 === 0) {
      toast("book added to the list");
    } else {
      toast("the book is added already");
    }
    setClickCount1(prevCount => prevCount + 1);
  } else if (buttonNumber === 2) {
    if (clickCount2 % 2 === 0) {
      toast("book added to the wish list");
    } else {
      toast("the book is added already");
    }
    setClickCount2(prevCount => prevCount + 1);
  }
};

// ---------------------------------


  return (
    <div>

      <div className="card  card-side bg-base-100 shadow-xl">
        <figure><img src={book.image} alt="Movie" /></figure>
        <div className="card-body">

          <h2 className="card-title">{book.bookName}</h2>
          <p>By : {book.author}</p> <br /> <hr />
          <p className="font-bold">{book.category}</p>

          <span  className="font-bold"> review</span> <p>{book.review}</p>

          <div className="flex flex-row ">
               <p className="font-bold">Tags</p>
               <p className="text-green-600">#{book.tags[0]}</p>
               <p className="text-green-600">#{book.tags[1]}</p>
          </div><br />

          <table>
            <tr>
              <td>Number of pages:</td>
              <td className="font-bold">{book.totalPages} </td>
            </tr>
            <tr>
              <td>Publisher:</td>
              <td className="font-bold">{book.publisher} </td>
            </tr>
            <tr>
              <td>Year of publish:</td>
              <td className="font-bold">{book.yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td className="font-bold">{book.rating} </td>
            </tr>
          </table>




          <div className="card-actions ">
            <button onClick={() => notify(1)} className="btn btn-primary">read</button>
            <button onClick={() => notify(2)} className="btn btn-primary">wish list</button>
            <ToastContainer />
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default BookDetails;