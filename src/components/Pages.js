import React from 'react';

const Pages = props => {
  const { currentPage, totalPages, changeCurrentPage } = props;
  const pageNumbers = Array.from(Array(totalPages), (x, index) => index + 1);
  const renderPageNumbers = pageNumbers.map(value => {
    const setClassName = `${currentPage === value ? 'active' : ''}`;
    if (
      value === 1 ||
      value === totalPages ||
      (value >= currentPage - 2 && value <= currentPage + 2)
    ) {
      return (
        <span
          key={value}
          className={setClassName}
          onClick={() => changeCurrentPage(value)}
        >
          {value}
        </span>
      );
    }
  });

  return (
    <div className="pagination mb-3">
      <span onClick={() => changeCurrentPage(currentPage - 1)}>&laquo;</span>
      {renderPageNumbers}
      <span onClick={() => changeCurrentPage(currentPage + 1)}>&raquo;</span>
    </div>
  );
};
export default Pages;
