import React from "react";
import { useNavigate } from "react-router-dom";

export const Pokemon = ({ id, name, sprites, types }) => {
  let navigate = useNavigate();

  const upperCaseFirstLetter = (word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  };
  return (
    <>
      <div className={`pokemon-wrapper ${types[0].type.name}`}>
        <div>{upperCaseFirstLetter(name)}</div>
        <img src={sprites.other.dream_world.front_default} />
        <span>Type: {upperCaseFirstLetter(types[0].type.name)}</span>
        <button
          className="btn"
          onClick={() => {
            navigate(`/pokemon/${id}`);
          }}
        >
          More info
        </button>
      </div>
    </>
  );
};
