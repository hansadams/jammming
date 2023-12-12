import React, { useCallback } from "react";
import TrackList from "./TrackList";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props]
  );

  return (
    <div className="Playlist">
      <input placeholder="New Playlist" className="text-5xl mb-3"onChange={handleNameChange} defaultValue={"New Playlist"} />
        {props.playlistTracks.length > 0 ? (<TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />) : (<p className="text-center py-11 text-sm text-zinc-400">No songs added.</p>)}
        <div className="text-center">
      <button className=" my-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" onClick={props.onSave}>
        Save to Spotify
      </button></div>
    </div>
  );
};

export default Playlist;
