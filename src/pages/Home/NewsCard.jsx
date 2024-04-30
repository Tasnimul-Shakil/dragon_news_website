// import { Link } from "react-router-dom";


// const NewsCard = ({news}) => {
//     const {title, image_url, details, _id} =news
//     return (
//         <div className="card w-full bg-base-100 shadow-xl">
//             <div>
//                 <img src="" alt="" />
//             </div>
//             <figure><img src={image_url} alt="Shoes" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">
//                 {title}
//                 <div className="badge badge-secondary">NEW</div>
//                 </h2>
//                 <p>
//                  {
//                      details.length > 200? <p>{details.slice(0,200)}
//                      <Link to={`/news/${_id}`} className=" text-blue-600 font-medium"> read more... </Link></p>
//                      : <p>{details}</p>
//                  }
//                 </p>
//                 <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div> 
//                 <div className="badge badge-outline">Products</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewsCard;


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaRegShareFromSquare, FaStar, FaStarHalfStroke, FaRegEye } from "react-icons/fa6";



const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author, rating, total_view } = news;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className='flex justify-between rounded-t-lg p-4 space-y-3 bg-[#F3F3F3]'>
                <div className=" flex gap-4" >
                    <img className=' w-12 rounded-full ' src={author.img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author.name}</h3>
                        <p className='text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-5 text-xl text-[#706F6F]'>
                    <FaRegBookmark/>
                    <FaRegShareFromSquare/>

                </div>
            </div>
            <h2 className="card-title pl-2 pr-4 py-4">
                    {title}
                </h2>
            <figure ><img src={image_url} alt="News" /></figure>
            <div className="card-body">
                <p>
                    {details.length > 200 ?
                        <>
                            {details.slice(0, 200)}
                            <Link to={`/news/${_id}`} className="text-[#FF8C47] font-semibold"> <br />read more... </Link>
                        </>
                        :
                        <>{details}</>
                    }
                </p>
                <div className="card-actions justify-between border-t-2 pt-2">
                    <div className="flex gap-2 ">
                        <div className='flex text-2xl text-[#FF8C47]'> 
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfStroke/>
                        </div>
                        <p className='text-xl text-[#706F6F]'>{rating.number}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <FaRegEye/>
                        <p className='text-xl text-[#706F6F]'>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            number: PropTypes.number.isRequired,
        }).isRequired,
        total_view: PropTypes.number.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            published_date: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default NewsCard;
