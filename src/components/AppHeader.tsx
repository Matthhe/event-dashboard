import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';
import { Dashboard, EventNote, People, Settings } from '@mui/icons-material';
const AppHeader = () => {

  const [value, setValue] = useState(0)
  return (
    <>
        <AppBar position='sticky' color='inherit' elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/*Левая часть лого */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }} color="primary">
                        📋 Faculty Activity Tracker
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Автоматизация отчётов кафедры | Telegram-аналитика
                    </Typography>
                </Box>

                {/* Правая часть: здесь будут вкладки */}
                <Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs example">
                    <Tab label="Dashboard" icon={<Dashboard/>} iconPosition='start'/>
                    <Tab label="Events" icon={<EventNote/>} iconPosition='start'/>
                    <Tab label="Students" icon={<People/>} iconPosition='start'/>
                    <Tab label="Settings" icon={<Settings/>} iconPosition='start'/> 
                </Tabs>

            </Toolbar>
        </AppBar>
    </>
  );
}

export default AppHeader