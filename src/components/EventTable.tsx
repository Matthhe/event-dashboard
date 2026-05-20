import { useState } from 'react'
import {
  Paper, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TablePagination, Chip, IconButton, TextField, Box
} from '@mui/material'
import { OpenInNew } from '@mui/icons-material'

interface IStudent {
  fullName: string
  groupName?: string
}

interface IEvent {
  date: string
  category: string
  description: string
  postLink: string
  students: IStudent[]
}

interface EventTableProps {
  events: IEvent[]
}

const categoryMap: Record<string, { label: string; color: any }> = {
  'НИРС': { label: '🎓 НИРС', color: 'info' },
  'Спорт': { label: '⚽ Спорт', color: 'success' },
  'Общественная деятельность': { label: '🤝 Обществ.', color: 'secondary' },
  'Идеологическое воспитание': { label: '🇧🇾 Идеология', color: 'error' },
  'Прочее': { label: '📌 Прочее', color: 'default' },
}

const EventTable = ({ events }: EventTableProps) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [search, setSearch] = useState('')

  const filtered = events.filter((e) =>
    e.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage)
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper sx={{ borderRadius: '20px' }} elevation={1}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #eee' }}>
        <Typography variant="h6" sx = {{fontWeight: 600 }}>
          📌 Последние события
        </Typography>
        <TextField
          size="small"
          placeholder="🔍 Поиск по описанию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell>Участники</TableCell>
              <TableCell>Ссылка</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((event, index) => {
              const cat = categoryMap[event.category] || { label: event.category, color: 'default' }
              return (
                <TableRow key={index}>
                  <TableCell>{new Date(event.date).toLocaleDateString('ru-RU')}</TableCell>
                  <TableCell>
                    <Chip label={cat.label} color={cat.color} size="small" />
                  </TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>
                    {event.students.map((s, i) => (
                      <Chip key={i} label={s.fullName} size="small" sx={{ m: 0.5 }} />
                    ))}
                  </TableCell>
                  <TableCell>
                    <IconButton href={event.postLink} target="_blank" size="small">
                      <OpenInNew fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filtered.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage="Строк:"
      />
    </Paper>
  )
}

export default EventTable