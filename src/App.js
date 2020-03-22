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
  return <img src={props.src} alt={props.alt}></img>;
}

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image },
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
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
