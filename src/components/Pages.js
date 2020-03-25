import React from 'react';

const Pages = props => {
  const { page, totalPages, changePage } = props;
  return (
    <div className="row">
      <div className="col">
        <ul className="pages">
          Выбор страницы
          <li>
            <p>Page {page}</p>
            <button onClick={() => changePage(page - 1)}>Previous</button>
            <button onClick={() => changePage(page + 1)}>Next</button>
          </li>
          <li>Pages {totalPages}</li>
        </ul>
      </div>
    </div>
  );
};

export default Pages;
