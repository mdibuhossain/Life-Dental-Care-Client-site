import { getByTitle } from '@testing-library/dom';
import React from 'react';
import useAPI from '../Hook/useAPI';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

const Service = () => {
    const { serviceList } = useAPI();
    return (
        <div className="md:w-10/12  w-9/12 mx-auto mb-20">
            <SectionTitle
                title="Our services"
                subtitle="What we do?"
            />
            <div className="grid md:grid-cols-4 sm:grid-cols-2 mx-auto gap-14">
                {
                    serviceList.map(item => <ServiceItem key={item.id} service={item} />)
                }
            </div>
        </div>
    );
};

export default Service;