import React from 'react'
import { Typography, Grid, Box  } from '@mui/material'
import  styled  from '@emotion/styled';
import InfoCard from '@/Helpers/InfoCard';
import profile from '../../../Assets/profileEllipse.png'
import active from '../../../Assets/active.png'
import upcoming from '../../../Assets/upcoming.png.png'
import Image from 'next/image';

const styles = {
  height: '100%',
  
};

const StyledActiveGrid= styled(Grid)({
 
  backgroundColor: '#1B2C4F',
  borderRadius:'2rem'
})

function ActiveAndUpcomingEvents() {
  return (
    <Grid container xs={9.5} style={styles} >
      <Grid item container direction='column' xs={6}>
        <h2 style={{fontSize:'large', fontWeight:'bold'}}>Active Patients</h2>
        <Grid item >
          <Image src={active} alt='active' height={250}/>
        </Grid>
      </Grid>
      <Grid item container xs={6}>
        <h2 style={{fontSize:'large', fontWeight:'bold'}}>Upcoming Events</h2>
        <Grid item >
          <Image src={upcoming} alt='upcoming' height={250}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ActiveAndUpcomingEvents