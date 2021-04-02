import './posts.styles.scss';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className='text-center'>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item mb-4'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
