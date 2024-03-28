import  { useEffect, useState } from 'react';
import { getStoredBooks } from "../../utility/LocalStorage";


const FinalChart = () => {
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        
        const storedBooks = getStoredBooks(); 
        setBookData(storedBooks); 
      }, []);
    return (
        <div>
            <h1>Here is the final chart {bookData}</h1>
            
        </div>
    );
};

export default FinalChart;