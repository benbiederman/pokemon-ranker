import "./Navigation.scss";
import squirtle from "../../images/squirtle.png";
import cyndaquil from "../../images/cyndaquil.png";
import treecko from "../../images/treecko.png";
import turtwig from "../../images/turtwig.png";
import tepig from "../../images/tepig.png";
import froakie from "../../images/froakie.png";
import litten from "../../images/litten.png";
import grookey from "../../images/grookey.png";
import { Link } from "react-router-dom";

const Navigation = ({ navActive, toggleNav, updateActivePage }) => {
  return (
    <div
      className={
        navActive
          ? "navigation navigation-active"
          : "navigation navigation-inactive"
      }
    >
      <div className="nav-items">
        <Link to="/" className="nav-item" onClick={updateActivePage}>
          <img src={squirtle} alt="Gen 1 starter Squirtle" />
          <h3>Gen 1</h3>
        </Link>
        <Link to="/Gen2" className="nav-item" onClick={updateActivePage}>
          <img src={cyndaquil} alt="Gen 2 starter Cyndaquil" />
          <h3>Gen 2</h3>
        </Link>
        <Link to="/Gen3" className="nav-item" onClick={updateActivePage}>
          <img src={treecko} alt="Gen 3 starter Treecko" />
          <h3>Gen 3</h3>
        </Link>
        <Link to="/Gen4" className="nav-item" onClick={updateActivePage}>
          <img src={turtwig} alt="Gen 4 start Turtwig" />
          <h3>Gen 4</h3>
        </Link>
        <Link to="/Gen5" className="nav-item" onClick={updateActivePage}>
          <img src={tepig} alt="Gen 5 starter Tepig" />
          <h3>Gen 5</h3>
        </Link>
        <Link to="/Gen6" className="nav-item" onClick={updateActivePage}>
          <img src={froakie} alt="Gen 6 starter Froakie" />
          <h3>Gen 6</h3>
        </Link>
        <Link to="/Gen7" className="nav-item" onClick={updateActivePage}>
          <img src={litten} alt="Gen 7 starter Litten" />
          <h3>Gen 7</h3>
        </Link>
        <Link to="/Gen8" className="nav-item" onClick={updateActivePage}>
          <img src={grookey} alt="Gen 8 starter Grookey" />
          <h3>Gen 8</h3>
        </Link>
      </div>
      <div className="nav-btn">
        <button onClick={toggleNav}>+</button>
      </div>
    </div>
  );
};

export default Navigation;
