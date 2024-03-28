import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <p>a 404 route/not found page</p>
            <Link to={'/'}>go back to Home</Link>
        </div>
    );
};

export default ErrorPage;