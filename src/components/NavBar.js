import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={props.toggleMode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  title: "Your Title Here",
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
