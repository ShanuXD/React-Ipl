import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import data from "./data";

function createPlayers() {
  const PlayersData = data.map((player) => {
    const newPlayer = player;
    newPlayer["sort direction"] = {
      name: "unsorted",
      country: "unsorted",
    };
    return newPlayer;
  });
  return PlayersData;
}

const PlayersData = createPlayers();

function App() {
  const [players, setplayers] = useState(PlayersData);

  const sortByCategories = ["name", "country"];

  const searchPlayers = (event) => {
    const searchValue = event.target.value;
    const newFilterPlayers = PlayersData.filter((player) => {
      return Object.values(player).some((str) => {
        return ("" + str).toLowerCase().includes(searchValue);
      });
    });
    setplayers(newFilterPlayers);
  };

  const sortPlayerData = (sortKey) => {
    let currentPlayers = [...players];
    // Ascendind
    if (currentPlayers[0]["sort direction"][sortKey] === "unsorted") {
      currentPlayers.forEach((player) => {
        player["sort direction"][sortKey] = "ascending";
      });

      currentPlayers.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        if (a[sortKey] > b[sortKey]) return 1;
        return 0;
      });
    }
    // Decending
    else if (currentPlayers[0]["sort direction"][sortKey] === "ascending") {
      currentPlayers.forEach((player) => {
        player["sort direction"][sortKey] = "decending";
      });

      currentPlayers.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) return -1;
        if (a[sortKey] < b[sortKey]) return 1;
        return 0;
      });
    }
    // original format
    else {
      setplayers(createPlayers());
      return;
    }

    setplayers(currentPlayers);
  };

  return (
    <div className="container">
      <div className="input-feild">
        <input
          type="text"
          placeholder="Serach Player"
          onChange={(e) => searchPlayers(e)}
        />
        <div className="sort-by-btns">
          <span>Sort By:</span>
          <br />
          <div className="btns">
            {sortByCategories.map((categorie, index) => {
              return (
                <button key={index} onClick={() => sortPlayerData(categorie)}>
                  {categorie}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <br />
      <div className="all-cards">
        {players.map((player, index) => {
          return <Card key={index} player={player} />;
        })}
      </div>
    </div>
  );
}

export default App;
