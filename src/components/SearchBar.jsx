import React, { useState, useCallback } from 'react';

export default function SearchBar(props) {

    const [term, setTerm] = useState("a%2520genre:new-releases");

    const handleTermChange = useCallback((event) => {
      setTerm(event.target.value);
    }, []);
  
    const search = useCallback(() => {
      props.onSearch(term);
    }, [props, term]);
  
    return (
      <div className="SearchBar">
        {(term === "a%2520genre:new-releases") && search()}
        
        <input placeholder="What do you want to listen to?" onChange={handleTermChange} />
        <button className="my-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" onClick={search}>
          Search
        </button>
      </div>
    );
}