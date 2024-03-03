import React from "react";
import "./App.css";
import Song from "./components/Song";

const songs = [
  {
    title: "i saw you in a dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "happy im",
    artist: "UMI",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273c5988fbd3b1de270f4c0a9cd",
    time: "2:39",
  },
  {
    title: "illicit affairs",
    artist: "Taylor Swift",
    albumCover:
      "https://m.media-amazon.com/images/I/A1Q6XGXmIFL._UF1000,1000_QL80_.jpg",
    time: "3:45",
  },
  {
    title: "Falling Behind",
    artist: "Laufey",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Laufey_-_Everything_I_Know_About_Love.png",
    time: "4:23",
  },
  {
    title: "Anaheim",
    artist: "Niki",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/Nicole_%28Album%29_cover.png",
    time: "4:32",
  },
  {
    title: "Blue Hour",
    artist: "TOMORROW X TOGETHER",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Minisode1_-_Blue_Hour.jpg/220px-Minisode1_-_Blue_Hour.jpg",
    time: "3:29",
  },
  {
    title: "Grapejuice",
    artist: "Harry Styles",
    albumCover:
      "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/w_1600%2Cc_limit/FINAL%2520%2520PFHH-notextwlogo.jpg",
    time: "3:12",
  },
  {
    title: "I Think He Knows",
    artist: "Taylor Swift",
    albumCover:
      "https://www.udiscovermusic.com/wp-content/uploads/2019/08/Taylor-Swift-Lover-album-cover-820.jpg",
    time: "3:41",
  },
  {
    title: "Love Song",
    artist: "Lana Del Rey",
    albumCover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccceoLT_dpoa0yhMA-qDkDwl_iUnCOmk0PBNmGNTmQ_3PmAQXVZqwRNjcaBoRu46L8EQ&usqp=CAU",
    time: "3:49",
  },
  {
    title: "Butterflies",
    artist: "Kacey Musgraves",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Kacey_Musgraves_-_Golden_Hour.png",
    time: "3:39",
  },
];

function App() {
  return (
    <div className="App">
      <div className="playlist">
        <h1>Kayla's Playlist</h1>
        <div id="playlist-header">
          <div id="header-index">#</div>
          <div id="header-title">Title</div>
          <div id="header-time">Time</div>
        </div>
        {songs.map((song, index) => {
          return (
            <Song
              key={index}
              index={index + 1}
              title={song.title}
              albumCover={song.albumCover}
              artist={song.artist}
              time={song.time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
