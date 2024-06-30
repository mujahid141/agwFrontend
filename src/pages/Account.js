import React from 'react'
import Profile from '../components/Profile'
import Lists from '../components/Lists'
import { Container } from '@mui/material'

const Account = () => {
  return (
<Container sx={{display:'flex', flexDirection:'row', padding:'0px', margin:'0px'}}>

      <Lists />

      <Profile/>
</Container>    
  )
}

export default Account