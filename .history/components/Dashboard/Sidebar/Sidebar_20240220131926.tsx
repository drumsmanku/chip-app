'use client'
import React from 'react'
import Image from 'next/image';
import { Grid, Box } from '@mui/material'
import styled from "@emotion/styled";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from '../../../Assets/Frame.png';
import acc from '../../../Assets/accImg.png'


export interface ISidebarProps{

}

const CenteredGrid= styled(Grid)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
const CenteredGridBottomImg= styled(Grid)({
  textAlign: 'center',
  
})
function Sidebar(props:ISidebarProps) {
  return (
    <Grid  container xs={12} direction='column'>
       <CenteredGrid item xs={3}>
        <Image src={logo} alt='logo' layout='intrinsic' height={30} width={30} />
       </CenteredGrid>
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
      <CenteredGrid direction='column'  item xs={4}>
        <Grid item  direction='column'>
          <Image src={acc} alt='account' layout='intrinsic'height={10}width={30} style={{borderRadius:'100%', backgroundColor:'#BDD8F0'}} />
        </Grid>
        
        <Grid style={{textAlign: "center"}} item  >
          <LogoutOutlinedIcon/>
        </Grid>
        
      </CenteredGrid>
      
    </Grid>
  )
}

export default Sidebar