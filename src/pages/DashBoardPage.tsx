import { Grid, Typography, CircularProgress, Alert, Box } from '@mui/material';
import AppHeader from '../components/AppHeader';
import FilterBar from '../components/FilterBar';
import StatsCard from '../components/StatsCard';
import CategoryChart from '../components/CategoryChart';
import TopStudentsList from '../components/TopStudenList';
import EventTable from '../components/EventTable';
import useDashboard from '../hooks/useDashboard';
import useParse from '../hooks/useparse';

const DashBoardPage = () => {
  const { stats, events, loading, error, refreshData } = useDashboard();
  const { triggerParse, isParsing } = useParse();

  // Загрузка
  if (loading) {
    return (
      <>
        <AppHeader />
        <FilterBar onParse={() => {}} isParsing={false} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  // Ошибка
  if (error) {
    return (
      <>
        <AppHeader />
        <FilterBar onParse={() => {}} isParsing={false} />
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </>
    );
  }

  // Данные загружены
  const categoryData = stats
    ? Object.entries(stats.categories).map(([name, count]) => ({ name, count }))
    : [];

  const topCategory = categoryData.length
    ? categoryData.reduce((a, b) => (a.count > b.count ? a : b))
    : { name: '—', count: 0 };

  const handleParse = async () => {
    try {
      await triggerParse();
      await refreshData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <AppHeader />
      <FilterBar onParse={handleParse} isParsing={isParsing} />

      {/* KPI-карточки */}
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatsCard
            title="📆 Всего событий"
            value={stats?.totalEvents ?? 0}
            trend={`${stats?.activeChannels ?? 0} активных каналов`}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatsCard
            title="📡 Telegram каналы"
            value={stats?.activeChannels ?? 0}
            trend="все активны"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatsCard
            title="👥 Участников"
            value={stats?.topStudents?.length ?? 0}
            trend="активных студентов"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatsCard
            title="🏆 Топ категория"
            value={topCategory.name}
            trend={`${topCategory.count} событий`}
          />
        </Grid>
      </Grid>

      {/* График и топ студентов */}
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CategoryChart data={categoryData} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TopStudentsList students={stats?.topStudents ?? []} />
        </Grid>
      </Grid>

      {/* Таблица событий */}
      <EventTable events={events} />
    </>
  );
};

export default DashBoardPage;