import React from "react";

const PlayerList = props => {
  const { players, setCurrentPlayer } = props;
  console.log("players", props);

  return (
    <div className="collection">
      <ul>
        <li>
          <h4>Players</h4>
        </li>
        {players.map(player => (
          <li key={player._id}>
            <button
              className="collection-item"
              onClick={() => setCurrentPlayer(player)}
            >
              {player.firstName} {player.lastName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
