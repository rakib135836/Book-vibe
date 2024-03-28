import { NavLink } from "react-router-dom";
import image from '../../assets/banner/banner.jpg';

const Banner = () => {
    return (
        <div className=' border border-solid border-gray-700 rounded-xl my-9 p-4 bg-gray-300 '>

            <div className=" flex flex-col  lg:flex-row-reverse items-center justify-center gap-4">
                <div>
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />
                    your bookshelf</h1>





                    <NavLink className="btn bg-green-500 capitalize my-8" to={'/listed-books'}>Listed Books</NavLink>

                </div>
            </div>

        </div>
    );
};

export default Banner;






