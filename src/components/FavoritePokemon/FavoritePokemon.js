import "./FavoritePokemon.scss";

const FavoritePokemon = (props) => {
  return (
    <div className="favorite-pokemon">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default FavoritePokemon;
