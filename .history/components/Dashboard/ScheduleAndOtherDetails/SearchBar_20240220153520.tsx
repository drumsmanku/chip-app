import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import styles from './SearchBar.module.css';
import  styled  from '@emotion/styled';

const StyledInputContainer=styled(Grid)({
  display: 'flex',
  alignItems: 'center',gnItems: 'center',
})

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
    <StyledInputContainer item>
      <div className='flex bg-[#2C3A58] w-96 h-12 items-center pl-4 rounded-full '>
       <SearchIcon/>
       <input className=' w-full h-full bg-none' type="text" placeholder='Search' />
      </div>
      
    </StyledInputContainer>
      
    </Grid>
  )
}

export default SearchBar