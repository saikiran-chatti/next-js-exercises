export interface Comment {
    id: string;
    author: string;
    text: string;
    replies: Comment[];
}

export const mockComments: Comment[] = [
    {
        id: '1',
        author: 'Alice',
        text: 'This is the first comment.',
        replies: [
            {
                id: '2',
                author: 'Bob',
                text: 'This is a reply to the first comment.',
                replies: [
                    {
                        id: '3',
                        author: 'Charlie',
                        text: 'This is a nested reply.',
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        id: '4',
        author: 'Dave',
        text: 'This is another comment.',
        replies: [],
    },
];


export async function fetchComments(): Promise<Comment[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockComments);
        }, 1000);
    });
}