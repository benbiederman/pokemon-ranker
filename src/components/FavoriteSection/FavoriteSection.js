import FavoritePokemon from "../FavoritePokemon/FavoritePokemon";
import NoFavorites from "../NoFavorites/NoFavorites";
import "./FavoriteSection.scss";

const FavoriteSection = ({ activeHeader, gen }) => {
  return (
    <section
      className={
        activeHeader === "favorites"
          ? "favorite-section favorite-active"
          : "favorite-section"
      }
    >
      <h2>{`${gen} Favorites`}</h2>
      <div className="favorite-data">
        <NoFavorites />
      </div>
    </section>
  );
};

export default FavoriteSection;
