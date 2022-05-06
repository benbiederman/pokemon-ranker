import React, { useState, useEffect } from "react";
import FavoriteSection from "../../components/FavoriteSection/FavoriteSection";
import ListSection from "../../components/ListSection/ListSection";
import "./Generations.scss";

const Gen1 = ({ activeHeader }) => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState(loadLocalData("gen1"));
  const [fav, setFav] = useState(loadLocalData("gen1Fav"));

  // Checks if Pokemon is being added or removed from Favorites
  function pokemonStatusCheck(fav, id, name, img) {
    if (!fav) {
      const pokemon = {
        id: id,
        name: name,
        img: img,
        favorite: true,
      };

      addFavorite(pokemon);
      updatePokemon(pokemon);
    } else {
      const pokemon = {
        id: id,
        name: name,
        img: img,
        favorite: false,
      };
      removeFavorite(id);
      updatePokemon(pokemon);
    }
  }

  // Add Pokemon to Favorites
  function addFavorite(pokemon) {
    setFav((prevState) => [...prevState, pokemon]);
  }

  // Remove Pokemon from Favorites
  function removeFavorite(id) {
    setFav(
      fav.filter((p) => {
        return p.id !== id;
      })
    );
  }

  // Update Pokemon List with Favorite status
  function updatePokemon(pokemon) {
    console.log(pokemon);
    setPokemonList(
      pokemonList.filter((p) => {
        return p.id !== pokemon.id;
      })
    );

    setPokemonList((prevState) => [...prevState, pokemon]);
    sortPokemon();
  }

  useEffect(() => {
    if (pokemonList.length !== 151) {
      let urls = [];
      for (let i = 1; i <= 151; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }

      setLoading(true);
      setPokemonList([]);
      Promise.all(urls.map((url) => fetch(url)))
        .then((resp) => Promise.all(resp.map((r) => r.json())))
        .then((result) => {
          for (let i = 0; i < result.length; i++) {
            setPokemonList((prevState) => [
              ...prevState,
              {
                id: result[i].id,
                name: result[i].name,
                img: result[i].sprites.other["official-artwork"].front_default,
                favorite: false,
              },
            ]);
          }
        })
        .then(() => {
          setLoading(false);
        });
    }
  });

  function sortPokemon() {
    setPokemonList((prevState) => [
      ...prevState.sort((a, b) => (a.id > b.id ? 1 : -1)),
    ]);
    // setPokemonList(pokemonList.sort((a, b) => (a.id > b.id ? 1 : -1)));
  }

  // Load data from local storage
  function loadLocalData(data) {
    const localData = localStorage.getItem(data);
    return localData ? JSON.parse(localData) : [];
  }

  // Save data to local storage
  // Pokemon
  useEffect(() => {
    localStorage.setItem("gen1", JSON.stringify(pokemonList));
  }, [pokemonList]);

  // Favorites
  useEffect(() => {
    localStorage.setItem("gen1Fav", JSON.stringify(fav));
  }, [fav]);

  return (
    <section className="generations">
      <FavoriteSection gen={"Gen 1"} activeHeader={activeHeader} fav={fav} />
      <ListSection
        gen={"Gen 1"}
        activeHeader={activeHeader}
        pokemon={pokemonList}
        loading={loading}
        pokemonStatusCheck={pokemonStatusCheck}
      />
    </section>
  );
};

export default Gen1;
