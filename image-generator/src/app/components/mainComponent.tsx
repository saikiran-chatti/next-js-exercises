'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import FormComponent from './formComponent';
import ImageComponent from './imageComponent';

interface Props {}
export interface ImageData {
  url: string;
}
const MainComponent: NextPage<Props> = ({}) => {
  const [images, setImages] = useState<ImageData[]>([]);

  const handleDescription = (desc: string) => {};

  const handlePrompt = async (prompt: string) => {
    let response = await fetch('/api/generator', {
      method: 'POST',
      body: JSON.stringify(prompt),
    });

    if (response.ok) {
      const data = await response.json();
      setImages(data);
    } else {
      console.log(response);
    }
  };
  return (
    <div className='flex flex-row bg-white rounded-xl h-1/2 w-1/2 shadow border'>
      <FormComponent
        handleDescription={handleDescription}
        handlePrompt={handlePrompt}
      />
      <ImageComponent images={images} />
    </div>
  );
};

export default MainComponent;
