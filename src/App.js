import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        SALUT
      </div>
    </ThemeProvider>
  );
}

export default App;
