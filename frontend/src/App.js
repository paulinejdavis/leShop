import React, {useState } from 'react';
import Search from './components/Search';
import data from './models/products.json';
import Productlist from './components/ProductList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'


function App() {
  const [products, setProducts] = useState(data);
  const [viewProducts, setViewProducts] = useState(data);
  const [keyword, setKeyword] = useState('');

  async function findProducts(value) {
    const url = `https:www.dummyjson.com/docs/products`;

    const results = await fetch(url).then(res => res.json());
  if (!results.error) {
    setProducts(results.items);
  }

  }
  function deleteProduct(id) {
    setViewProducts(viewProducts.filter(product => product.id !== id));

    products.map(product => {
          if (product.id === id) {
            console.log(`You selected ${product.name} with id ${product.id}`);
          
      }
        return product;
      });

  }


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
        <>
        <Header/>
        <h2>Le Shop App</h2>
        <Search keyword={keyword} setKeyword={setKeyword} findProducts={findProducts}/>
        <Productlist products={products} deleteProduct={deleteProduct}/>
        {/* </div> */}
        </>
        } />
        <Route exact path="/about" element={ <About />} />
            </Routes>
        </Router>
  );
}

export default App;
