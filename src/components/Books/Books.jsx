import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";


const Books = () => {

    const [books, setBooks]=useState([]);

    useEffect( ()=>{

        fetch('Books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[] )

    return (
        <div>
            <div>
                <h1 className="capitalize text-center text-2xl font-bold"> books </h1>
            </div>

            <div  className="grid grid-cols-3 gap-7">
               {
                 books.map(book=> <SingleBook key={book.id} book={book}></SingleBook>)
               }
            </div>


        </div>
    );
};

export default Books;