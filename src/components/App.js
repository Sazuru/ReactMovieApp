import React from 'react';
// import { render } from '@testing-library/react';
import { moviesData } from '../moviesData';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    };
  }

  render() {
    return (
      <div>
        {this.state.movies.map(function(movie) {
          return <p>{movie.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
