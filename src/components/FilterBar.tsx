import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
const FilterBar = () => {

  const [category, setCategory] = useState('all')
  const [student, setStudent] = useState('all')  
  return (
    <>
       <Paper sx={{padding: 2}}>
            <Stack direction={'row'}
                   spacing={1}
                   sx={{flexWrap: 'wrap'}}
            >
                <TextField type='date' label="От" slotProps={{ inputLabel: { shrink: true } }} size='small'></TextField>
                <TextField type='date' label="До" slotProps={{ inputLabel: { shrink: true } }} size='small'></TextField>

                <FormControl size='small'>
                    <InputLabel>
                    🏷️ Категория
                    </InputLabel>
                    <Select label="🏷️ Категория" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem value="all">
                                Все категории
                            </MenuItem>
                            <MenuItem value="nirs">
                                НИРС
                            </MenuItem>
                            <MenuItem value="sport">
                                Спорт
                            </MenuItem>
                            <MenuItem value="social">
                                Общественная деятельность
                            </MenuItem>
                            <MenuItem value="patriotic">
                                Идеологическое воспитание
                            </MenuItem>
                            <MenuItem value="Other">
                                Прочее 
                            </MenuItem>
                    </Select>
                </FormControl>

                <FormControl size='small'>
                    <InputLabel>
                    👥 Студент
                    </InputLabel>
                    <Select label="Студент" value={student} onChange={(e) => setStudent(e.target.value)}>
                            <MenuItem value="all">
                                Все студенты
                            </MenuItem>
                    </Select>
                    </FormControl>
                    <Button variant='contained' color='primary'>🔍 Применить</Button>
                    <Button variant='contained' color='warning'>🔄 Запустить парсинг</Button>
                        
            </Stack>

       </Paper>
    </>
  )
}

export default FilterBar