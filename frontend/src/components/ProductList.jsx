import React from 'react';
import Product from './Product';
import './styles.css'

function ProductList(props) {
    const { products } = props;
    if  (Array.isArray(products)) {
    // return (
    //         <div>
    //             {products.map((product) => (
    //                 <Product key={product.id} product={product} />
    //             ))}
    //         </div>
    //     )
    return products.map((product) => <Product key={product.id} product={product} deleteProduct={props.deleteroduct}/>

    );
    

}
return <div>No products found</div>
       
  
}

export default ProductList;