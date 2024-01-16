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
      if (highlightedChipIndex === null) {
        setHighlightedChipIndex(chips.length - 1);
      } else if (highlightedChipIndex === chips.length - 1) {
        const chipToRemove = chips[highlightedChipIndex];
        handleDeleteChip(chipToRemove);
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
