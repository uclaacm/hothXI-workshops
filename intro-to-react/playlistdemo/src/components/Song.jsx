import React, { useState } from "react";
import "./Song.css";
//import emptyHeart from "../images/whiteopenheart-removebg-preview.png";
//import fullHeart from "../images/whitefullheart-removebg-preview.png";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";

function Song(props) {
  const [liked, setLiked] = useState(false);

  const setLikedState = () => {
    setLiked(!liked);
    console.log(liked);
  };

  return (
    <div className="song">
      <div id="song-index">{props.index}</div>
      <img id="album-cover" src={props.albumCover} />
      <div className="song-details">
        <h3 id="song-title">{props.title}</h3>
        <p id="song-artist">{props.artist}</p>
      </div>
      <IonIcon
        id="heart"
        color={liked ? "success" : "light"}
        src={liked ? heart : heartOutline}
        onClick={setLikedState}
      />
      <p id="song-duration">{props.time}</p>
      <button className="play-button">Play</button>
    </div>
  );
}

export default Song;
