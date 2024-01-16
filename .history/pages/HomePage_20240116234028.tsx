import React from 'react';
import ChipInput from '@/components/ChipInput/ChipInput';


const HomePage: React.FC = () => {
  const availableSuggestions = ["Alice", "Bob", "Charlie", "Dave","test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12"];
  const availableEmails = ["alice@gmail.com", "bob@gmail.com", "charlie@gmail.com", "dave@gmail.com"];
  return (
    <div className=' w-[100%] h-[100%] text-center '>
      <h1 className='mt-12 font-bold '>Pick Users</h1>
      <ChipInput availableSuggestions={availableSuggestions} availableEmails={availableEmails}/>
    </div>
  );
};

export default HomePage;