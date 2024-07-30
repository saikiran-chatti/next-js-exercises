import { Post } from './postsContainer';
const Posts = async () => {
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    cache: 'no-store',
  });
  const posts: Post[] = await response.json();
  return (
    <div className='flex flex-col gap-2 overflow-scroll'>
      {posts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Posts;
