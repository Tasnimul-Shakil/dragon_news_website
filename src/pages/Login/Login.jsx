import LoginPageImg from '../../assets/login_pic.png'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


const Login = () => {

    const navLinks = 
    <>
        <li className=" px-2"><NavLink to="/">Home</NavLink></li>
        <li className=" px-2"><NavLink to="/register">Register</NavLink></li>
        <li className=" px-2"><NavLink to="/login">Login</NavLink></li> 
    </>
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        console.log(from.get('email'), from.get('password'));
    }

    return (
        <div className="min-h-screen bg-[#F4FBFF]">
            <div className="navbar absolute ">
                <div className="navbar-start">      
                </div>
                <div className="navbar-end lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
            </div>
            <div className="hero-content mx-auto flex-col gap-10 lg:flex-row">
                <div className="hidden lg:block text-center">
                    <img src={LoginPageImg} alt="" />
                </div>
                <div className=" w-full lg:w-1/2 lg:p-10">
                    <form onSubmit={handleLogin} className="">
                        <h1 className='text-5xl pt-20 lg:pt-0 font-bold'>Sign In</h1>
                        <div className='pt-10'>
                            <h2>Sign in with Open account</h2>
                            <div className="mb-6 flex gap-5">
                                <button className="btn btn-outline mt-3">
                                    <FcGoogle className="text-xl"></FcGoogle>
                                    Google
                                </button>
                                <button className="btn btn-outline mt-3">
                                    <FaGithub className="text-xl"></FaGithub>
                                    GitHub
                                </button>
                            </div>
                        </div>
                        <div className="form-control border-t-2 pt-2 mt-8">
                            <h2>Or Continue with email address</h2>
                            <label className="label">
                                <span className="font-medium pt-2">Email</span>
                            </label>
                            <div className="input input-bordered flex gap-2 items-center">
                                <span className="text-sm text-[#ababab]">
                                <MdMailOutline className="text-xl"></MdMailOutline>
                                </span>
                                <input 
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className='w-full' 
                                required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" font-medium pt-2">Password</span>
                            </label>
                            <div className="input input-bordered flex gap-2 items-center">
                                <span className="text-sm text-[#ababab]">
                                <MdOutlinePassword className="text-xl"></MdOutlinePassword>
                                </span>
                                <input 
                                type="password"
                                name="password"
                                placeholder="Add a AlphaNumeric password"
                                className='w-full' 
                                required />
                            </div>
                            <label className="label">
                                <a href="#" className=" pt-2 label-text link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-xl">Sign In</button>
                        </div>
                    </form>
                    <div className="pt-10">
                        <p className="label-text">Do not have any account? 
                        <Link to='/register' className=' font-semibold link-hover'> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;