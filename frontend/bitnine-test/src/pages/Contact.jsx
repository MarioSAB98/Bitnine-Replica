import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="m-4">
                <h1>To contact us please email us at: </h1>
                <Link className="underline text-blue-800 hover:text-red-800 focus:text-purple-800">bitnine@email.com</Link>
            </div>
            <div className="m-4 flex h-full items-end">
                <Link
                    to="/home"
                    className="px-5 py-2 text-white text-xl bg-blue-800 rounded-md hover:bg-blue-900 hover:text-yellow-400 w-fit h-fit m-4"
                >
                    go back
                </Link>
            </div>
        </div>
    );
}

export default ContactPage;