
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const {id}= useParams();
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h1 className=' text-3xl'>News details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default News;