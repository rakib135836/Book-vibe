import image from '../../assets/banner/banner.jpg';

const Banner = () => {
    return (
        <div className='my-8'>
            <div className="hero rounded-xl bg-base-200 px-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>

                        
                        
                        <button  className="btn bg-green-500 capitalize my-8">view the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;






     