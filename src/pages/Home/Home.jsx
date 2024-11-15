import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from './NewsCard';


const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div className="max-w-7xl mx-auto px-5">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftSideNav/>
                </div>
                <div className="md:col-span-2 p-3 space-y-5 border">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews.id}
                            news={aNews} 
                        ></NewsCard>)
                    }
                </div>
                <div className=" border">
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;