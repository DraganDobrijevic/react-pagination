import './pagination.styles.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {/* <li className='page-item'>
          <a
            onClick={() => {}}
            className='page-link'
            href='!#'
            aria-label='Previous'
          >
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li> */}
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        {/* <li className='page-item'>
          <a
            onClick={() => {}}
            className='page-link'
            href='!#'
            aria-label='Next'
          >
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
