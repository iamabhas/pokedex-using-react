import React from "react";
import Loading from "../Components/Loading";
import { useParams, useNavigate } from "react-router-dom";

function PokemonDetail() {
  const [pokemon, setPokemon] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let navigate = useNavigate();
  const { id } = useParams();

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
    console.log(data);
    setLoading(false);
  };

  const upperCaseFirstLetter = (word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  };

  React.useEffect(() => {
    fetchPokemon();
  }, [id,fetchPokemon]);
  if (loading) {
    return <Loading />;
  }
  return (
    <main className="pokemon-detail-container">
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
      <div className="pokemon-details">
        <h1>{upperCaseFirstLetter(pokemon.name)}</h1>
        <section>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Error Loading ${pokemon.name}`}
          />

          <article>
            <summary>
              <h2>Basic Info</h2>
              <div>ID : #{pokemon.id}</div>
              <div>Weight : {pokemon.weight}</div>
              <div>Height : {pokemon.height}</div>
              <div>
                Type : {upperCaseFirstLetter(pokemon.types[0].type.name)}
              </div>
            </summary>

            <summary>
              <h2>Abilities</h2>
              <div>
                Ability 1 :{" "}
                {upperCaseFirstLetter(pokemon.abilities[0].ability.name)}
              </div>
              <div>
                {pokemon.abilities.length >= 2
                  ? `Ability 2 : ${upperCaseFirstLetter(
                      pokemon.abilities[1].ability.name
                    )}`
                  : null}
              </div>
              <div>
                {pokemon.abilities.length >= 3
                  ? `Ability 3 : ${upperCaseFirstLetter(
                      pokemon.abilities[2].ability.name
                    )}`
                  : null}
              </div>
            </summary>

            <summary>
              <h2>Base Stats</h2>
              <div>Experience : {pokemon.base_experience}</div>
              <div>HP : {pokemon.stats[0].base_stat}</div>
              <div>Attack : {pokemon.stats[1].base_stat}</div>
              <div>Defense : {pokemon.stats[2].base_stat}</div>
            </summary>
          </article>
        </section>
      </div>
    </main>
  );
}

export default PokemonDetail;
