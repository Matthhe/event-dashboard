import { Typography, Grid } from '@mui/material';
import AppHeader from '../components/AppHeader';
import FilterBar from '../components/FilterBar';
import StatsCard from '../components/StatsCard';
const DashBoardPage = () => {
    return(
        <>
            <AppHeader />
            <FilterBar/>
            <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 4 }}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatsCard title="📆 Всего событий" value={124} trend="▲ +12 за неделю" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatsCard title="🧑‍🎓 Участники" value={45} trend="активных студентов" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatsCard title="📡 Telegram каналы" value={3} trend="все активны" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatsCard title="🏆 Топ категория" value="НИРС" trend="38 мероприятий" />
                </Grid>
            </Grid>
        </>
    );
}

export default DashBoardPage;