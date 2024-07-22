export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
    category: string;
}

const mockTasks: Task[] = [
    { id: '1', title: 'Complete project report', description: 'Write and submit the project report by the end of the week.', dueDate: '2024-07-20', priority: 'high', category: 'Work' },
    { id: '2', title: 'Buy groceries', description: 'Purchase milk, bread, and eggs from the store.', dueDate: '2024-07-18', priority: 'medium', category: 'Personal' },
    { id: '3', title: 'Morning workout', description: 'Do a 30-minute cardio session.', dueDate: '2024-07-19', priority: 'low', category: 'Fitness' },
    { id: '4', title: 'Client meeting', description: 'Discuss the project requirements with the client.', dueDate: '2024-07-21', priority: 'high', category: 'Work' },
    { id: '5', title: 'Read a book', description: 'Read the next chapter of "The Great Gatsby".', dueDate: '2024-07-18', priority: 'low', category: 'Personal' },
    { id: '6', title: 'Yoga session', description: 'Attend a 1-hour yoga class.', dueDate: '2024-07-20', priority: 'medium', category: 'Fitness' },
    { id: '7', title: 'Team lunch', description: 'Join the team for lunch at the new restaurant.', dueDate: '2024-07-22', priority: 'medium', category: 'Work' },
    { id: '8', title: 'Weekly planning', description: 'Plan tasks and goals for the upcoming week.', dueDate: '2024-07-18', priority: 'high', category: 'Personal' },
];

export async function getTasks(): Promise<Task[]> {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTasks);
        }, 1000);
    });
}
