import { useState } from "react";
import { Link } from "react-router-dom";



export default function HomeNavBar() {

    return (
        <>
            <div className="navbar sticky top-10 min-h-0 h-20 bg-white z-10">
                <div className="navbar-start">
                    <img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" className="min-h-0 h- h-14 m-8"></img>
                </div>
                <div className="navbar-center">
                    <div className="join min-h-0">
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="PRODUCTS" defaultChecked />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="USE CASES" />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="SERVICES" />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="RESOURCES" />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="BLOG" />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="COMPANY" />
                        <input className="join-item btn bg-white border-none hover:bg-white hover:text-yellow-400 checked:text-yellow-400 checked:bg-white text-xl" type="radio" name="navbar-items" aria-label="IR" />
                        <Link
                            to="/contact"
                            className="btn min-h-0 h-10 w-26 m-1.5 bg-blue-800 text-white text-lg rounded-md hover:text-yellow-400"
                        >
                            TRY FREE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}