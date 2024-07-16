import Image from 'next/image';
import image from '../../public/image-product-desktop.jpg';
export default function Home() {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-[#F2EBE4]'>
      <div className='container w-1/2 h-1/2 bg-white rounded-xl flex flex-row'>
        <Image src={image} alt='image' className='rounded-l-lg'/>
        <div className='px-8 py-4 flex flex-col gap-3'>
          <p className='tracking-widest font-light text-sm text-gray-400'>
            PERFUME
          </p>
          <div className='flex flex-col font-bold text-xl'>
            <strong>Gabrielle</strong>
            <strong>Essence Eau</strong>
            <strong>De Parfum</strong>
          </div>
          <p className='text-gray-500'>
            A floral, solar and voluptous A floral, solar and voluptous A
            floral, solar and voluptous A floral, solar and voluptous A floral,
            solar and voluptousA floral, solar and voluptous. A floral, solar
            and voluptous A floral, solar and voluptousA
          </p>
          <div className='flex flex-row gap-5 items-center'>
            <p className='text-green-700 font-semibold text-2xl'>$149.99</p>
            <del className='text-sm text-gray-400'>$169.99</del>
          </div>
          <button className='flex w-5/6 px-3 py-2 bg-green-700 flex-row rounded-xl text-white items-center justify-center'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
