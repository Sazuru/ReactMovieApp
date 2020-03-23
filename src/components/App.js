import React from 'react';
// import { render } from '@testing-library/react';
import { moviesData } from '../moviesData';

function removeMovie(movie) {
  const updateMovies = this.state.movies.filter(function(item) {
    return item.id !== movie.id;
  });
  this.setState({
    movies: updateMovies,
  });
}

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
        {this.state.movies.map(movie => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <button onClick={removeMovie.bind(this, movie)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
