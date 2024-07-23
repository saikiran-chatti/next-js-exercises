import { NextPage } from 'next';
import { Card } from '../_api/data';

interface Props {
  data: Card;
  listener: (id: string) => void;
  isClicked: boolean;
}

const PricingCard: NextPage<Props> = (props) => {
  return (
    <div
      className={`relative  shadow p-6 cursor-pointer border max-w-[30%] w-[30%] border-solid rounded-xl flex flex-col justify-between ${
        props.isClicked ? `h-[70%]` : `h-[60%]`
      }`}
      onClick={() => {
        props.listener(props.data.id);
      }}
    >
      <div className='flex flex-col gap-5 flex-grow'>
        <p className='font-bold '>{props.data.name}</p>
        <p className='font-semibold text-sm text-gray-400'>
          {props.data.description}
        </p>
        <p className='text-gray-500 font-semibold'>
          <span className='font-bold text-4xl text-black'>
            {props.data.price}
          </span>{' '}
          / month
        </p>
        <div className='flex flex-col gap-2 text-gray-400 text-sm font-semibold'>
          {props.data.features &&
            props.data.features.map((feature) => (
              <div className='flex flex-row gap-4' key={feature}>
                <p>ch</p>
                <p>{feature}</p>
              </div>
            ))}
        </div>
      </div>
      <button
        className={`min-w-max py-2 flex justify-center font-semibold shadow rounded-md transition-colors duration-300 ${
          props.isClicked
            ? `bg-yellow-300 text-white`
            : `bg-white text-gray-600`
        }`}
      >
        Buy plan
      </button>
    </div>
  );
};

export default PricingCard;