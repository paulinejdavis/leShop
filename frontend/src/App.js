import React, {useState } from 'react';
import Search from './components/Search';
import data from './models/products.json';
import Productlist from './components/ProductList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'


function App() {
  const [products, setProducts] = useState(data);
  const [keyword, setKeyword] = useState('');

  async function findProducts(value) {
    const url = `https:www.dummyjson.com/docs/products.json?keyword=${value}`;

    const results = await fetch(url).then(res => res.json());
  if (!results.error) {
    setProducts(results.items);
  }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <>
        <div className="App">
        <header/>
        <h2>Le Shop App</h2>
        <Search keyword={keyword} setKeyword={setKeyword} findProducts={findProducts}/>
        <Productlist products={products}/>
        </div>
        </>
        
        <Route exact path="/about" element={ <About />} />
            </Routes>
        </Router>
  );
}

export default App;
