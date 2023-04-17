import React from 'react';
import useAPI from '../Hook/useAPI';
import DoctorItem from './DoctorItem';
import SectionTitle from './SectionTitle';
import { NavLink } from 'react-router-dom';

const FeaturedDoctor = () => {
    const { doctorList } = useAPI();
    // return (
    //     <div id="doctors" className="md:w-10/12 w-9/12 mx-auto">
    //         <SectionTitle
    //             title="Meet Our Doctors"
    //             subtitle="Team of Professionals"
    //         />
    //         <div className="grid md:grid-cols-3 sm:gap-y-0 gap-y-5">
    //             {
    //                 doctorList.map(doc => <DoctorItem key={doc.id} doc={doc} />)
    //             }
    //         </div>
    //         <SectionTitle />
    //     </div>
    // );
    return (
        <div className="flex lg:flex-row flex-col">
            <div className="lg:w-8/12 px-6 lg:py-5">
                <div className="lg:w-8/12 sm:w-9/12 lg:float-right sm:mx-auto mt-14">
                    <p className="text-4xl mb-3 font-light text-gray-800"><span className="font-bold">Jenna</span> Berg</p>
                    <p className="text-xs tracking-widest text-blue-500">PROFESSIONAL DENTIST</p>
                    <p className="mt-12 text-gray-800 text-sm tracking-wider">
                        <strong>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem
                        </strong>
                    </p>
                    <p className="mt-4 mb-16 text-xs tracking-wider leading-6 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem non sapien condimentum aliquet. Nulla facilisi. Mauris efficitur dolor dolor, id porta nulla interdum vitae.
                    </p>
                    <NavLink to="/doctors">
                        <button
                            className="bg-purple-500 hover:bg-transparent border-blue-500 border-2 hover:text-gray-800 duration-300 ease-in-out text-white font-bold py-3 px-5 rounded-full text-sm"
                        >
                            View All Doctors
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <img className="w-auto inline-block" src="assets/img/dentists/d-4.jpg" />
            </div>
        </div>
    )
};

export default FeaturedDoctor;