import Header from "../Shared/Header/Header";
import Navbar from '../Shared/Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h1 className=" font-poppins font-bold text-xl">This is Home page</h1>
        </div>
    );
};

export default Home;