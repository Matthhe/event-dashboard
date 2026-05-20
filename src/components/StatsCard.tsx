import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

interface StatsCardProps{
    title: string,
    value: string | number,
    trend?: string  
}

const StatsCard = ({title, value, trend}: StatsCardProps) => {
  return (
    <>
        <Card
            elevation={1}
            sx={{
                borderRadius: '20px',
                transition: 'transform 0.2s',
                '&:hover': {
                transform: 'translateY(-2px)',
                },
            }}
        >
            <CardContent>
                <Typography variant="caption" color="text.secondary">
                    {title}
                </Typography>
                <Typography variant="h4" sx = {{fontWeight: 700}} color="primary">
                    {value}
                </Typography>
                {trend && (
                    <Typography variant="body2" color="success.main">
                        {trend}
                    </Typography>
                )}
        </CardContent>
        </Card>
    </>
  )
}

export default StatsCard