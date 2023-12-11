import React from "react";
import TrackList from "./TrackList";

const SearchResults = (props) => {
  
  return (

    <div className="SearchResults">
      
      <TrackList tracks={props.searchResults} key={props.searchResults.id} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;