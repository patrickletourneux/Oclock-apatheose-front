import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
