import { Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'

interface TopStudent {
  name: string
  events: number
}

interface TopStudentsListProps {
  students: TopStudent[]
}

const medals = ['🥇', '🥈', '🥉']

const TopStudentsList = ({ students }: TopStudentsListProps) => {
  return (
    <Paper sx={{ p: 2, borderRadius: '20px' }} elevation={1}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        🏅 Топ-5 студентов по участию
      </Typography>
      <List>
        {students.map((student, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #eee', py: 1 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'transparent' }}>
                {index < 3 ? medals[index] : <EmojiEvents />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={student.name} />
            <Typography variant="body2" sx = {{fontWeight: 600 }}>
              {student.events} событий
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default TopStudentsList