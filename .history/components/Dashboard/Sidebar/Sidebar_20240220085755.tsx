import React from 'react'
import Image from 'next/image';
import { Grid } from '@mui/material'
import styled from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from '../../../Assets/Frame.png';
export interface ISidebarProps{

}
function Sidebar(props:ISidebarProps) {
  return (
    <Grid container item xs={12} direction='column'>
      <Grid  item xs={2}>
        <Image style={{textAlign: "center"}} src={logo} alt='logo'/>
      </Grid>
      <Grid container item direction='column' xs={5}>
        <Grid style={{textAlign: "center"}} item xs={2.4}>
          <HomeOutlinedIcon/>
        </Grid>
        <Grid style={{textAlign: "center"}} item xs={2.4}>
          <DescriptionOutlinedIcon/>
        </Grid>
        <Grid style={{textAlign: "center"}} item xs={2.4}>
          <PieChartOutlineOutlinedIcon/>
        </Grid>
        <Grid style={{textAlign: "center"}} item xs={2.4}>
          <MapsUgcOutlinedIcon/>
        </Grid>
        <Grid style={{textAlign: "center"}} item xs={2.4}>
          <SettingsOutlinedIcon/>
        </Grid>
        
        
        
        
      </Grid>
      <Grid item xs={5}></Grid>
      
    </Grid>
  )
}

export default Sidebar