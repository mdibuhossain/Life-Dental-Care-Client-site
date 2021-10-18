import React from 'react';
import BannerBG from '../components/BannerStyled';

const Home = () => {
    return (
        <header>
            <BannerBG img="/assets/img/banner/banner-1.png">
                <div className="grid grid-cols-2 absolute bottom-0 items-center">
                    <div className="w-10/12 ml-auto text-white">
                        <h3 className="text-3xl font-semibold">Welcome to Life Dental Care</h3>
                        <h1 className="text-7xl font-bold bg-indigo-300 rounded-lg py-4 px-3 bg-opacity-30 my-2">Caring for all your</h1>
                        <h1 className="text-7xl font-bold bg-indigo-300 rounded-lg py-4 px-3 bg-opacity-30 my-2">family's detals needs</h1>
                    </div>
                    <div>
                        <img src="/assets/img/banner/banner-item-1.png" alt="" />
                    </div>
                </div>
            </BannerBG>
        </header>
    );
};

export default Home;