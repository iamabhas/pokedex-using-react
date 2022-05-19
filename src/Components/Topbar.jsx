import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Utils/context";

function Topbar() {
  const { setPokemons, allPokemons } = React.useContext(AppContext);
  let navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1
          onClick={() => {
            const newPokemons = allPokemons;
            setPokemons(newPokemons);
          }}
        >
          POKEDEX
        </h1>
        <section>
          <button
            className="info-btn"
            onClick={() => {
              navigate("/info");
            }}
          >
            <img
              src="https://img.icons8.com/material-outlined/60/000000/info--v1.png"
              alt="error"
            />
          </button>
          <a
            href="https://github.com/iamabhas/pokedex-using-react"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
              alt="error"
            />
          </a>
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/60/000000/pokeball-2.png"
              alt="error"
            />
          </a>
        </section>
      </div>
    </>
  );
}

export default Topbar;
