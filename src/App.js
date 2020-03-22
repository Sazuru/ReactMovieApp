import React from 'react';
// import { render } from '@testing-library/react';

const movie = {
  title: 'Avengers: Inifnity War',
  vote_average: 8.5,
  image:
    'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  overview:
    'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
};

function Image(props) {
  return <img src={props.src} alt={props.alt} width="100%"></img>;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview },
    } = this.props;
    console.log(this.state.like);
    return (
      <div style={{ width: '300px' }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? 'hide' : 'show'}
          </button>
          <button
            type="button"
            className={this.state.like ? 'btn__like' : ''}
            onClick={this.handleLike}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview} </p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
