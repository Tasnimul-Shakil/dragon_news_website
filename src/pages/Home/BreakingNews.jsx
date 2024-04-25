import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] py-2 px-3 rounded-lg">
            <div className="btn-sm  btn  bg-[#D72050] hover:bg-[#f6d3dc] hover:text-black text-white">Breaking News Info</div>
            <Marquee pauseOnHover={true} speed={100} direction="right" >
                <Link className="mr-12" to='/'>I can be a React component, multiple React components.....
                </Link>
                <Link className="mr-12" to='/'>I can be a React component, multiple React components....
                </Link>
                <Link className="mr-12" to='/'>I can be a React component, multiple React components......
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;