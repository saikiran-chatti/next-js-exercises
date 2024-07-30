import { Suspense } from 'react';
import Posts from './posts';
export interface Post {
  id: number;
  title: string;
}

const PostsContainer = ({}) => {
  return (
    <div className='bg-white flex rounded-xl w-1/2 h-3/4 px-4 py-6 flex-col'>
      <h1>Posts</h1>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default PostsContainer;
