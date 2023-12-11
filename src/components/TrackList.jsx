import React from "react";
import Track from "./Track";

const TrackList = (props) => {
  
  return (
    <div className="TrackList">
      {props.tracks.map((track, key) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
