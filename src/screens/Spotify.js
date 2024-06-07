import React from 'react';
import "../css/Spotify.css";

const Spotify = () => {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
      <FooterPlayer />
    </div>
  );
};

const Sidebar = () => {
  const playlists = [
    "Chill Vibes", "Summer Hits", "Workout Motivation", "Party Time", "Road Trip",
    "Classical Masterpieces", "Jazz for Relaxation", "Rap and Hip-Hop", "Rock Classics",
    "Morning Wake Up"
  ];

  return (
    <div className="left">
      <div style={{ height: '20px' }}></div>
      <div className="menu">
        <ul>
          <MenuItem icon="Home.svg" label="Home" />
          <MenuItem icon="Search.svg" label="Search" />
          <MenuItem icon="YourLibrary.svg" label="Your Library" />
          <div style={{ height: '30px' }}></div>
          <MenuItem icon="CreatePlaylist.svg" label="Create Playlist" />
          <MenuItem icon="Like.svg" label="Liked Songs" />
        </ul>
      </div>
      <hr width="100%" />
      <div style={{ height: '20px' }}></div>
      <div className="menu playlists">
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <a>
                <span>{playlist}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="current-song-cover">
        <img src="../Spotify/images/song-cover.jpeg" alt="" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <li>
      <a>
        <img src={`../Spotify/assets/${icon}`} alt="" className="gray-filtered" />
        <span>{label}</span>
      </a>
    </li>
  );
};

const MainContent = () => {
  return (
    <div className="right">
      <PlaylistHeader />
      <PlaylistSongs />
    </div>
  );
};

const PlaylistHeader = () => {
    return (
        <div className="playlist-header">
            <div className="playlist-top">
                <div className="playlist-arrows">
                    <div className="arrow-container">
                        <img src="../Spotify/assets/LeftArrow.svg" alt="" />
                    </div>
                    <div className="arrow-container">
                        <img src="../Spotify/assets/RightArrow.svg" alt="" />
                    </div>
                </div>
                <div className="playlist-top-email">
                    <div className="arrow-container">
                        <img src="../Spotify/assets/Profile.svg" alt="" />
                    </div>
                    <span>Andrew Ramirez...</span>
                </div>
            </div>
            <div className="playlist-content">
                <div className="playlist-cover">
                        <img src="../Spotify/images/playlist-cover.png" alt="" />
                </div>
                <div className="playlist-info">
                    <div className="playlist-public">PUBLIC PLAYLIST</div>
                    <div className="playlist-title">Classic Road Trip Songs</div>
                    <div className="playlist-description">A soundtrack to fuel your good mood while on the road.</div>
                    <div style={{ height: '10px' }}></div>
                    <div className="playlist-stats">
                        <img src="../Spotify/assets/spotify-logo.png" width="24px" height="24px" alt="" />
                        <span> Spotify ·</span>
                        <span>5,131,321 likes · </span>
                        <span>100 songs, </span>
                        <span>6 hr 57 min </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlaylistSongs = () => {
  const songs = [
    { id: 1, title: "Young as the Morning old as the Sea", artist: "Passenger", album: "Young as the Morning old as the Sea", date: "May 31, 2022", duration: "3:26" },
    { id: 2, title: "Young as the Morning old as the Sea", artist: "Passenger", album: "Young as the Morning old as the Sea", date: "May 31, 2022", duration: "" },
    { id: 3, title: "Young as the Morning old as the Sea", artist: "Passenger", album: "Young as the Morning old as the Sea", date: "May 31, 2022", duration: "" },
    { id: 4, title: "Young as the Morning old as the Sea", artist: "Passenger", album: "Young as the Morning old as the Sea", date: "May 31, 2022", duration: "" },
    { id: 5, title: "Young as the Morning old as the Sea", artist: "Passenger", album: "Young as the Morning old as the Sea", date: "May 31, 2022", duration: "" }
  ];

  return (
    <div className="playlist-songs-container">
      <div className="playlist-buttons">
        <div className="playlist-buttons-left">
          <PlaylistButton icon="Pause.svg" />
          <PlaylistButton icon="FiiledLike.svg" extraClass="spotify-color" />
          <PlaylistButton icon="Download.svg" />
          <PlaylistButton icon="ThreeDots.svg" />
        </div>
        <div className="playlist-buttons-right">
          <PlaylistButton icon="Search.svg" />
          <div className="playlist-buttons-order">Custom Order</div>
        </div>
      </div>
      <div className="playlist-songs">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Date Added</th>
              <th>
                <img src="../Spotify/assets/Duration.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <SongRow key={index} song={song} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PlaylistButton = ({ icon, extraClass }) => {
  return (
    <div className={`playlist-buttons-${icon.split('.')[0].toLowerCase()}`}>
      <img src={`../Spotify/assets/${icon}`} alt="" className={extraClass} />
    </div>
  );
};

const SongRow = ({ song }) => {
  return (
    <tr>
      <td>{song.id}</td>
      <td className="song-title">
        <div className="song-image">
          <img src="../Spotify/images/song-cover.jpeg" alt="" />
        </div>
        <div className="song-name-album">
          <div className="song-name">{song.title}</div>
          <div className="song-artist">{song.artist}</div>
        </div>
      </td>
      <td className="song-album">{song.album}</td>
      <td className="song-date-added">{song.date}</td>
      <td className="song-duration">{song.duration}</td>
    </tr>
  );
};

const FooterPlayer = () => {

  const [songSlider, setsongSlider] = React.useState(30);
  const [volume, setVolumeSlider] = React.useState(30);
  
  return (
    <div className="footer-player">
      <div className="footer-player-left">
        <div className="footer-player-left-song">
          <div className="footer-player-left-song-name">Young as the Morning old as the Sea</div>
          <div className="footer-player-left-song-artist">Passenger</div>
        </div>
        <div className="footer-player-left-like">
          <img src="../Spotify/assets/FiiledLike.svg" alt="" className="spotify-color" style={{ height: '18px', width: '18px' }} />
        </div>
      </div>
      <div className="footer-player-middle">
        <div className="footer-player-middle-buttons">
          <img src="../Spotify/assets/Shuffle.svg" alt="" className="gray-filtered" />
          <img src="../Spotify/assets/Previous.svg" alt="" className="gray-filtered" />
          <span className="pause-button">
            <img src="../Spotify/assets/Pause.svg" alt="" />
          </span>
          <img src="../Spotify/assets/Next.svg" alt="" className="gray-filtered" />
          <img src="../Spotify/assets/Repeat.svg" alt="" className="gray-filtered" />
        </div>
        <div className="footer-player-middle-slider">
          <div className="player-time">1:33</div>
          <div className="player-slider">
            <input type="range" min="1" max="100" value={songSlider} onChange={(e) => {setsongSlider(e.target.value)}}/>
          </div>
          <div className="player-time">4:34</div>
        </div>
      </div>
      <div className="footer-player-right">
        <div className="footer-player-right-buttons">
          <img src="../Spotify/assets/Lyrics.svg" alt="" />
          <img src="../Spotify/assets/Queue.svg" className="filtered-img" alt="" />
          <img src="../Spotify/assets/Connect to a device.svg" className="filtered-img" alt="" />
          <img src="../Spotify/assets/Volume.svg" className="filtered-img" alt="" />
          <div className="player-slider" style={{ marginRight: '20px', width: '200px' }}>
            <input type="range" min="1" max="100" value={volume} style={{ width: '75px', position: 'relative', top: '-5px' }} onChange={(e) => {setVolumeSlider(e.target.value)}}/>
          </div>
          <img src="../Spotify/assets/Full screen.svg" className="filtered-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Spotify;
