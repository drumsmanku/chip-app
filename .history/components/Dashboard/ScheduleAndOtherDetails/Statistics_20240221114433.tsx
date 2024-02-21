import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';
import img70 from '../../../Assets/70.png'
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProfileImg from '../../../Assets/profileEllipse.png'
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem'

})
const StyledGrid1=styled(Grid)({
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem',
  padding: '1rem 1rem 0 1rem'

})
const StyledGridInfo=styled(Grid)({
  backgroundColor: '#1B2C4F',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderTopLeftRadius:'2rem',
  borderBottomLeftRadius:'2rem'

})
const StyledGridStocks=styled(Grid)({
  backgroundColor: '#2C3A58',
  display:'flex',
  alignItems:'center',
  borderTopRightRadius:'2rem',
  borderBottomRightRadius:'2rem',
  justifyContent:'center',

})

const StyledStatisticsGrid=styled(Grid)({
  padding: '1rem 1rem 0 1rem',
  borderRadius: '2rem',
  backgroundColor:'#1B2C4F',
  marginLeft:'1rem'
})
const styles = {
  height: '100%',
  
};
function Statistics() {
  return (
    <Grid container xs={9.5} style={styles}>
      <Grid container item direction='column' sx={{display:'flex', justifyContent:'space-around'}} xs={5}>
        <StyledGrid container item xs={5}>
          <StyledGridInfo container direction='column'item xs={7} >
            <div className='flex flex-col '>
              <h2 style={{ fontSize:'x-large', fontWeight:'bold'}}>42</h2>
              <h4 style={{ fontSize:'medium', fontWeight:'bold'}}>Patients Visited</h4>
              <h6 style={{ fontSize:'small'}}>This month</h6>
            </div>
            
          </StyledGridInfo>
          <StyledGridStocks item xs={5}>
            <Image src={img70} alt='Not found' width={50}/>
          </StyledGridStocks>
        </StyledGrid>
        <StyledGrid1 container direction='column' item xs={5}>
          <Grid container item xs={2}>
            <ArrowRightAltIcon style={{backgroundColor:'#409BEE', borderRadius:'35%' ,color:'black', marginRight:'1rem'}}/>
            <h6 style={{fontSize:'small'}}>Upcoming Events</h6>
          </Grid>
          <Grid container xs={7} item sx={{ marginTop:'0.3rem'}}>
            <Grid item xs={5}>
              <Image src={ProfileImg} alt='profile' height={60}/>
            </Grid>
            <Grid item xs={7}>
              <div className='flex flex-col mb-2 '>
                <h2 style={{ fontSize:'large', fontWeight:'bold'}}>Alizah Shah</h2>
                <h4 style={{ fontSize:'small',}}><AccessAlarmsOutlinedIcon sx={{fontSize:'small', marginRight:'0.5rem'}}/>08:00-09:00 am</h4>
                <h6 style={{ fontSize:'small', backgroundColor:'#2C3A58', textAlign:'center', padding:'0.3rem', borderRadius:'0.5rem'}}>Visited 7 days ago</h6>
              </div>
            </Grid>
          </Grid>
        </StyledGrid1>
      </Grid>
      <StyledStatisticsGrid container direction='column' item xs={6}>
        <Grid style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} item xs={3}>
          <div className='flex flex-col mb-2 '>
            <h2 style={{ fontSize:'x-large', fontWeight:'bold'}}>Statistics</h2>
            <h4 style={{ fontSize:'small',color:'#DCDCDC'}}> November 2023</h4>
          </div>
          <select className='text-white bg-none border-[#409BEE] rounded-sm h-8' name="cars" >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
                    
        </Grid>
      </StyledStatisticsGrid>
    </Grid>
  )
}

export default Statistics