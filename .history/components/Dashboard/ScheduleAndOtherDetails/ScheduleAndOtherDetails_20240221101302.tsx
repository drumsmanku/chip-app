'use client'
import React from 'react'
import Image from 'next/image';
import { Grid, Box } from '@mui/material'
import styled from "@emotion/styled";
import SearchBar from './SearchBar';
import Statistics from './Statistics';

const StyledContainer=styled(Grid)({
  backgroundColor:'#151C39',
  borderRadius:'2rem',
  height: '90%',
  width: '100%',
})
const StyledGrid=styled(Grid)({
  display:'flex',
  alignItems: 'center',
  height: '20%',
})
const StyledGrid1=styled(Grid)({
  display:'flex',
  paddingLeft:'2rem',
  height: '30%',
  
})

function ScheduleAndOtherDetails() {
  return (
    <StyledContainer container xs={12}>
      <Grid direction='column' container item xs={8} sx={{display:'flex', }}>
        <StyledGrid item xs={1}>
         <SearchBar/>
        </StyledGrid>
        <StyledGrid1 item xs={4}>
          <Statistics/>
        </StyledGrid1>
        <Grid item >
          hi
        </Grid>
      </Grid>
      <Grid xs={4}>

      </Grid>
    </StyledContainer>
  )
}

export default ScheduleAndOtherDetails