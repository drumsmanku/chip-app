import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const StyledGrid=styled(Grid)({
  backgroundColor: '#1B2C4F',

})
const styles = {
  height: '100%'
};
function Statistics() {
  return (
    <Grid container xs={9.5} style={styles}>
      <Grid container item direction='column' xs={6}>
        <StyledGrid item xs={6}>
          hey
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