'use client'
import React from 'react'
import Image from 'next/image';
import { Grid, Box } from '@mui/material'
import styled from "@emotion/styled";

const StyledContainer=styled(Grid)({
  backgroundColor:'#151C39',
  borderRadius:'2rem',
  height: '90%',
  width: '100%',
})

function ScheduleAndOtherDetails() {
  return (
    <StyledContainer>
      <Grid direction='column' xs={8}>
        <Grid xs={2}></Grid>
        <Grid xs={4}></Grid>
        <Grid xs={7}></Grid>
      </Grid>
      <Grid xs ={4}></Grid>
    </StyledContainer>
  )
}

export default ScheduleAndOtherDetails