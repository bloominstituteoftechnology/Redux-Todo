import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Welcome!</h1>
      <NavLink className="nav-item" activeClassName="active" to="/todos">
        Enter
      </NavLink>
    </main>
  );
};

export default Home;