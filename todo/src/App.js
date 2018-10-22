import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {

    let savedList = this.state.savedList;
    //  console.log(movie);
     if(!savedList.some( (savedMovie) => savedMovie.title === movie.title)){
      console.log("inside of include method", this.state.savedList);
      
      savedList.push(movie);
      this.setState({ savedList });
     }
  };

  render() {
    console.log(this.state.savedList);
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* <Route exact path="/" component={MovieList} /> */}
        {/* <Route path="/movie/:id" component={MovieCard} /> */}
        <Route
        exact path="/"
        render={props => <MovieList {...props} addToSavedList={this.addToSavedList} />}
      />

        <Route
        path="/movie/:id"
        render={props =>  <MovieCard {...props} addToSavedList={this.addToSavedList} />}
      />

      </div>
    );
  }
}
