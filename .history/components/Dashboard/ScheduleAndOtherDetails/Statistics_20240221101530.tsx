import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';
import img70 from '../../../Assets/70.png'
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProfileImg from '../../../Assets/profileEllipse.png'

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
          <Grid container xs={7} item sx={{ marginTop:'0.3rem', marginbottom:'1rem'}}>
            <Grid item xs={5}>
              <Image src={ProfileImg} alt='profile' height={60}/>
            </Grid>
            <Grid item xs={7}>
              <div className='flex flex-col '>
                <h2 style={{ fontSize:'large', fontWeight:'bold'}}>Alizah Shah</h2>
                <h4 style={{ fontSize:'medium', fontWeight:'bold'}}>Patients Visited</h4>
                <h6 style={{ fontSize:'small'}}>This month</h6>
              </div>
            </Grid>
          </Grid>
        </StyledGrid1>
      </Grid>
      <Grid item xs={6}>
        hey
      </Grid>
    </Grid>
  )
}

export default Statistics