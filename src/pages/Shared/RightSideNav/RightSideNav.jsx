import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import addNews from "../../../assets/bg.png"





const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold">Login</h2>
                <button className="btn btn-outline w-full mt-3">
                    <FcGoogle className="lg:text-xl"></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full lg:mt-3">
                    <FaGithub className="lg:text-xl"></FaGithub>
                    Login with GitHub
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className=" space-x-0">
                <a className="text-[#706F6F] lg:text-xl p-3 gap-3 flex items-center border-2  rounded-t-lg" href="">
                    <FaFacebook className="lg:text-2xl text-[#3B599C]"></FaFacebook>
                    Facebook
                </a>
                <a className="text-[#706F6F] lg:text-xl p-3 gap-3 flex items-center border-x-2 " href="">
                    <FaXTwitter className="lg:text-2xl "></FaXTwitter>
                    Twitter 
                </a>
                <a className="text-[#706F6F] lg:text-xl p-3 gap-3 flex items-center border-2  rounded-b-lg" href="">
                    <FaInstagram />
                    Instagram
                </a>
                </div>
            </div>
            <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div className='h-[31.8125rem] text-center flex flex-col justify-center gap-8 p-6 rounded-lg' style={{ backgroundImage: `url(${addNews})` }}>
                <h1 className="text-white text-3xl font-bold text-center">Create an Amazing <br /> Newspaper</h1>
                <p className="text-white text-sm text-center">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn bg-[#D72050] text-white border-0 hover:bg-[#d72051be]">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;