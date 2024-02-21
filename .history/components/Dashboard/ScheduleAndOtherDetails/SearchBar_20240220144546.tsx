import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';
import styles from './SearchBar.module.css'


function SearchBar() {
  return (
    <>
    <div>
        <Typography variant='h4'>
            Hello
        </Typography>
        <Typography variant='h4'>
            Dr. Colter <WavingHandIcon style={{color:'#E6D78C'}}/>
        </Typography>
    </div>
      
    </>
  )
}

export default SearchBar