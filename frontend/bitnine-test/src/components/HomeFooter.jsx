import React from 'react'
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer className="footer p-10 bg-white text-base-content mt-80">
                <div>
                    <span className="footer-title">PRODUCTS</span>
                    <a className="link link-hover">Relational Database</a>
                    <a className="link link-hover">Graph Database</a>
                    <a className="link link-hover">Graph-Based Solution</a>
                </div>
                <div>
                    <span className="footer-title link link-hover">USE CASES</span>
                </div>
                <div>
                    <span className="footer-title link link-hover">SERVICES</span>
                </div>
                <div>
                    <span className="footer-title">RESOURCES</span>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Learn</a>
                </div>
                <div>
                    <span className="footer-title link link-hover">BLOG</span>
                </div>
                <div>
                    <span className="footer-title">COMPANY</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-white text-base-content">
                <div className="items-center grid-flow-col">
                    <p>2023 by Bitnine Global Inc. All Rights Reserved.</p>
                </div>
                <div className="flex w-full justify-end">
                    <Link
                        to="/contact"
                        className="btn min-h-0 h-8 w-24 mx-1"
                    >
                        Contact
                    </Link>
                    <div className="join min-h-0">
                        <Link to="https://github.com/bitnine-oss/agensgraph">
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
                        </Link>
                        <Link to="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber">
                            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
                        </Link>
                        <Link to="https://www.linkedin.com/company/bitnineglobal/">
                            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
                        </Link>
                        <Link to="https://www.facebook.com/bitninesns/">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
                        </Link>
                        <Link to="https://blog.naver.com/bitnine9">
                            <img src="https://cdn-icons-png.flaticon.com/128/11423/11423248.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default HomeFooter;