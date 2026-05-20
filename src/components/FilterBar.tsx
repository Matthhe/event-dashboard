import { useState } from 'react';
import {
  Button, FormControl, InputLabel, MenuItem, Paper,
  Select, Stack, TextField
} from '@mui/material';

interface FilterBarProps {
  onParse: () => void;
  isParsing: boolean;
}

const FilterBar = ({ onParse, isParsing }: FilterBarProps) => {
  const [category, setCategory] = useState('all');
  const [student, setStudent] = useState('all');

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        <TextField type="date" label="От" slotProps={{ inputLabel: { shrink: true } }} size="small" />
        <TextField type="date" label="До" slotProps={{ inputLabel: { shrink: true } }} size="small" />

        <FormControl size="small">
          <InputLabel>🏷️ Категория</InputLabel>
          <Select label="🏷️ Категория" value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="all">Все категории</MenuItem>
            <MenuItem value="nirs">НИРС</MenuItem>
            <MenuItem value="sport">Спорт</MenuItem>
            <MenuItem value="social">Общественная деятельность</MenuItem>
            <MenuItem value="patriotic">Идеологическое воспитание</MenuItem>
            <MenuItem value="other">Прочее</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel>👥 Студент</InputLabel>
          <Select label="Студент" value={student} onChange={(e) => setStudent(e.target.value)}>
            <MenuItem value="all">Все студенты</MenuItem>
            <MenuItem value="ivanov">Иванов И.И.</MenuItem>
            <MenuItem value="petrov">Петров П.П.</MenuItem>
            <MenuItem value="sidorov">Сидоров С.С.</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary">🔍 Применить</Button>
        <Button
          variant="contained"
          color="warning"
          disabled={isParsing}
          onClick={onParse}
        >
          {isParsing ? 'Парсинг...' : '🔄 Запустить парсинг'}
        </Button>
      </Stack>
    </Paper>
  );
};

export default FilterBar;