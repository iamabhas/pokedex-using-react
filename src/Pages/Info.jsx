import React from "react";
import { useNavigate } from "react-router-dom";

function Info() {
  let navigate = useNavigate();
  return (
    <div className="error-container">
      <h1>Made by Abhas Khanal</h1>
      <br />
      <h2>
        - This website does not look good on mobile but its still responsive
      </h2>
      <br />
      <h2>
        - If you want to get all pokemons after searching , click on the
        "POKEDEX" logo at the top left
      </h2>
      <br />
      <h2>
        - The data for the pokemons are fetched from the PokeAPI . Click on the
        pokeball on topright of page for the api
      </h2>
      <br />
      <h2>- 151 pokemons are fetched</h2>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Info;
