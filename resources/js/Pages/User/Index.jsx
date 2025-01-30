import React from 'react';
import { Link } from '@inertiajs/react';

function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 left-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" type="button" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <Link className="text-2xl font-bold text-white" href="/">LARAVEL + INERTIA.JS</Link>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/posts/">POSTS</Link>
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="https://santrikoding.com/ebook" target="_blank">EBOOK</a>
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="https://santrikoding.com/tutorial-set" target="_blank">TUTORIAL SET</a>
                                </div>
                            </div>
                            <form className="d-flex">
                                <input className="form-input px-4 py-2 rounded-l-md text-sm bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="mt-24 container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </>
    );
}

export default Layout;
