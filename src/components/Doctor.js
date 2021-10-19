import React from 'react';
import useAPI from '../Hook/useAPI';
import DoctorItem from './DoctorItem';
import SectionTitle from './SectionTitle';

const Doctor = () => {
    const { doctorList } = useAPI();
    return (
        <div id="doctors" className="md:w-10/12 w-9/12 mx-auto">
            <SectionTitle
                title="Meet Our Doctors"
                subtitle="Team of Professionals"
            />
            <div className="grid md:grid-cols-3 sm:gap-y-0 gap-y-5">
                {
                    doctorList.map(doc => <DoctorItem key={doc.id} doc={doc} />)
                }
            </div>
            <SectionTitle />
        </div>
    );
};

export default Doctor;