import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',

})
function Statistics() {
  return (
    <Grid container xs={9.5}>
      <Grid item direction='column' xs={6}>
        <StyledGrid item xs={3}>
          hey
        </StyledGrid>
        <Grid item xs={2}>
          hey
        </Grid>
      </Grid>
      <Grid item xs={6}>

      </Grid>
    </Grid>
  )
}

export default Statistics