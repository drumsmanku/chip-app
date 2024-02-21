import React from 'react'
import { Grid } from '@mui/material'
import styled from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export interface ISidebarProps{

}
function Sidebar(props:ISidebarProps) {
  return (
    <Grid container item xs={12} direction='column'>
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <HomeOutlinedIcon/>
      </Grid>
      <Grid item xs={5}></Grid>
      
    </Grid>
  )
}

export default Sidebar