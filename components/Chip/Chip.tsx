"use client";
import React from 'react';
import styles from './Chip.module.css';

interface ChipProps {
  label: string;
  onDelete: () => void;
  isHighlighted?: boolean;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div className={styles.chip}>
      <div className={styles.chipContent}>{label}</div>
      <button className={styles.deleteIcon} onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default Chip;
