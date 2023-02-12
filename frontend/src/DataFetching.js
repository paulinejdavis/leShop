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
    const [filterBy, setFilterBy] = useState("");

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

    const handleDelete = (productId) => {
        try {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
        } catch (err) {
          console.log(err);
        }
    };

    const handleFilter = (category) => { 
        setFilterBy(category);
    };

    const filteredProducts = products.filter((product) => {
        if (!filterBy || filterBy === "products") {
          return true;
        }
        return product.category === filterBy;
    });

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

        <div>
            <div className="dropdown">
                <select style= {{ marginLeft: "80px", width: "200px", height: "40px",fontSize: "20px", alignContent: "center", border: "none" }}className="dropdown-content"value={sortBy} onChange={handleSort}>
                <option value="category">Sort by Category</option>
                <option value="title">Sort by Title</option>
                <option value="description">Sort by Description</option>
                <option value="price">Sort by Price</option>
                <option value="stock">Sort by Stock</option>
                </select>
            </div>
            <div className="buttons">
                <button style={{backgroundColor:"rgb(50 43 128", color: "white", fontSize: "19px", width: "130px", height: "33px",margin: "5px", border: "none"}} onClick={() => handleFilter("products")}>All products</button> 
                <button style={{backgroundColor:"rgb(160 191 56",color: "white",fontSize: "19px", width: "100px", height: "33px",margin: "5px", margin: "5px", border: "none"}} onClick={() => handleFilter("groceries")}>Groceries</button>
                <button style={{backgroundColor:"rgb(223 153 27",color: "white", fontSize: "19px", width: "160px", height: "33px",margin: "5px", whiteSpace: "nowrap", margin: "5px", border: "none"}} onClick={() => handleFilter("home-decoration")}>Home Decoration</button>
                <button style={{backgroundColor:"rgb(222 160 195",color: "white", fontSize: "19px", width: "100px", height: "33px",margin: "5px", margin: "5px", border: "none"}} onClick={() => handleFilter("fragrances")}>Fragrances</button>
                <button style={{backgroundColor:"rgb(244 33 138",color: "white", fontSize: "19px", width: "100px", height: "33px",margin: "5px", margin: "5px", border: "none"}} onClick={() => handleFilter("skincare")}>Skincare</button>
                <button style={{backgroundColor:"rgb(127 127 127",color: "white", fontSize: "19px", width: "100px", height: "33px",margin: "5px", margin: "5px", border: "none"}} onClick={() => handleFilter("laptops")}>Laptops</button>
                <button style={{backgroundColor:"rgb(154 206 243",color: "white", fontSize: "19px", width: "130px", height: "33px",margin: "5px", margin: "5px", border: "none"}} onClick={() => handleFilter("smartphones")}>Smartphones</button>
            </div>
           
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
    </div>
    );
}

export default Datafetching;