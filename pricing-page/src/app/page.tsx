import Image from 'next/image';
import PricingPage from './components/pricingPage';

export default function Home() {
  return (
    <div className='flex bg-white flex-col  items-center justify-between p-4 min-h-[100vh]'>
      <div className='flex gap-4 justify-center items-center flex-col'>
        <p className='font-bold text-4xl'>
          Pick your{' '}
          <span className='font-bold text-4xl text-yellow-400'>pricing</span>
        </p>
        <p className='text-gray-400 text-lg max-w-[50%] font-semibold'>
          Stripe subscriptions are secure and they use webhooks Stripe
          subscriptions are secure and they use webhooks.
        </p>
      </div>
      <div className='flex flex-grow'>
        <PricingPage />
      </div>
    </div>
  );
}
