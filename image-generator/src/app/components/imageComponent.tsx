import { NextPage } from 'next';
import { ImageData } from './mainComponent';

interface Props {
  images: ImageData[];
}

const ImageComponent: NextPage<Props> = (props) => {
  return (
    <div className='flex p-6 bg-gray-50 rounded-r-xl w-1/2 h-full'>
      <div className='grid grid-cols-2 gap-4 overflow-auto'>
        {props.images.map((image) => (
          <img
            src={image.url}
            className='object-cover rounded-md shadow-md h-auto'
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
