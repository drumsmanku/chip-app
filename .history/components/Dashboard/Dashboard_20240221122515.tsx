'use client'
import React from 'react'
import styled from "@emotion/styled";
import { Grid } from '@mui/material'
import sytles from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import ScheduleAndOtherDetails from './ScheduleAndOtherDetails/ScheduleAndOtherDetails';

const StyledGrid=styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

function Dashboard() {
  return (
    <Grid container xs={10} className={sytles.container} >
      <Grid container item xs={1} >
       <Sidebar/>
      </Grid>
      <StyledGrid item xs={10.5}>
        <ScheduleAndOtherDetails/>
      </StyledGrid>
      
    </Grid>
  )
}

export default Dashboard