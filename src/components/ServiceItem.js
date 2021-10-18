import React from 'react';
import { BiLike } from 'react-icons/bi'
import Tilt from 'react-tilt'

const ServiceItem = ({ service }) => {
    return (
        <Tilt className="tilt-container cursor-pointer">
            <div className="border rounded-t-xl overflow-hidden">
                <div className="h-auto w-auto overflow-hidden">
                    <img className="service-item-img" src={service?.img} alt="" />
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
        </Tilt>
    );
};

export default ServiceItem;