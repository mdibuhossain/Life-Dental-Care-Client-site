import React from 'react';
import { FaCartPlus } from 'react-icons/fa'

const Product = ({ product }) => {
    return (
        <div className="border rounded-xl overflow-hidden transform  duration-200 hover:shadow-lg sm:hover:scale-105">
            <img className="w-full" src={product.img} alt="product" />
            <div className="flex flex-col justify-around">
                <div className="p-3">
                    <h1 className="truncate text-2xl hover:text-blue-500 duration-200">{product.name}</h1>
                    <p className="my-1">${product.price}.00</p>
                </div>
                <div className="text-center  w-full">
                    <button className="flex items-center justify-center py-2 w-full border-t hover:bg-indigo-300 duration-300"><FaCartPlus className="inline-block mr-2" /> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;