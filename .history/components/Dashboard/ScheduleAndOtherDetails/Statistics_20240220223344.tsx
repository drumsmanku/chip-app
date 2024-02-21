import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem'

})
const StyledGridInfo=styled(Grid)({
  backgroundColor: '#1B2C4F',
  display:'flex',
  alignItems:'center',
  borderTopLeftRadius:'2rem',
  borderBottomLeftRadius:'2rem'

})
const StyledGridStocks=styled(Grid)({
  backgroundColor: '#2C3A58',
  display:'flex',
  alignItems:'center',
  borderTopRightRadius:'2rem',
  borderBottomRightRadius:'2rem'

})
const styles = {
  height: '100%',
  
};
function Statistics() {
  return (
    <Grid container xs={9.5} style={styles}>
      <Grid container item direction='column' xs={4}>
        <StyledGrid container item xs={6}>
          <StyledGridInfo direction='column'item xs={7} sx={{}}>
            <div className='flex flex-col '>
              <h2 style={{ fontSize:'x-large', fontWeight:'bold'}}>42</h2>
              <h4 style={{ fontSize:'medium', fontWeight:'bold'}}>Patients Visited</h4>
              <h6 style={{ fontSize:'small'}}>This month</h6>
            </div>
            
          </StyledGridInfo>
          <StyledGridStocks item xs={5}>
            
          </StyledGridStocks>
        </StyledGrid>
        <Grid item xs={6}>
          hey
        </Grid>
      </Grid>
      <Grid item xs={6}>
        hey
      </Grid>
    </Grid>
  )
}

export default Statistics