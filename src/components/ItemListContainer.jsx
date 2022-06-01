import { Typography } from '@mui/material'
import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <Typography
        variant="h2"
        sx={{
            fontFamily: 'roboto',
            fontWeight: 500,
            fontSize: 70,
        }}
    >{greeting}
    </Typography>
  )
}

export default ItemListContainer