import { Typography } from '@mui/material';
import AppHeader from '../components/AppHeader';
import FilterBar from '../components/FilterBar';
const DashBoardPage = () => {
    return(
        <>
        <Typography variant='h1' color='primary'>
            <AppHeader />
            <FilterBar/>
        </Typography>
        </>
    );
}

export default DashBoardPage;