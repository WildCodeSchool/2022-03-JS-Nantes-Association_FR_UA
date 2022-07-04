import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../../assets/styles/MenuBurger.css";

export default function MenuBurger({ handleShowLinks }) {
  return (
    <>
      <div>
        <ul className="navbar_links">
          <li className="navbar_item">
            <NavLink to="/" onClick={handleShowLinks}>
              ACCUEIL
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/news" onClick={handleShowLinks}>
              ACTUALITÉS
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/involve" onClick={handleShowLinks}>
              ADHÉRER, DONNER
            </NavLink>
          </li>
        </ul>
      </div>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </>
  );
}

MenuBurger.propTypes = {
  handleShowLinks: PropTypes.func,
};

MenuBurger.defaultProps = {
  handleShowLinks: false,
};
