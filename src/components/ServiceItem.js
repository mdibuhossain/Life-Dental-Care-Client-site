import React from 'react';
import { BiLike } from 'react-icons/bi'

const ServiceItem = ({ service }) => {
    console.log(service);
    return (
        <div className="overflow-hidden border rounded-lg">
            <div className="h-auto overflow-hidden">
                <img className="transform duration-500 hover:scale-150" src={service?.img} alt="" />
            </div>
            <div className="p-4">
                <div>
                    <p>{service?.title}</p>
                    {
                        service?.category.map((cat, index) => {
                            return (
                                <span key={index} className="mr-2 text-blue-500">{cat}</span>
                            )
                        })
                    }
                </div>
                <div className="text-gray-500">
                    <BiLike className="inline-block" /> {service.likes}
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;