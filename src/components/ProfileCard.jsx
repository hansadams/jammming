import React, { useState, useEffect} from 'react';

export default function ProfileCard(props) {

  const [userData, setUserData] = useState([]);
  const [followers, setFollowers] = useState();
  const [playlist, setPlaylist] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getProfile = () => {

      const headers = { Authorization: `Bearer ${props.token}` };
    
      fetch('https://api.spotify.com/v1/me', {headers: headers}
      ).then(response => response.json()
      ).then(responseData => {
        setUserData(responseData)
        setFollowers(responseData.followers.total)
        setImage(responseData.images.url)
        })

      let userId = userData.id;
        
      fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {headers: headers}
        ).then(response => response.json()
        ).then(responseData1 => {
          userId = responseData1;
          setPlaylist(responseData1.total)
          }) 
    }

    getProfile();
    
  }, [userData.id, props.token])

  return (
    <div className=" p-3 border-b-2 border-zinc-600 lg:flex lg:items-center lg:justify-between">
      <div className="flex min-w-0 gap-x-4">
        {image && <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={image} alt="" />}
        <div>
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome, {userData.display_name}! 
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-300">
              {playlist} Playlists • {followers} Followers
            </div>        
            <span className="sm:ml-3">
              <a href={userData.uri}>
                <button
                  type="button"
                  className=" my-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Go to Profile
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}