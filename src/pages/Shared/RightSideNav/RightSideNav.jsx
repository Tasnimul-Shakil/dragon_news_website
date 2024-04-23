import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
                    <FcGoogle className="text-xl"></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full mt-3">
                    <FaGithub className="text-xl"></FaGithub>
                    Login with GitHub
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className=" space-x-0">
                <a className="text-[#706F6F] text-xl p-3 gap-3 flex items-center border-2  rounded-t-lg" href="">
                    <FaFacebook className="text-2xl text-[#3B599C]"></FaFacebook>
                    Facebook
                </a>
                <a className="text-[#706F6F] text-xl p-3 gap-3 flex items-center border-x-2 " href="">
                    <FaXTwitter className="text-2xl "></FaXTwitter>
                    Twitter 
                </a>
                <a className="text-[#706F6F] text-xl p-3 gap-3 flex items-center border-2  rounded-b-lg" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none">
                    <path d="M12.3625 3.45625C12.3625 4.0465 11.884 4.525 11.2937 4.525C10.7035 4.525 10.225 4.0465 10.225 3.45625C10.225 2.866 10.7035 2.3875 11.2937 2.3875C11.884 2.3875 12.3625 2.866 12.3625 3.45625Z" fill="url(#paint0_linear_0_150)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 10.9375C9.34251 10.9375 10.9375 9.34251 10.9375 7.375C10.9375 5.40749 9.34251 3.8125 7.375 3.8125C5.40749 3.8125 3.8125 5.40749 3.8125 7.375C3.8125 9.34251 5.40749 10.9375 7.375 10.9375ZM7.375 9.5125C8.55551 9.5125 9.5125 8.55551 9.5125 7.375C9.5125 6.19449 8.55551 5.2375 7.375 5.2375C6.19449 5.2375 5.2375 6.19449 5.2375 7.375C5.2375 8.55551 6.19449 9.5125 7.375 9.5125Z" fill="url(#paint1_linear_0_150)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 7.09C0.25 4.69578 0.25 3.49866 0.715947 2.58419C1.12581 1.7798 1.7798 1.12581 2.58419 0.715947C3.49866 0.25 4.69578 0.25 7.09 0.25H7.66C10.0542 0.25 11.2513 0.25 12.1658 0.715947C12.9702 1.12581 13.6242 1.7798 14.0341 2.58419C14.5 3.49866 14.5 4.69578 14.5 7.09V7.66C14.5 10.0542 14.5 11.2513 14.0341 12.1658C13.6242 12.9702 12.9702 13.6242 12.1658 14.0341C11.2513 14.5 10.0542 14.5 7.66 14.5H7.09C4.69578 14.5 3.49866 14.5 2.58419 14.0341C1.7798 13.6242 1.12581 12.9702 0.715947 12.1658C0.25 11.2513 0.25 10.0542 0.25 7.66V7.09ZM7.09 1.675H7.66C8.88063 1.675 9.71039 1.67611 10.3518 1.72851C10.9765 1.77955 11.296 1.87207 11.5189 1.98563C12.0551 2.25887 12.4911 2.69486 12.7644 3.23113C12.8779 3.454 12.9704 3.77349 13.0215 4.39823C13.0739 5.03961 13.075 5.86937 13.075 7.09V7.66C13.075 8.88063 13.0739 9.71039 13.0215 10.3518C12.9704 10.9765 12.8779 11.296 12.7644 11.5189C12.4911 12.0551 12.0551 12.4911 11.5189 12.7644C11.296 12.8779 10.9765 12.9704 10.3518 13.0215C9.71039 13.0739 8.88063 13.075 7.66 13.075H7.09C5.86937 13.075 5.03961 13.0739 4.39823 13.0215C3.77349 12.9704 3.454 12.8779 3.23113 12.7644C2.69486 12.4911 2.25887 12.0551 1.98563 11.5189C1.87207 11.296 1.77955 10.9765 1.72851 10.3518C1.67611 9.71039 1.675 8.88063 1.675 7.66V7.09C1.675 5.86937 1.67611 5.03961 1.72851 4.39823C1.77955 3.77349 1.87207 3.454 1.98563 3.23113C2.25887 2.69486 2.69486 2.25887 3.23113 1.98563C3.454 1.87207 3.77349 1.77955 4.39823 1.72851C5.03961 1.67611 5.86937 1.675 7.09 1.675Z" fill="url(#paint2_linear_0_150)"/>
                    <defs>
                    <linearGradient id="paint0_linear_0_150" x1="7.375" y1="0.25" x2="7.375" y2="14.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0625" stop-color="#D82D7E"/>
                    <stop offset="1" stop-color="#FBA756"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_150" x1="7.375" y1="0.25" x2="7.375" y2="14.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0625" stop-color="#D82D7E"/>
                    <stop offset="1" stop-color="#FBA756"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_150" x1="7.375" y1="0.25" x2="7.375" y2="14.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0625" stop-color="#D82D7E"/>
                    <stop offset="1" stop-color="#FBA756"/>
                    </linearGradient>
                    </defs>
                    </svg>
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