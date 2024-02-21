import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';
import styles from './SearchBar.module.css'


function SearchBar() {
  return (
    <Grid xs={12} container>
    <Grid item xs={4}>
        <h1 className={styles.fontFamilia} style={{ fontSize:'x-large'}}>
            Hello
        </h1>
        <h1 className={styles.fontFamilia} style={{fontWeight:'bold', fontSize:'x-large'}}>
            Dr. Colter <WavingHandIcon style={{color:'#E6D78C'}}/>
        </h1>
    </Grid>
    <Grid item>
      hey
    </Grid>
      
    </Grid>
  )
}

export default SearchBar