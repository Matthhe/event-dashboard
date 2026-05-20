import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e66',  // тёмно-синий из макета (кнопки, шапка, цифры)
    },
    warning: {
      main: '#e67e22',  // оранжевая кнопка «Запустить парсинг»
    },
    background: {
      default: '#f0f2f5', // фон всей страницы, как в body
    },
    
  },
  shape: {
    borderRadius: 12, // скругление для карточек, полей ввода, кнопок
  },
  typography: {
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
});

export default theme;