import React from 'react';
import Product from './Product';
import './styles.css'

function ProductList(props) {
    const { products } = props;
    return (
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
       
    );
}

export default ProductList;