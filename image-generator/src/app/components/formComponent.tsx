import { NextPage } from 'next';
import { useRef } from 'react';

interface Props {
  handlePrompt: (prompt: string) => void;
  handleDescription: (desc: string) => void;
}

const FormComponent: NextPage<Props> = (props) => {
  const promptRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const ownImageData: string[] = [
    'From this device',
    'From your phone',
    'My Device',
  ];
  return (
    <div className='flex flex-col gap-5 p-6 rounded-l-xl w-1/2 h-full'>
      <p className='text-sm'>Let's start with your content</p>
      <div className='flex flex-col gap-2'>
        <p className='text-xs'>Add Text</p>
        <div>
          <input
            ref={promptRef}
            type='text'
            className='border px-3 py-1 rounded-md'
            placeholder='Enter prompt'
          />
          <button
            onClick={() => {
              if (promptRef.current) {
                props.handlePrompt(promptRef.current.value);
              }
            }}
          >
            send
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-xs'>Add your own image</p>
        <div className='flex flex-row gap-1'>
          {ownImageData.map((item) => (
            <div
              key={item}
              className='bg-gray-200 px-3 py-1 text-black rounded text-xs'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-xs'>Generate an image using description</p>
        <div>
          <input
            ref={descRef}
            type='text'
            className='border px-3 py-1 rounded-md'
            placeholder='Enter description'
          />
          <button
            onClick={() => {
              if (descRef.current) {
                props.handleDescription(descRef.current.value);
              }
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
