import React from "react";

const PlayerList = props => {
  const { players, setCurrentPlayer } = props;
  console.log("players", props);

  return (
    <div>
      <ul  className="collection with-header">
        <li className="collection-header"><h5>Players</h5></li>
        {players.map(player => (
          <li key={player._id}>
            <a href="#!"
              className="collection-item"
              onClick={() => setCurrentPlayer(player)}
            >
              {player.firstName} {player.lastName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
