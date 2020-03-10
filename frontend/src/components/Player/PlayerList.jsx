import React from "react";

const PlayerList = props => {
  console.log("players", props);

  return (
    <div>
      <ul className="collection with-header">
        <li className="collapsible-header">
          <h4>Players</h4>
        </li>
        {props.players.map(player => (
          <li className="collection-item" key={player._id}>
            <div>
              <a href="#!">
                {player.firstName} {player.lastName}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
