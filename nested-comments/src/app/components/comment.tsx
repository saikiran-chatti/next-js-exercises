import { NextPage } from 'next';
import { Comment } from '../_api/data';

interface Props {
  data: Comment;
}

const CommentComponent: NextPage<Props> = (props) => {
  return (
    <div className='border-2 border-dashed'>
      {props.data && (
        <div className='flex flex-col gap-3'>
          <p>Author: {props.data.author}</p>
          <p>{props.data.text}</p>
          <div className='ml-3 flex flex-col'>
            {props.data.replies.map((reply) => (
              <CommentComponent data={reply} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentComponent;
