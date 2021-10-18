import React from 'react';

const Banner = ({ greeting, title, title2nd, img }) => {
    return (
        <>
            <div className="grid grid-cols-2 absolute bottom-0 items-center">
                <div className="w-10/12 ml-auto text-white">
                    <h3 className="text-3xl font-semibold">{greeting}</h3>
                    <h1 className="text-7xl font-bold bg-indigo-300 rounded-lg py-4 px-3 bg-opacity-30 my-2">{title}</h1>
                    <h1 className="text-7xl font-bold bg-indigo-300 rounded-lg py-4 px-3 bg-opacity-30 my-2">{title2nd}</h1>
                </div>
                <div>
                    <img src={img} alt="banner" />
                </div>
            </div>
        </>
    );
};

export default Banner;