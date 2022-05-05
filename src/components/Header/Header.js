import "./Header.scss";

const Header = ({ activeHeader, changeHeader }) => {
  return (
    <div className="header">
      <button
        onClick={changeHeader}
        className={
          activeHeader === "favorites" ? "header-active fav-btn" : "fav-btn"
        }
      >
        Favorites
      </button>
      <button
        onClick={changeHeader}
        className={
          activeHeader === "list" ? "header-active list-btn" : "list-btn"
        }
      >
        List
      </button>
    </div>
  );
};

export default Header;
