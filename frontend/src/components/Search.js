import React from 'react'

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findProucts(props.keyword);
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
 
export default Search;
