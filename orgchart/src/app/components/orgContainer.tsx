import { NextPage } from 'next';
import { fetchRootOrgData, OrgNode } from '../_api/data';
import OrgNodeCard from './orgNodeCard';

interface Props {}

const OrgContainer: NextPage<Props> = async ({}) => {
  const rootOrg: OrgNode = await fetchRootOrgData();
  return (
    <div className='flex flex-col bg-white rounded-xl p-6 h-5/6 w-1/2'>
      <OrgNodeCard data={rootOrg} />
    </div>
  );
};

export default OrgContainer;
