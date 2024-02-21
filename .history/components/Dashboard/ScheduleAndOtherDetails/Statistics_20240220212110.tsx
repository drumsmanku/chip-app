import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',

})
const StyledGridInfo=styled(Grid)({
  backgroundColor: '#1B2C4F',
  display:'flex',
  alignItem:'center',


})
const styles = {
  height: '100%'
};
function Statistics() {
  return (
    <Grid container xs={9.5} style={styles}>
      <Grid container item direction='column' xs={6}>
        <StyledGrid container item xs={6}>
          <StyledGridInfo direction='column'item xs={7} sx={{}}>
            <div className='flex flex-col'>
              <h2 style={{ fontSize:'x-large', fontWeight:'bold'}}>42</h2>
              <h4>Patients Visited</h4>
              <h6>This month</h6>
            </div>
            
          </StyledGridInfo>
          <Grid item xs={5}>

          </Grid>
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