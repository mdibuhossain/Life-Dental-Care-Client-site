import React from 'react';

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
        </div>
    );
};

export default DoctorItem;