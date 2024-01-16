import React from 'react';
import ChipInput from '@/components/ChipInput/ChipInput';


const HomePage: React.FC = () => {
  const availableSuggestions = ["Alice", "Bob", "Charlie", "Dave"];
  const availableEmails = ["alice@gmail.com", "bob@gmail.com", "charlie@gmail.com", "dave@gmail.com"];
  return (
    <div className=' w-[100%] h-[100%] text-center '>
      <h1 className='mt-5 font-bold '>Pick Users</h1>
      <ChipInput availableSuggestions={availableSuggestions} availableEmails={availableEmails}/>
    </div>
  );
};

export default HomePage;