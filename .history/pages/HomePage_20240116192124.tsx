import React from 'react';
import ChipInput from '@/components/ChipInput/ChipInput';


const HomePage: React.FC = () => {
  const availableSuggestions = ["Alice", "Bob", "Charlie", "Dave"];
  return (
    <div className=' w-[100%]'>
      <h1>Welcome to the Home Page</h1>
      <ChipInput availableSuggestions={availableSuggestions} />
    </div>
  );
};

export default HomePage;