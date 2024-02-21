import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';
import img70 from '../../../Assets/70.png'
import Image from 'next/image';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem'

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
      <Grid container item direction='column' sx={{display:'flex', justifyContent:'space-between'}} xs={5}>
        <StyledGrid container item xs={5}>
          <StyledGridInfo direction='column'item xs={7} sx={{}}>
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
        <StyledGrid container item xs={5}>
          <StyledGridInfo direction='column'item xs={7} sx={{}}>
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
      </Grid>
      <Grid item xs={6}>
        hey
      </Grid>
    </Grid>
  )
}

export default Statistics