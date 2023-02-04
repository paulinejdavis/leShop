
import React, { useState, useEffect } from 'react'; 
import Product from './Product';

const ProductList = (props) => { 
    const [products, setProducts] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(''); 
    const [selectedProduct, setSelectedProduct] = useState({}); 
    const [error, setError] = useState(null);
    
    const getProducts = () => { 
        // Fetch all products 
        fetch('https://dummyjson.com/products') 
        .then(res => res.json()) 
        .then(data => setProducts(data))
        .catch(err => setError(err));
    
     
    const handleSearch = () => { 
        // Fetch a specific product based on the search query 
        fetch(`https://dummyjson.com/products/search?q=${searchQuery}`) 
        .then(res => res.json()) 
        .then(data => setSelectedProduct(data))
        .catch(err => setError(err));
     }; 
     
     const handleDelete = id => { 
        // Delete a product by its ID 
        fetch(`https://dummyjson.com/products/${id}`, { method: 'DELETE' }) 
        .then(res => res.json()) 
        .then(() => { 
            setProducts(products.filter(product => product.id !== id));
        })
        .catch(err => setError(err));
    }; 

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
            <div> 
                <h1>Products</h1> 
                {/* Chris */}
                {props.products.map(product => ( 
                    <Product product={product}/>

                ))} 
                <div>
                    <img src={images} alt={name} />
                </div>
            
                <h2>Selected Product</h2> 
                <p>{selectedProduct.name}</p> 
            </div> 
            ); 
        }; 
    };
        
export default ProductList; 







// import React from 'react';
// import Product from './Product';
// import axios from 'axios';
// import './styles.css'

// function ProductList(props) {
//     const { products } = props;
//     if  (Array.isArray(products)) {

//     // return products.map((product) => <Product key={product.id} product={product} deleteProduct={props.deleteproduct}/>
//     <section>
//     {products.map((product) => {
//         const {id, name, price, description, category} = product;
//     })}
// </section>
    

// }
    

// }
// // return <div>No products found</div>
//     //    return (
//     //     <h1>Products</h1>
       
  


// export default ProductList;