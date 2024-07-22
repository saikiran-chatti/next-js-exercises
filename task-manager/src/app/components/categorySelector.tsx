import { NextPage } from 'next';

interface Props {
  onCategorySelect: (e) => void;
  onPrioritySelect: (e) => void;
}

const CategorySelector: NextPage<Props> = (props) => {
  const priorityData = ['high', 'medium', 'low'];
  const categoryData = ['Personal', 'Work'];
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row gap-3'>
        {priorityData.map((item) => (
          <button
            onClick={props.onPrioritySelect}
            key={item}
            className='flex px-5 py-2 bg-gray-200 text-black rounded-md'
          >
            {item}
          </button>
        ))}
      </div>
      <div className='flex flex-row gap-3'>
        {categoryData.map((item) => (
          <button
            onClick={props.onCategorySelect}
            key={item}
            className='flex px-5 py-2 bg-gray-200 text-black rounded-md'
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
