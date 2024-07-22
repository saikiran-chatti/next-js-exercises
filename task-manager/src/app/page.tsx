import TaskTable from './components/taskTable';
export default function Home() {
  return (
    <div className='flex justify-center items-center bg-violet-200 w-screen h-screen p-4 overflow-scroll'>
      <TaskTable />
    </div>
  );
}
