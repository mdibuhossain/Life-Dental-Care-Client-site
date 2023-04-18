import React from 'react';

const SectionTitle = ({ subtitle, title }) => {
    return (
        <>
            <div className="text-center my-12">
                <h2 className="text-3xl text-gray-800 font-bold">{title}</h2>
                <h4 className="text-blue-500 font-semibold">{subtitle}</h4>
            </div>
        </>
    );
};

export default SectionTitle;