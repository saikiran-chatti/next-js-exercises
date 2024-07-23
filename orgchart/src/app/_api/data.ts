
export interface OrgNode {
    id: string;
    name: string;
    position: string;
    children: OrgNode[];
}
export const mockOrgData: OrgNode = {
    id: '1',
    name: 'CEO',
    position: 'Alice Johnson',
    children: [
        {
            id: '2',
            name: 'CTO',
            position: 'Bob Smith',
            children: [
                {
                    id: '3',
                    name: 'Dev Manager',
                    position: 'Charlie Davis',
                    children: [
                        {
                            id: '4',
                            name: 'Developer',
                            position: 'David Brown',
                            children: [],
                        },
                        {
                            id: '5',
                            name: 'Developer',
                            position: 'Eva Green',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            id: '6',
            name: 'CFO',
            position: 'Fiona White',
            children: [
                {
                    id: '7',
                    name: 'Accountant',
                    position: 'George Black',
                    children: [],
                },
            ],
        },
    ],
};

export async function fetchRootOrgData(): Promise<OrgNode> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockOrgData);
        }, 1000);
    })
}