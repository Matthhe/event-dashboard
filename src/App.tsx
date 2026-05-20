import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import DashboardPage from './pages/DashBoardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;