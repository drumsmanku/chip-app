import React from 'react'
import { Grid } from '@mui/material'
import styled from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export interface ISidebarProps{

}
function Sidebar(props:ISidebarProps) {
  return (
    <Grid container xs={12} direction='column'>
      <HomeOutlinedIcon/>
    </Grid>
  )
}

export default Sidebar