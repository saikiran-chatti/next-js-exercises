// 'use client';
import { NextPage } from 'next';
import { fetchComments, Comment } from '../_api/data';
import CommentComponent from './comment';

interface Props {}

const CommentsContainer: NextPage<Props> = async ({}) => {
  const comments: Comment[] = await fetchComments();
  return (
    <div className='flex flex-col p-8 rounded-xl w-1/2 max-w-[60%] h-5/6 bg-white'>
      {comments.map((comment) => (
        <CommentComponent data={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsContainer;
