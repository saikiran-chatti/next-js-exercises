'use client';
import { NextPage } from 'next';
import { OrgNode } from '../_api/data';
import { useState } from 'react';

interface Props {
  data: OrgNode;
}

const OrgNodeCard: NextPage<Props> = (props) => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className='flex flex-col gap-3'>
      {props.data && (
        <div className='flex flex-row gap-2'>
          <strong
            className='cursor-pointer'
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
          >
            {isClicked ? '-' : '+'}
          </strong>
          <p>
            {props.data.name}: {props.data.position}
          </p>
        </div>
      )}
      <div className='ml-4 flex flex-col'>
        {props.data.children &&
          isClicked &&
          props.data.children.map((child) => <OrgNodeCard data={child} />)}
      </div>
    </div>
  );
};

export default OrgNodeCard;
