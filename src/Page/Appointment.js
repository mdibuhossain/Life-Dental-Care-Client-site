import React from 'react';
import Mapbox from '../components/Mapbox';
import SectionTitle from '../components/SectionTitle';

const Appointment = () => {
    return (
        <div className="sm:w-9/12 w-11/12 mx-auto fullPage">
            <SectionTitle title="Appointment" />
            <hr />
            <SectionTitle />

            <div className="mt-10 sm:mt-0 grid sm:grid-cols-2 gap-10">
                <div className="md:grid">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div>
                            <div className="shadow-lg overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-3 py-2 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Mobile number
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                id="mobile"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-3 py-2 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-3 py-2 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <textarea
                                                type="text"
                                                name="message"
                                                id="message"
                                                style={{ height: '210px' }}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border px-3 py-2 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <Mapbox />
                </div>
            </div>



            <SectionTitle />
        </div>
    );
};

export default Appointment;