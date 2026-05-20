import { Paper, Typography } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface CategoryChartProps {
  data: { name: string; count: number }[]
}

const COLORS = ['#3498db', '#27ae60', '#9b59b6', '#e74c3c', '#95a5a6']

const CategoryChart = ({ data }: CategoryChartProps) => {
  return (
    <Paper sx={{ p: 2, borderRadius: '20px' }} elevation={1}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        📊 Распределение по категориям
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default CategoryChart