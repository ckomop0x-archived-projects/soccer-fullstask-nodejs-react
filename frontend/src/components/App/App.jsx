import React, { useEffect, useState } from "react";
import { Player, PlayerForm, PlayerList } from "../Player";
import { getPlayers } from "../../helpers";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  useEffect(() => {
    getPlayers()
      .then(players => setPlayers(players))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo">
              Soccer Managment
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="col s3">
            {players[0] && (
              <PlayerList
                players={players}
                setCurrentPlayer={setCurrentPlayer}
              />
            )}
          </div>
          {currentPlayer && (
            <div className="col s9">
              <Player player={currentPlayer} />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm setPlayers={setPlayers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
