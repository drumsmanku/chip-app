import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';

const styles = {
  height: '100%',
  
};

const StyledActiveGrid= styled(Grid)({
  height: '90%',
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem'
})

function ActiveAndUpcomingEvents() {
  return (
    <Grid container xs={9.5} style={styles} >
      <Grid item container direction='column' xs={6}>
        <h2 style={{fontSize:'large', fontWeight:'bold'}}>Active Patients</h2>
        <StyledActiveGrid item >
          hey
        </StyledActiveGrid>
      </Grid>
      <Grid item container xs={6}>
        <h2 style={{fontSize:'large', fontWeight:'bold'}}>Upcoming Events</h2>
      </Grid>
    </Grid>
  )
}

export default ActiveAndUpcomingEvents