export interface Note {
    id: string;
    title: string;
    content: string;
    category: Category;
}

export type Category = 'Personal' | 'Work' | 'Fitness';

const mockNotes: Note[] = [
    { id: '1', title: 'Grocery List', content: 'Buy milk, bread, eggs, and cheese.', category: 'Personal' },
    { id: '2', title: 'Work Meeting', content: 'Discuss project milestones and deadlines.', category: 'Work' },
    { id: '3', title: 'Holiday Planning', content: 'Plan itinerary for vacation in December.', category: 'Personal' },
    { id: '4', title: 'Client Feedback', content: 'Review feedback from client meeting.', category: 'Work' },
    { id: '5', title: 'Workout Routine', content: 'Monday: Chest, Tuesday: Back, Wednesday: Legs.', category: 'Fitness' },
    { id: '6', title: 'Reading List', content: 'Finish reading "The Great Gatsby" and start "1984".', category: 'Personal' },
    { id: '7', title: 'Tech Conference', content: 'Attend talks on React and TypeScript.', category: 'Work' },
    { id: '8', title: 'Recipe Ideas', content: 'Try new recipes for pasta and salads.', category: 'Personal' },
    { id: '9', title: 'Team Building', content: 'Organize team building activities for next quarter.', category: 'Work' },
    { id: '10', title: 'Yoga Schedule', content: 'Monday: Hatha Yoga, Wednesday: Vinyasa Yoga.', category: 'Fitness' },
    { id: '11', title: 'Book Club Notes', content: 'Discuss themes and characters of "To Kill a Mockingbird".', category: 'Personal' },
    { id: '12', title: 'Project Roadmap', content: 'Define roadmap for new software release.', category: 'Work' },
    { id: '13', title: 'Vacation Packing List', content: 'Pack clothes, toiletries, and travel documents.', category: 'Personal' },
    { id: '14', title: 'Diet Plan', content: 'Plan meals for a balanced diet.', category: 'Fitness' },
    { id: '15', title: 'Workshop Preparation', content: 'Prepare slides and handouts for workshop.', category: 'Work' },
    { id: '16', title: 'Gardening Tips', content: 'Research tips for growing vegetables in small spaces.', category: 'Personal' },
    { id: '17', title: 'Quarterly Review', content: 'Review performance for the last quarter.', category: 'Work' },
    { id: '18', title: 'Home Renovation', content: 'Plan renovation of kitchen and bathroom.', category: 'Personal' },
    { id: '19', title: 'Cycling Routes', content: 'Explore new cycling routes in the area.', category: 'Fitness' },
    { id: '20', title: 'Weekly Review', content: 'Review weekly tasks and accomplishments.', category: 'Personal' },
    { id: '21', title: 'Client Presentation', content: 'Prepare presentation for new client project.', category: 'Work' },
    { id: '22', title: 'Movie Watchlist', content: 'Watch "Inception", "The Matrix", and "Interstellar".', category: 'Personal' },
    { id: '23', title: 'Budget Planning', content: 'Plan monthly budget and track expenses.', category: 'Personal' },
    { id: '24', title: 'Running Plan', content: 'Monday: 5K run, Wednesday: Interval training.', category: 'Fitness' },
    { id: '25', title: 'Marketing Strategy', content: 'Develop strategy for product launch.', category: 'Work' },
    { id: '26', title: 'Household Chores', content: 'Clean kitchen, vacuum living room, and do laundry.', category: 'Personal' },
    { id: '27', title: 'Sprint Planning', content: 'Plan tasks for the next sprint.', category: 'Work' },
    { id: '28', title: 'Health Checkup', content: 'Schedule annual health checkup.', category: 'Personal' },
    { id: '29', title: 'Swimming Schedule', content: 'Tuesday: Freestyle, Thursday: Breaststroke.', category: 'Fitness' },
    { id: '30', title: 'Annual Report', content: 'Compile data for annual performance report.', category: 'Work' },
    { id: '31', title: 'Cooking Class', content: 'Sign up for Italian cooking class.', category: 'Personal' },
    { id: '32', title: 'Code Review', content: 'Review code for the new feature implementation.', category: 'Work' },
    { id: '33', title: 'Hiking Trip', content: 'Plan weekend hiking trip with friends.', category: 'Personal' },
    { id: '34', title: 'Mindfulness Practice', content: 'Practice meditation and breathing exercises daily.', category: 'Fitness' },
    { id: '35', title: 'Product Demo', content: 'Prepare demo for new product features.', category: 'Work' },
    { id: '36', title: 'Gift Ideas', content: 'List gift ideas for upcoming birthdays.', category: 'Personal' },
    { id: '37', title: 'Code Refactoring', content: 'Refactor old codebase for better performance.', category: 'Work' },
    { id: '38', title: 'Fitness Goals', content: 'Set goals for improving fitness level.', category: 'Fitness' },
    { id: '39', title: 'Website Redesign', content: 'Plan redesign of company website.', category: 'Work' },
    { id: '40', title: 'Monthly Reflection', content: 'Reflect on personal and professional growth for the month.', category: 'Personal' },
];

export default mockNotes;