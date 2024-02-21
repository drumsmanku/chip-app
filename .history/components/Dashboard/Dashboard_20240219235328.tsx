import React from 'react'
import sytles from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import { Grid } from '@mui/material'
import styled from '@mui/material'


function Dashboard() {
  return (
    <Grid container xs={12} className={sytles.container} >
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <Sidebar/>
      </Grid>
      <Grid item xs={7}></Grid>
      
    </Grid>
  )
}

export default Dashboard