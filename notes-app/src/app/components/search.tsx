import { NextPage } from 'next';
import { Note } from '../_api/data';

interface Props {
  data: Note[];
  onSearch: (e) => void;
}

const Search: NextPage<Props> = (props) => {
  return (
    <div className='flex mt-2 justify-center '>
      <input
        type='search'
        className='flex px-5 py-2 bg-gray-200 rounded-xl'
        onChange={props.onSearch}
      />
    </div>
  );
};

export default Search;
