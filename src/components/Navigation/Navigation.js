import "./Navigation.scss";
import squirtle from "../../images/squirtle.png";
import cyndaquil from "../../images/cyndaquil.png";
import treecko from "../../images/treecko.png";
import turtwig from "../../images/turtwig.png";
import tepig from "../../images/tepig.png";
import froakie from "../../images/froakie.png";
import litten from "../../images/litten.png";
import grookey from "../../images/grookey.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-items">
        <div className="nav-item">
          <img src={squirtle} alt="Gen 1 starter Squirtle" />
          <h3>Gen 1</h3>
        </div>
        <div className="nav-item">
          <img src={cyndaquil} alt="Gen 2 starter Cyndaquil" />
          <h3>Gen 2</h3>
        </div>
        <div className="nav-item">
          <img src={treecko} alt="Gen 3 starter Treecko" />
          <h3>Gen 3</h3>
        </div>
        <div className="nav-item">
          <img src={turtwig} alt="Gen 4 start Turtwig" />
          <h3>Gen 4</h3>
        </div>
        <div className="nav-item">
          <img src={tepig} alt="Gen 5 starter Tepig" />
          <h3>Gen 5</h3>
        </div>
        <div className="nav-item">
          <img src={froakie} alt="Gen 6 starter Froakie" />
          <h3>Gen 6</h3>
        </div>
        <div className="nav-item">
          <img src={litten} alt="Gen 7 starter Litten" />
          <h3>Gen 7</h3>
        </div>
        <div className="nav-item">
          <img src={grookey} alt="Gen 8 starter Grookey" />
          <h3>Gen 8</h3>
        </div>
      </div>
      <div className="nav-btn">
        <button>+</button>
      </div>
    </div>
  );
};

export default Navigation;
