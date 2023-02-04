import React from 'react';
import Product from './Product';
import axios from 'axios';
import './styles.css'

function ProductList(props) {
    const { products } = props;
    if  (Array.isArray(products)) {

    // return products.map((product) => <Product key={product.id} product={product} deleteProduct={props.deleteproduct}/>
    <section>
    {products.map((product) => {
        const {id, name, price, description, category} = product;
    })}
</section>
    

}
    

}
// return <div>No products found</div>
    //    return (
    //     <h1>Products</h1>
       
  


export default ProductList;