
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getStoredBooks } from "../../utility/LocalStorage";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const FinalChart = () => {

    

    
    const books = useLoaderData();
    const storedBooks = getStoredBooks();

    const selectedBooks = books.filter(book => storedBooks.includes(book.book_id));

    

    return (
        <div>
            <h1>Here is the final chart</h1>
            <BarChart
                width={500}
                height={300}
                data={selectedBooks}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8">
                    {selectedBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default FinalChart;


