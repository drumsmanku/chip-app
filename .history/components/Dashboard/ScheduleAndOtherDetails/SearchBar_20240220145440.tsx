import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';
import styles from './SearchBar.module.css'


function SearchBar() {
  return (
    <>
    <div>
        <h1 className={styles.fontFamilia}>
            Hello
        </h1>
        <h2 className={styles.fontFamilia} style={{fontWeight:'bold', fontSize:'large'}}>
            Dr. Colter <WavingHandIcon style={{color:'#E6D78C'}}/>
        </h2>
    </div>
      
    </>
  )
}

export default SearchBar