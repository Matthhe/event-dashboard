import { Typography, Grid } from '@mui/material';
import AppHeader from '../components/AppHeader';
import FilterBar from '../components/FilterBar';
import StatsCard from '../components/StatsCard';
import CategoryChart from '../components/CategoryChart';
import TopStudentList from '../components/TopStudenList';
import EventTable from '../components/EventTable';

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
            <Grid container spacing={2} sx={{ marginBottom: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CategoryChart data={[
                    { name: 'НИРС', count: 38 },
                    { name: 'Спорт', count: 28 },
                    { name: 'Общество', count: 22 },
                    { name: 'Идеология', count: 18 },
                    { name: 'Прочее', count: 18 },
                    ]} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TopStudentList students={[
                    { name: 'Иванов И.И.', events: 12 },
                    { name: 'Петров П.П.', events: 11 },
                    { name: 'Сидоров С.С.', events: 8 },
                    { name: 'Кузнецова А.', events: 6 },
                    { name: 'Михайлов Д.', events: 5 },
                    ]} />
                </Grid>
            </Grid>

            <EventTable events={[
            { date: '2026-03-25', category: 'НИРС', description: 'Победа в конференции', postLink: '#', students: [{ fullName: 'Иванов И.И.' }] },
            { date: '2026-03-24', category: 'Спорт', description: 'Спартакиада', postLink: '#', students: [{ fullName: 'Сидоров С.С.' }] },
            ]} />
        </>
    );
}

export default DashBoardPage;