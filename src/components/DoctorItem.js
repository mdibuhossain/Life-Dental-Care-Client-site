import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const DoctorItem = ({ doc }) => {
    return (
        <div className="mx-auto border rounded-xl p-10">
            <div className="overflow-hidden">
                <img className="rounded-full mx-auto" src={doc.img} alt="doctor" />
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