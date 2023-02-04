import React from 'react'

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findProducts(props.keyword);
    };

    return <form onSubmit={handleSubmit}>
        <label>
        <input
            type="text"
            placeholder='Search'
            name="search"
            value={props.keyword}
            onChange={(event) => props.setKeyword(event.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
    </form>

 }
 
//  fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);
export default Search;
