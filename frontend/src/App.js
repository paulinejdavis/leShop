import React, {useState } from 'react';
import data from './models.products.json';
import Booklist from './components/Booklist';


function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState('');

  async function findProucts(value) {
    const url = `https:www.dummyjson.com/docs/products.json?keyword=${value}`;

    const results = await fetch(url).then(res => res.json());
  if (!results.error) {
    setProducts(results.items);
  }
  }
  return (
    <div className="App">
      <header/>
      <h2>Le Shop App</h2>
      
      
    </div>
  );
}

export default App;
