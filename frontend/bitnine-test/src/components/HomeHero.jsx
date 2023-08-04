import React from 'react'
import { Link } from 'react-router-dom';

const HomeHero = () => {
    return (
        <div className="hero min-h-full bg-white flex flex-col items-center mb-0">
            <div className="hero-content text-center">
                <div className=" max-w-xl">
                    <div className="flex flex-col items-center m-8">
                        <img src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"></img>
                    </div>
                    <p className="text-xl font-bold text-gray-700">An integration of Bitnine’s DB technology and PG expertise</p>
                    <p className="py-3 text-gray-500 text-md">AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise and knowledge accumulated through database research and development.</p>
                    <p className="py-3 text-gray-500 text-md">The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures the efficiency and scalability of data management.</p>
                    <p className="py-3 text-gray-500 text-md">Get AgensSQL now for stable operation and management services at a reduced maintenance cost.</p>
                    <div className="join rounded-none m-8">
                        <Link
                            to="/contact"
                            className="btn join-item min-h-0 h-10 w-26 m-4 mb-0 bg-blue-800 text-white text-lg hover:text-yellow-400 hover:bg-blue-900 rounded-md"
                        >
                            CONTACT
                        </Link>
                        <Link
                            to="/brochure"
                            className="btn join-item min-h-0 h-10 w-26 m-4 mb-0 bg-blue-800 text-white text-lg hover:text-yellow-400 hover:bg-blue-900 rounded-md"
                        >
                            BROCHURE
                        </Link>
                        <Link
                            to="/blog"
                            className="btn join-item min-h-0 h-10 w-26 m-4 mb-0 bg-blue-800 text-white text-lg hover:text-yellow-400 hover:bg-blue-900 rounded-md"
                        >
                            BLOG
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;