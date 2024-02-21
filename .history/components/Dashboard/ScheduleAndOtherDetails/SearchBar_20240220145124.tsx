import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';
import styles from './SearchBar.module.css'


function SearchBar() {
  return (
    <>
    <div>
        <h6 className={styles.fontFamilia}>
            Hello
        </h6>
        <h2 className={styles.fontFamilia} style={{fontWeight:'bold'}}>
            Dr. Colter <WavingHandIcon style={{color:'#E6D78C'}}/>
        </h2>
    </div>
      
    </>
  )
}

export default SearchBar