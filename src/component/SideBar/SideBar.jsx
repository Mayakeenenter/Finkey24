import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faFileLines,
  faGear,
  faLandmark,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-side">
        <h2>Finkey24</h2>
        {/* <img src="/public/image/logo2.png" alt="Logo" className=" logo" /> */}
      </div>
      <nav>
        <ul className="list-side">
          <li>
            <NavLink to={'dashboard'}>
              <FontAwesomeIcon icon={faBoxesStacked} className=" icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={'leads'}>
              <FontAwesomeIcon icon={faUserPlus} className="icon" />
              Leads
            </NavLink>
          </li>
          <li>
            <NavLink to={'proposal'}>
              <FontAwesomeIcon icon={faFileLines} className=" icon" /> Propasal
            </NavLink>
          </li>
          <li>
            <NavLink to={'application'}>Application</NavLink>
          </li>
          <li>
            <NavLink to={'bank'}>
              <FontAwesomeIcon icon={faLandmark} className=" icon" />
              Banks
            </NavLink>
          </li>
          <li>
            <NavLink to={'offers'}>Offers</NavLink>
          </li>
          <li>
            <NavLink to={'settings'}>
              <FontAwesomeIcon icon={faGear} className="icon" />
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
