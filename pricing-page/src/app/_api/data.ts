export enum PaymentPlanId {
    Hobby = 'Hobby',
    Pro = 'Pro',
    Credits10 = 'Credits10'
}

export interface Card {
    name: string;
    id: PaymentPlanId;
    price: string;
    description: string;
    features: string[];
}

export const planCards: Card[] = [
    {
        name: 'Hobby',
        id: PaymentPlanId.Hobby,
        price: '$9.99',
        description: 'All you need to get started',
        features: ['Limited monthly usage', 'Basic support'],
    },
    {
        name: 'Pro',
        id: PaymentPlanId.Pro,
        price: '$19.99',
        description: 'Our most popular plan',
        features: ['Unlimited monthly usage', 'Priority customer support'],
    },
    {
        name: '10 Credits',
        id: PaymentPlanId.Credits10,
        price: '$9.99',
        description: 'One-time purchase of 10 credits for your account',
        features: ['Use credits for e.g. OpenAI API calls', 'No expiration date'],
    },
];

export const fetchCards = () => {
    return planCards;
}