import React from 'react';
import Product from './Product';
import './styles.css'

function ProductList(props) {
    // const { products } = props;
    // return (
    //         <div>
    //             {products.map((product) => (
    //                 <Product key={product.id} product={product} />
    //             ))}
    //         </div>
    //     )
    return props.product.map((product) => <Product key={product.id} product={product} addProduct={props.addProduct}/>);
       
  
}

export default ProductList;