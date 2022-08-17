import React from 'react'
import { Button } from '@mui/material';

const MyButton = (props) => {
  const { value } = props
  return (
    <>
      <Button style={{margin : '5px'}} variant="contained" size="small" color="primary">
       {value}
      </Button>
    </>
  )
}

export default MyButton