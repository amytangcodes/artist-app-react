import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Nav extends Component {
  static propTypes = {
    handleOpenModal: PropTypes.func.isRequired
  };

  render() {
    const { handleOpenModal } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button
              onClick={handleOpenModal}
              type="button"
              className="btn btn-primary navbar-btn"
            >
              Add New Artist
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
