import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';
import styles from './SearchBar.module.css'


function SearchBar() {
  return (
    <>
    <div>
        <h3 style={{fontFamily:'Manrope'}}>
            Hello
        </h3>
        <h3>
            Dr. Colter <WavingHandIcon style={{color:'#E6D78C'}}/>
        </h3>
    </div>
      
    </>
  )
}

export default SearchBar