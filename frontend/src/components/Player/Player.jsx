import React from "react";
import soccerImage from '../../assets/images/soccer.jpeg'

const Player = ({ player }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={soccerImage} alt="Soccer Player"/>
            <span className="card-title">{player.firstName} {player.lastName}</span>
          </div>
          <div className="card-content">
            <p>{player.phone}</p>
            <p>{player.email}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
