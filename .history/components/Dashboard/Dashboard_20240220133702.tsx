import React from 'react'
import styled from '@mui/material'
import { Grid } from '@mui/material'
import sytles from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import ScheduleAndOtherDetails from './ScheduleAndOtherDetails/ScheduleAndOtherDetails'

function Dashboard() {
  return (
    <Grid container xs={12} className={sytles.container} >
      <Grid container item xs={1} >
       <Sidebar/>
      </Grid>
      <Grid zIndex={100} item xs={10}>
        <ScheduleAndOtherDetails/>
      </Grid>
      
    </Grid>
  )
}

export default Dashboard