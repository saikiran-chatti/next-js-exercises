import Image from 'next/image';
import MainComponent from './components/mainComponent';

export default function Home() {
  return (
    <div className='flex justify-center items-center w-screen bg-sky-200 h-screen'>
      <MainComponent />
    </div>
  );
}
