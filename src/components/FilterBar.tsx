import React from 'react'
import { Paper, Stack, TextField } from '@mui/material'
const FilterBar = () => {
  return (
    <>
       <Paper>
            <Stack direction={'row'}
                   spacing={1}
                   sx={{flexWrap: 'wrap'}}
            >
                <TextField type='date' label="От и До" InputLabelProps={{ shrink: true }} size='small'></TextField>
            </Stack>

       </Paper>
    </>
  )
}

export default FilterBar