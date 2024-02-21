'use client'
import React from 'react'
import Image from 'next/image';
import { Grid, Box } from '@mui/material'
import styled from "@emotion/styled";
import SearchBar from './SearchBar';

const StyledContainer=styled(Grid)({
  backgroundColor:'#151C39',
  borderRadius:'2rem',
  height: '90%',
  width: '100%',
})
const StyledGrid=styled(Grid)({
  display:'flex',
  alignItems: 'center',
})

function ScheduleAndOtherDetails() {
  return (
    <StyledContainer container xs={12}>
      <Grid direction='column' container item xs={8}>
        <StyledGrid item xs={2}>
         <SearchBar/>
        </StyledGrid>
        <Grid item xs={4}>
          hi
        </Grid>
        <Grid item xs={2}>
          hi
        </Grid>
      </Grid>
      <Grid xs={4}>

      </Grid>
    </StyledContainer>
  )
}

export default ScheduleAndOtherDetails