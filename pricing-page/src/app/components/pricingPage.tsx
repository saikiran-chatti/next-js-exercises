'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Card, fetchCards } from '../_api/data';
import PricingCard from './pricingCard';

interface Props {}

const PricingPage: NextPage<Props> = ({}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isSelected, setIsSelected] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      let result: Card[] = await fetchCards();
      setCards(result);
    };
    fetchData();
  }, []);

  const listener = (id: string) => {
    setIsSelected(id);
  };

  return (
    <div className='flex flex-row gap-6 max-h-[80%] items-center'>
      {cards.map((item) => (
        <PricingCard
          key={item.id}
          data={item} 
          listener={listener}
          isClicked={isSelected === item.id}
        />
      ))}
    </div>
  );
};

export default PricingPage;
