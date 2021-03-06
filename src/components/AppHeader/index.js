import React from 'react';
import LoginForm from 'src/containers/LoginForm';

import './style.scss';
import logo from 'src/assets/logo.png';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <LoginForm />
  </header>
);

export default AppHeader;
