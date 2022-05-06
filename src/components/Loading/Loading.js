import pokeball from "../../images/pokeball.png";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img className="spinning" src={pokeball} alt="pokeball icon" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
