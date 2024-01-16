import React from 'react';
import ChipInput from '@/components/ChipInput/ChipInput';


const HomePage: React.FC = () => {
  const availableSuggestions = ["Alice", "Bob", "Charlie", "Dave"];
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ChipInput availableSuggestions={availableSuggestions} />
    </div>
  );
};

export default HomePage;