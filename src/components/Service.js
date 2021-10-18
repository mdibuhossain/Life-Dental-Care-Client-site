import React from 'react';
import useAPI from '../Hook/useAPI';
import ServiceItem from './ServiceItem';

const Service = () => {
    const { serviceList } = useAPI();
    console.log(serviceList);
    return (
        <div className="md:w-10/12 mx-auto">
            {/* <h4 className="text-blue-500 font-semibold">What we do</h4> */}
            <h1 className="text-4xl font-bold text-center">Our services</h1>
            <div className="service-container grid md:grid-cols-4 sm:grid-cols-2 w-9/12 sm:w-full mx-auto gap-14">
                {
                    serviceList.map(item => <ServiceItem key={item.id} service={item} />)
                }
            </div>
        </div>
    );
};

export default Service;