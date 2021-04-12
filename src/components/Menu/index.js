import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Loading from 'src/components/App/Loading';

import './style.scss';

const Menu = ({ recipes, loading }) => (
  <nav className="menu">
    <NavLink
      exact
      to="/"
      activeClassName="menu-link--active"
      className="menu-link"
    >
      Accueil
    </NavLink>
    {loading ? (
      <Loading />
    )
      : recipes.map((recipe) => (
        <NavLink
          exact
          to={`/recipe/${recipe.slug}`}
          activeClassName="menu-link--active"
          key={recipe.id}
          className="menu-link"
        >
          {recipe.title}
        </NavLink>
      ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool,
};

Menu.defaultProps = {
  loading: true,
};

export default Menu;
