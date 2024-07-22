'use client';
import { NextPage } from 'next';
import { Category, Note } from '../_api/data';
import Header from './header';
import { useEffect, useState } from 'react';
import mockNotes from '../_api/data';
import NotesTable from './notesTable';
import Search from './search';
interface Props {}

const Notes: NextPage<Props> = ({}) => {
  const categories: Category[] = ['Fitness', 'Personal', 'Work'];
  const [selectedCategory, setSelectedCategory] = useState<Category>('Fitness');
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = () => {
      setAllNotes(mockNotes);
      setFilteredNotes(mockNotes);
    };

    fetchData();
  }, []);

  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    let value = (e.target as HTMLButtonElement).innerHTML;
    setSelectedCategory(value as Category);
    let result = allNotes.filter((item) => item.category === selectedCategory);
    setFilteredNotes(result);
  };

  const onSearch = (e) => {
    const value = e.target.value;
    if (value != '') {
      let res = allNotes.filter(
        (item) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.content.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNotes(res);
    } else {
      setFilteredNotes(allNotes);
    }
  };

  return (
    <div className='flex flex-col min-w-[500px] min-h-1/2 rounded-xl p-4 bg-white'>
      <Header data={categories} onSelect={onSelect} />
      <Search data={filteredNotes} onSearch={onSearch} />
      <NotesTable data={filteredNotes} />
    </div>
  );
};

export default Notes;
