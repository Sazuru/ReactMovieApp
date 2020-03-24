import React from 'react';
import image from '../img/imgNotFound.png';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false,
    };
  }

  toggleWillWatch = () => {
    const { movie, removeMovieFromWillWatch, addMovieToWillWatch } = this.props;
    this.state.willWatch
      ? removeMovieFromWillWatch(movie)
      : addMovieToWillWatch(movie);

    this.setState({
      willWatch: !this.state.willWatch,
    });
  };

  render() {
    const { movie, removeMovie } = this.props;
    const classNameButton = `btn ${
      this.state.willWatch ? 'btn-success' : 'btn-secondary'
    }`;
    const buttonText = this.state.willWatch
      ? 'Remove From Will Watch'
      : 'Will Watch';
    const imgFile =
      movie.backdrop_path || movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`
        : image;
    return (
      <div className="card">
        <img className="card-img-top" src={imgFile} alt="" />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className={classNameButton}
              onClick={() => {
                this.toggleWillWatch(movie);
              }}
            >
              {buttonText}
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => removeMovie(movie)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default MovieItem;
