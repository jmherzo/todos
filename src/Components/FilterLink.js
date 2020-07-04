import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === "all" ? "" : filter}
    activeStyle={{
      color: "black",
      textDecoration: "none"
    }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(["all", "completed", "active"]).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
