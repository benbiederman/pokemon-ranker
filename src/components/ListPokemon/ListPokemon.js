import React, { useState } from "react";
import "./ListPokemon.scss";

const ListPokemon = (props) => {
  const [fav, setFav] = useState(props.favorite ? true : false);

  function PokemonHandler() {
    changeFav();
    props.pokemonStatusCheck(fav, props.id, props.name, props.img);
  }

  function changeFav() {
    setFav(!fav);
  }

  return (
    <div
      className={fav ? "list-pokemon favorited-pokemon" : "list-pokemon"}
      onClick={PokemonHandler}
    >
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default ListPokemon;
