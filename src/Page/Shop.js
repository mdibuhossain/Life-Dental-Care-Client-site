import React from 'react';
import Product from '../components/Product';
import SectionTitle from '../components/SectionTitle';
import useAPI from '../Hook/useAPI';

const Shop = () => {
    const { productList } = useAPI();
    return (
        <div className="sm:w-9/12 w-11/12 mx-auto fullPage">
            <SectionTitle title="Shop" />
            <hr />
            <SectionTitle />
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
                {
                    productList.map(product => <Product key={product.id} product={product} />)
                }
            </div>
            <SectionTitle />

        </div>
    );
};

export default Shop;