import "./NoFavorites.scss";
import surprisedPikachu from "../../images/surprised-pikachu.png";

const NoFavorites = () => {
  return (
    <div className="no-fav">
      <img src={surprisedPikachu} alt="surprised Pikachu" />
      <h3>No favorites currently selected</h3>
    </div>
  );
};

export default NoFavorites;
