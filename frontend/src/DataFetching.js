import React, {useState, useEffect } from 'react';
import axios from "axios";

import Navbar from "./components/Navbar";



function Product(props) {

    if (!props.product) {
        return <div>Error: Product not found</div>
    }


    return (
     <div>
    <div style={{marginLeft: "40px",backgroundColor: "white", border: "none", width: "600px", height: "30%", padding: "10px", display: "inline-block", border: "1px solid white"}}>
      <p style={{border: "1px solid rgb(50 43 128)",  padding: "5px", display: "inline-block", color: "white",  backgroundColor: "rgb(50 43 128)",}}>{props.product.category}</p>
      <h2 style={{ fontWeight: "bold", fontSize: "30px", marginTop: 0, marginBottom: '10px', }}>{props.product.title}</h2>
      <p style={{marginTop: 0, marginBottom: '10px', }}>{props.product.description}</p>
      <p style={{fontSize: "25px", marginTop: 0, marginBottom: '10px', }}>£{props.product.price}</p>
      <p style={{color: "grey", marginTop: 0, marginBottom: '10px', }}>Stock: {props.product.stock}</p>
      <button style={{backgroundColor: "grey", color: "black", margin:"5px", width: "75px", height: "25px", fontWeight: "bold", fontSize:"18px", textAlign:"center",border: "none",}} onClick={() => props.onDelete(props.product.id)}>Delete</button>
      </div>
      <br/>
      <br/>
    </div>
  );
      
}

function Datafetching() {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState("title");

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
    
      const handleSort = (e) => {
        setSortBy(e.target.value);
      };


      const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortBy === "category") {
          return a[sortBy].localeCompare(b[sortBy]);
        } else if (sortBy === "price" || sortBy === "stock") {
          return a[sortBy] - b[sortBy];
        } else {
          return a[sortBy].localeCompare(b[sortBy]);
        }
      });
      return (

        <div className ="App">
        
        <Navbar className="navbar"
           minimal={true}
           setShowModal={() => {
           

           }}
           showModal={false}
           />
           
      
   

        <div classname="items-container">
      <ul>
        {/* {products */}
              {sortedProducts.map((product) => (

            <Product 
            key={product.id}
            product={product} 
            onDelete={handleDelete} 
            />

             //   .sort((a, b) => a.title.localeCompare(b.title))
            ))

              }
    </ul>
    </div>
    </div>

   
      );
}

export default Datafetching;