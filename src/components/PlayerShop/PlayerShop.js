import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlayerShop.css";
import Player from "../Player/Player";
import playersData from "../../data/playerData.json";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const PlayerShop = () => {
  const [players, setPlayers] = useState([]);
  const [selectPlayers, setSelectPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handleAddPlayer = (player) => {
    const newSelecPlayers = [...selectPlayers, player];
    setSelectPlayers(newSelecPlayers);
  };
  return (
    <div className="player-data-container">
      <div className="player-container">
        {players.map((player) => (
          <Player
            player={player}
            id={player.id}
            handleAddPlayer={handleAddPlayer}
          ></Player>
        ))}
      </div>
      <div className="player-cart-container">
        <h2 className="text-center">
          <FontAwesomeIcon icon={faFutbol} /> My Club
        </h2>
        <h4>Added My Club: {selectPlayers.length}</h4>
        <Cart cart={selectPlayers}></Cart>
      </div>
    </div>
  );
};

export default PlayerShop;
