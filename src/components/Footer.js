import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsFacebook, BsTwitter, BsLinkedin, BsDribbble } from 'react-icons/bs';
import { navList } from '../Utilities/utilities'

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="sm:w-9/12 w-11/12 mx-auto grid sm:grid-cols-3 text-center">
                <div className="my-5">
                    <Link to="/">
                        <img className="w-56 sm:mx-auto" src="/assets/img/logo.svg" alt="logo" />
                    </Link>
                    <div className="flex sm:justify-center items-center my-5 text-2xl">
                        <BsFacebook className="mx-2" />
                        <BsTwitter className="mx-2" />
                        <BsLinkedin className="mx-2" />
                        <BsDribbble className="mx-2" />
                    </div>
                </div>
                <div className="my-5 flex flex-col text-left">
                    <p className="mb-2">Pages</p>
                    {
                        navList.map(item => {
                            return (
                                <HashLink
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-300 hover:text-white py-1 text-sm font-medium"
                                >
                                    {item.name}
                                </HashLink>
                            )
                        })
                    }
                </div>
                <div className="my-5 text-left">
                    <p className="mb-2">Address</p>
                    <div className="font-semibold text-gray-300">
                        <p>Life Dental Care</p>
                        <p>#2/32, Nikunjo-2</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="sm:w-9/12 w-11/12 text-gray-400 mt-5 mx-auto text-center">
                <p>Developed by <a className="font-semibold" target="_blank" rel="noreferrer" href="https://github.com/mdibuhossain">Ibrahim Hossain</a></p>
                <hr className="border-gray-600 my-2" />
                <p>&copy; 2021 All rights reserved by Life Dental Care</p>
            </div>
        </div>
    );
};

export default Footer;