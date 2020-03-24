import React from 'react';
// import { render } from '@testing-library/react';
// import { moviesData } from '../moviesData';
import { API_KEY_3, API_URL } from '../utils/api';
import MovieTabs from './MovieTabs';
import MovieItem from './MovieItem';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: 'popularity.desc',
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log('rerender1');
    this.setState({ isLoading: true });
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    return prevState.sortBy !== this.state.sortBy ? this.getMovies() : false;
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&page=${this.state.page}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          isLoading: false,
        });
      });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(
      item
    ) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };

  updateSortBy = value => {
    this.setState({
      sortBy: value,
    });
    console.log(this.state.sortBy);
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-9">
            <div className="row justify-content-center">
              <MovieTabs
                sortBy={this.state.sortBy}
                updateSortBy={this.updateSortBy}
              />
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="row">
              <ul className="pages">
                Выбор страницы
                <li>Page {this.state.page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
