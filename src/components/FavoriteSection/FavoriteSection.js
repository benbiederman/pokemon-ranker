import FavoritePokemon from "../FavoritePokemon/FavoritePokemon";
import NoFavorites from "../NoFavorites/NoFavorites";
import "./FavoriteSection.scss";

const FavoriteSection = ({ activeHeader, gen, fav }) => {
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
        {fav.length <= 0 && <NoFavorites />}
        {fav.length >= 1 &&
          fav.map((p) => {
            return (
              <FavoritePokemon key={p.id} id={p.id} name={p.name} img={p.img} />
            );
          })}
      </div>
    </section>
  );
};

export default FavoriteSection;
