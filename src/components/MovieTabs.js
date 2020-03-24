import React from 'react';

const MovieTabs = props => {
  const { sortBy, updateSortBy } = props;
  const handleClick = value => {
    return () => {
      updateSortBy(value);
    };
  };
  const setClassName = value => {
    return `nav-link ${sortBy === value ? 'active' : ''}`;
  };

  return (
    <div>
      <ul className="tabs nav nav-pills mb-3">
        <li className="nav-item">
          <div
            className={setClassName('popularity.desc')}
            onClick={handleClick('popularity.desc')}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={setClassName('revenue.desc')}
            onClick={handleClick('revenue.desc')}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={setClassName('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}
          >
            Vote Average desc
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MovieTabs;
