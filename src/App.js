import { useState, useEffect } from 'react';
import Posts from './components/posts/posts.component';
import Pagination from './components/pagination/pagination.component';
import axios from 'axios';
import './App.scss';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='app'>
      <div className='container'>
        <div className='text-center'>
          <h1 className='text-center badge bg-success fs-1 mb-5 mt-5'>
            My Blog
          </h1>
        </div>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
