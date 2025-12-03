import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faAngleDown,
  faBell,
  faCalculator,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Header({ title, array }) {
  return (
    <section className="header">
      <div className="top-header">
        <div>
          <p className="p-header">Perfios Credit Gateway</p>
          <h2 className="h2-header">{title}</h2>
        </div>
        <div className="all-icon-header">
          <div>
            <FontAwesomeIcon icon={faCalculator} className="icon-header" />
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} className="icon-header" />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} className="icon-header" />
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="icon-header" />
          </div>
        </div>
      </div>
      <ul>
        {array &&
          array.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ) 
          )
          }
      </ul>
    </section>
  );
}

export default Header;
