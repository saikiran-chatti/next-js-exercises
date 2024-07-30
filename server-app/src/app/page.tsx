import Image from 'next/image';
import PostsContainer from './components/postsContainer';

export default function Home() {
  return (
    <div className='flex flex-col bg-sky-200 h-screen w-screen justify-center items-center'>
      <PostsContainer />
    </div>
  );
}
