import React, { useEffect, useState } from "react";
import axios from "axios";
import * as styles from "./App.module.scss";
import { Player, PlayerForm, PlayerList } from "../Player";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const playersUrl = "http://localhost:3100/players";

  useEffect(() => {
    const getPlayers = async url => {
      const playersData = await axios.get(url);

      setPlayers(playersData.data);
    };

    getPlayers(playersUrl);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">Menu</div>
        <div className="row">
          <div className="col s3">
            {players[0] && <PlayerList players={players}/>}
          </div>
          <div className="col s9">
            <Player />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
