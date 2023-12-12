import React, { useState, useCallback } from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import Playlist from './Playlist';

export default function CreatePlaylist(props) {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = async(term) => {
    await fetch (`https://api.spotify.com/v1/search?type=track&q=${term}&limit=8`, 
                  {headers: 
                    {
                      Authorization: `Bearer ${props.token}`
                    }
                  }
                )
          .then(response => response.json())
          .then(responseData => {
            if (!responseData.tracks) {
              setSearchResults([]);
            } else {
                const results = responseData.tracks.items.map(track => ({
                  id: track.id,
                  name: track.name,
                  artist: track.artists[0].name,
                  album: track.album.name,
                  uri: track.uri,
                  imageUrl: track.album.images[0].url 
              }));

          setSearchResults(results)
    }});
  }



  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
    
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);

    },[playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );

  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);

  }, [playlistName]);

  const savePlaylist = async() => {

    const trackUris = playlistTracks.map((track) => track.uri);

    if (!playlistName || !trackUris.length) {
      return 0;
    }
    
    const headers = { Authorization: `Bearer ${props.token}` };
    let userId;
    
    await fetch('https://api.spotify.com/v1/me', {headers: headers}
      ).then(response => response.json()
      ).then(async jsonResponse => {

          userId = jsonResponse.id;
          const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: playlistName })
            });
            const jsonResponse_1 = await response.json();
            const playlistId = jsonResponse_1.id;
            return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            }); 

        }).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
          });
  }
    
  return (
    <div className="container items-center justify-between">
      <div className="min-w-0 flex-1 py-10 text-center">
        <SearchBar onSearch={search} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
        </div>
        <div className="justify-center">
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>  
  );
}
