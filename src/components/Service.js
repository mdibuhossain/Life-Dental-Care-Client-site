import React from 'react';
import useAPI from '../Hook/useAPI';
import ServiceItem from './ServiceItem';

const Service = () => {
    const { serviceList } = useAPI();
    console.log(serviceList);
    return (
        <div>
            <h4 className="text-blue-500 font-semibold">What we do</h4>
            <h1 className="text-4xl font-bold">Our services</h1>
            <div className="service-container gap-3">
                {
                    serviceList.map(item => <ServiceItem key={item.id} service={item} />)
                }
            </div>
        </div>
    );
};

export default Service;