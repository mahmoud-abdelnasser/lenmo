// @flow
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import routes from "../constants/routes.json";
import logo from "../images/lenmo-logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={"d-md-block sidebar"}>
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item mb-2 lenmo-logo">
              <NavLink exact to={routes.HOME}>
                <img className="logo" src={logo} />
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeclassname="active"
                to={routes.DASHBOARD}
              >
                <i className="fas fa-home" />
                <span>{"dashboard"}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeclassname="active"
                to={routes.INVESTMENT}
              >
                <i className="fas fa-warehouse" />
                <span>{"investment"}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeclassname="active"
                to={routes.BANK_TRANSFER}
              >
                <i className="fas fa-exchange-alt" />
                <span>{"bank transfer"}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeclassname="active"
                to={routes.SETTINGS}
              >
                <i className="fas fa-cog" />
                <span>{"settings"}</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeclassname="active"
                to={routes.SUPPORT}
              >
                <i className="fas fa-headphones" />
                <span>{"support"}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="nav flex-column bottom-nav">
            <li>
              <a className="logout-btn">
                <i className="fas fa-sign-out-alt" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
