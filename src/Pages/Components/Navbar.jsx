import React from "react";
import {Link} from "react-router-dom";
import NavCss from "../Css/Navbar.module.css";
import logo from "../../assets/Frame.svg";

function Navbar() {
  return (
    <div className={NavCss.container}>
      <div className={NavCss.logo}>
        <img src={logo} alt="Wander Ways logo" />
        <p>Wander Ways</p>
      </div>

      <div className={NavCss.links}>
        <ul>
          <li><Link to="/" className={NavCss.navLink}>HOME</Link></li>
          <li><Link to="/hotels" className={NavCss.navLink}>HOTELS</Link></li>
          <li><Link to="/contactUs" className={NavCss.navLink}>CONTACT US</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
