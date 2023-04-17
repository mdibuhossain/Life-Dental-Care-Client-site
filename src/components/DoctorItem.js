import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const DoctorItem = ({ doc }) => {
    return (
        <div className="mx-auto border border-gray-300 rounded-xl p-10 m-2">
            <div className="relative rounded-full overflow-hidden w-36 h-36 border border-gray-700">
                <img className="absolute w-36 h-36" src={doc.img} alt="doctor" />
            </div>
            <div className="text-center my-5">
                <h2 className="text-2xl">{doc.name}</h2>
                <p className="text-blue-500">{doc.specialist}</p>
            </div>
            <div className="flex justify-center items-center text-gray-500 text-xl">
                <FaTwitter />
                <FaLinkedinIn className="mx-3" />
                <FaInstagram />
            </div>
        </div>
    );
};

export default DoctorItem;