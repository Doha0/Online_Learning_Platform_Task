import React, { useContext, useState } from 'react';
import Logo from '../Logo/Logo';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <Link className="relative mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
            <input type="text" className="searchInput" placeholder="Search" />
        </Link>
        <Link to="/">
            <button className="navItems">
                Courses
            </button>
        </Link>
        <Link to="/">
            <button className="navItems">
                Dashboard
            </button>
        </Link>
    </>

    const loginLogout = <>
        {user ? (
            <>
                {user && (
                    <button type="button">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                        </div>
                    </button>
                )}
                <Link onClick={handelLogout}>
                    <button type='button' className="p-2 w-32 rounded-full bg-[#5EC38B] text-white border shadow">
                        Logout
                    </button>
                </Link>
            </>
        ) : (
            <Link to="/login">
                <button className="p-2 w-32 rounded-full bg-[#5EC38B] text-white border shadow">
                    Login
                </button>
            </Link>
        )}
    </>

    return (
        <nav x-data={{ isOpen: false }} className="relative primary-bg">
            <div className="container px-4 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link>
                            <Logo />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                x-cloak='true'
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        x-cloak='true'
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out primary-bg lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
                    >
                        <div className="heading-font font-semibold text-black flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {
                                navItems
                            }
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button className="hidden mx-4 text-gray-600 transition-colors ease-in-out duration-150 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                                <ThemeToggler />
                            </button>


                            <div className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                {
                                    loginLogout
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;