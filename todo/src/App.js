import React from 'react';

import Todos from './components/Todos';
import NavBar from './components/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Todos />
      </>
    );
  }
}
