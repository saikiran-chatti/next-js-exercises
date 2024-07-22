'use client';

import { NextPage } from 'next';
import CategorySelector from './categorySelector';
import { useState, useEffect } from 'react';
import { getTasks, Task } from '../_api/data';
import ShowTasks from './showTasks';
interface Props {}

const TaskTable: NextPage<Props> = ({}) => {
  const [categoryData, setCategoryData] = useState('');
  const [priorityData, setPriorityData] = useState('');
  const [data, setData] = useState<Task[]>([]);
  const [filteredData, setFilteredData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await getTasks();
      setData(result);
      setFilteredData(result);
    };

    fetchData();
  }, []);

  const onCategorySelect = (e) => {
    let value = e.target.innerHTML;
    setCategoryData(value);
    let result = data.filter((item) => item.category === value);
    setFilteredData(result);
  };

  const onPrioritySelect = (e) => {
    let value = e.target.innerHTML;
    setPriorityData(value);
    let result = data.filter((item) => item.priority === value);
    setFilteredData(result);
  };

  return (
    <div className='flex flex-col gap-3 max-h-1/2 bg-white rounded-xl p-4'>
      <div className='flex justify-center'>
        <strong className='text-black '>Task Management App</strong>
      </div>
      <CategorySelector
        onCategorySelect={onCategorySelect}
        onPrioritySelect={onPrioritySelect}
      />
      <ShowTasks data={filteredData} />
    </div>
  );
};

export default TaskTable;
