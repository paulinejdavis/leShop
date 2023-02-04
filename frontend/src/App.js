import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import data from "./models/products.json";
import Productlist from "./components/ProductList";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [products, setProducts] = useState(data);
  const [viewProducts, setViewProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  // async function findProducts(value) {
  // const url = `https://www.dummyjson.com/products`;
  // try{
  //   const response = await fetch(url);
  //   if(!response.ok){
  //     throw new Error(response.statusText);
  //   }

  // const results = await response.json();

  //   if (!results.error) {
  //     setProducts(results.items);
  //   }
  // } catch (error) {
  //     console.error(error);
  // }

  // }
useEffect(() => {
  
    axios.get("https://www.dummyjson.com/products").then(response=>{setProducts(response.data.products)});


}, []);

  //   fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);

  function deleteProduct(id) {
    setViewProducts(viewProducts.filter((product) => product.id !== id));

    products.map((product) => {
      if (product.id === id) {
        console.log(`You selected ${product.name} with id ${product.id}`);
      }
      return product;
    });
  }
  //   fetch('https://dummyjson.com/products/1', {
  //   method: 'DELETE',
  // })
  // .then(res => res.json())
  // .then(console.log);
 

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h2>Le Shop App</h2>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                setProducts={setProducts}
              />
              <Productlist products={products} deleteProduct={deleteProduct} />

              {/* </div> */}
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
