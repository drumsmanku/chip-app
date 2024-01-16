"use client";
import React, { useState } from 'react';
import Chip from '../Chip/Chip';
import styles from './ChipInput.module.css';

interface ChipInputProps {
  availableSuggestions: string[];
  availableEmails: string[];
}

const ChipInput: React.FC<ChipInputProps> = ({ availableSuggestions, availableEmails }) => {
  const [chips, setChips] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(availableSuggestions);
  const [highlightedChipIndex, setHighlightedChipIndex] = useState<number | null>(null);
  const [isInputFocused, setInputFocused] = useState(false);
  const [isSelectingSuggestion, setSelectingSuggestion] = useState(false);
  const [lastBackspaceTime, setLastBackspaceTime] = useState<number>(0);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setFilteredSuggestions(availableSuggestions.filter(s => s.toLowerCase().includes(value.toLowerCase()) && !chips.includes(s)));
    setHighlightedChipIndex(null);
  };

  const handleDeleteChip = (chipToDelete: string) => {
    setChips(chips.filter(chip => chip !== chipToDelete));
    setFilteredSuggestions([chipToDelete, ...filteredSuggestions]);
    
  };

  const handleSelectSuggestion = (suggestion: string) => {
    if (!chips.includes(suggestion)) {
      setChips([...chips, suggestion]);
      setInput('');
      setFilteredSuggestions(filteredSuggestions.filter(s => s !== suggestion));
      setHighlightedChipIndex(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && input === '') {
      const currentTime = new Date().getTime();
      const timeSinceLastBackspace = currentTime - lastBackspaceTime;

      if (highlightedChipIndex === null && timeSinceLastBackspace < 500) { // 500ms threshold for double press
        // User has double pressed backspace quickly, highlight the last chip
        setHighlightedChipIndex(chips.length - 1);
        setLastBackspaceTime(currentTime);
      } else if (highlightedChipIndex !== null) {
        // A chip is highlighted, delete it
        setChips(prevChips => {
          const updatedChips = [...prevChips];
          updatedChips.splice(highlightedChipIndex, 1);
          return updatedChips;
        });

        // Reset the highlighted chip index and backspace timestamp
        setHighlightedChipIndex(null);
        setLastBackspaceTime(0);
      } else {
        // User has pressed backspace without the double press, update the timestamp
        setLastBackspaceTime(currentTime);
      }
    }
  };
  

  return (
    <div className={styles.chipInput}>
      <div className={styles.chipContainer}>
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onDelete={() => handleDeleteChip(chip)}
            isHighlighted={index === highlightedChipIndex}
          />
        ))}
        <div>
          
        </div>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder='Add new user'
          onFocus={() => {
            setInputFocused(true);
            setFilteredSuggestions(
              availableSuggestions.filter(s =>
                s.toLowerCase().includes(input.toLowerCase()) && !chips.includes(s)
              )
            );
          }}
          onBlur={() => {
            // Only hide suggestions if a suggestion is not currently being selected.
            if (!isSelectingSuggestion) {
              setInputFocused(false);
            }
            setHighlightedChipIndex(null);
          }}
        />


      </div>
      {isInputFocused && filteredSuggestions.length > 0 && (
        <div className={styles.suggestions}>
          {filteredSuggestions.map((suggestion, index) => (
            <div
            key={index}
            className={styles.suggestionItem}
            onMouseDown={() => {
              setSelectingSuggestion(true); // Set this before focusing the input
            }}
            onClick={() => {
              handleSelectSuggestion(suggestion);
              setInputFocused(true);
              setSelectingSuggestion(false); // Reset after the suggestion is selected
            }}
          >
            {suggestion}
           
          </div>
          
          ))}
        </div>
      )}

    </div>
  );
};

export default ChipInput;
