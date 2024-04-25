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

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div>
                <img src="" alt="" />
            </div>
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                    {details.length > 200 ?
                        <>
                            {details.slice(0, 200)}
                            <Link to={`/news/${_id}`} className="text-blue-600 font-medium"> read more... </Link>
                        </>
                        :
                        <>{details}</>
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
        _id: PropTypes.string.isRequired
    }).isRequired
};

export default NewsCard;
