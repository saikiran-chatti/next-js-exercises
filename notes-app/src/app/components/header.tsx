import { NextPage } from 'next';
import { Category } from '../_api/data';

interface Props {
  data: Category[];
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: NextPage<Props> = (props) => {
  return (
    <div className='flex flex-row justify-center gap-2'>
      {props.data.map((item) => (
        <button
          onClick={props.onSelect}
          key={item}
          className='px-4 py-2 text-black bg-gray-200 rounded-xl'
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Header;
