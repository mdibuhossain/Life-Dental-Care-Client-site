import React from 'react';
import { Link } from 'react-router-dom';
import { navList } from '../Utilities/utilities'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sm:w-9/12 w-11/12 mx-auto flex flex-col justify-center text-center">
                <div className="my-5 flex flex-wrap justify-center items-center">
                    {
                        navList.map(item => {
                            return (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="my-5">
                    <Link to="/">
                        <img className="w-48 mx-auto" src="/assets/img/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="text-gray-400 mb-5 grid md:grid-cols-2">
                    <p>Developed by Ibrahim Hossain</p>
                    <p>&copy; All rights reserved by Life Dental Care</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;