import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',

})
function Statistics() {
  return (
    <Grid container xs={12}>
      <Grid item container direction='column' xs={6}>
        <StyledGrid item xs={5}>
          hey
        </StyledGrid>
        <Grid item xs={5}>
          hey
        </Grid>
      </Grid>
      <Grid item xs={6}>

      </Grid>
    </Grid>
  )
}

export default Statistics