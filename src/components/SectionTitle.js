import React from 'react';

const SectionTitle = ({ subtitle, title }) => {
    return (
        <>
            <div className="text-center my-20">
                <h4 className="text-blue-500 font-semibold">{subtitle}</h4>
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
        </>
    );
};

export default SectionTitle;