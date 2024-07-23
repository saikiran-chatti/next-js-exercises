import Image from 'next/image';
import OrgContainer from './components/orgContainer';

export default function Home() {
  return (
    <div className='flex justify-center items-center bg-violet-300 w-screen h-screen'>
      <OrgContainer />
    </div>
  );
}
