import React from 'react';
import { BiLike } from 'react-icons/bi'
import { useParams } from 'react-router';
import SectionTitle from '../components/SectionTitle';
import useAPI from '../Hook/useAPI';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const { serviceList } = useAPI();
    const currentService = serviceList.find(item => item.id === serviceID);
    // console.log(currentService);
    return (
        <div className="sm:w-9/12 w-11/12 mx-auto fullPage">
            <SectionTitle
                title={currentService?.title}
            />
            <hr />
            <SectionTitle />
            <div className="grid sm:grid-cols-2">
                <div>
                    <img src={currentService?.img} alt="" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold my-5">Service details</h3>
                    <table className="min-w-full divide-y divide-gray-200 text-gray-500">
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-3">Likes:</td>
                                <td className="py-3 flex items-center">{currentService?.likes} <BiLike className="inline-block ml-2" /></td>
                            </tr>
                            <tr>
                                <td className="py-3">Date:</td>
                                <td className="py-3">{currentService?.date}</td>
                            </tr>
                            <tr>
                                <td className="py-3">Categories:</td>
                                <td className="py-3">
                                    {
                                        currentService?.category.map((cat, index) => {
                                            return (
                                                <span key={index} className="mr-2 text-blue-500">{cat}</span>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3">Author:</td>
                                <td className="py-3">{currentService?.author}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="sm:w-2/4 w-100">
                <h3 className="text-xl font-semibold my-5">Description</h3>
                <p className="text-gray-500">{currentService?.description}</p>
            </div>
            <SectionTitle />
        </div>
    );
};

export default ServiceDetail;