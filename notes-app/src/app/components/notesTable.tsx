import { NextPage } from 'next';
import { Note } from '../_api/data';
import { useState } from 'react';

interface Props {
  data: Note[];
}

const NotesTable: NextPage<Props> = (props) => {
  const [selectedNote, setSelectedNote] = useState<Note>();

  return (
    <div className='flex flex-row gap-4 mt-4'>
      <div className='flex flex-col gap-1 max-h-[300px] overflow-scroll'>
        {props.data.map((note) => (
          <strong
            onClick={() => setSelectedNote(note)}
            className='px-3 py-2 border-solid rounded-xl cursor-pointer bg-slate-400'
            key={note.id}
          >
            {note.title}
          </strong>
        ))}
      </div>
      <div className='w-1/2 flex flex-col'>
        {selectedNote ? (
          <div>
            <p>{selectedNote.title}</p> <p>{selectedNote.content}</p>
          </div>
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default NotesTable;
