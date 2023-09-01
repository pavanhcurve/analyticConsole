import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Style.css';
function Header(){
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary newclr">
  <div className="container">
    <NavLink to="/" className="navbar-brand">Console</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/adduser" className="nav-link">Add User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/reduction" className="nav-link">Reduction Console</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/analytics" className="nav-link">Analytics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/democ" className="nav-link">Demo Console</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}
export default Header;