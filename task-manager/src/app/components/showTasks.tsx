import { NextPage } from 'next';
import { Task } from '../_api/data';

interface Props {
  data: Task[];
}

const ShowTasks: NextPage<Props> = (props) => {
  return (
    <div className='flex flex-col gap-3 max-h-[600px]'>
      <strong className='items-center align-middle'>Tasks</strong>
      <div className='flex flex-col gap-2 max-h-[400px] overflow-scroll'>
        {props.data.map((task) => (
          <div
            className='flex flex-col p-4 text-black  h-auto min-w-6 rounded-xl shadow-xl'
            key={task.id}
          >
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>{task.category}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
