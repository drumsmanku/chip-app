import React from 'react'
import Image from 'next/image'
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';

export interface IInfoCard{
  ImagePath:string,
  Name:string,
  Time:string
}

function InfoCard(props:IInfoCard) {
  return (
    <div className='flex p-8 rounded-md'>
      <Image src={props.ImagePath} alt='img'/>
      <div className='flex flex-col '>
        <h3>{props.Name}</h3>
        <div>
          <AccessAlarmsOutlinedIcon/>
          <p className='text-sm text-black'>{props.Time}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard