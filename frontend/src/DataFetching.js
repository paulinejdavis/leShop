import React, {useState, useEffect } from 'react';
import axios from "axios";

function Product(props) {

    if (!props.product) {
        return <div>Error: Product not found</div>
    }


    return (
        <div>
            
        </div>
    )
}

function Datafetching() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
          .get("https://www.dummyjson.com/products")
          .then((res) => {
            console.log(res.data.products);
            setProducts(res.data.products);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [])
    

      return (
        <div className ="App">

        <div classname="items-container">
      <ul>
        {/* {products */}
              {sortedProducts.map((product) => (

            <Product 
            key={product.id}
            product={product} 
            onDelete={handleDelete} 
            />

            ))

              }
    </ul>
    </div>
    </div>
      );
}