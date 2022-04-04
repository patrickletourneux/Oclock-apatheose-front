import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import './App.css';
import Header from './components/Header';

function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
=======
    <div className="app">
      <Header />
    </div>
>>>>>>> fb5b1e66bd4bd54f9964024825e5be42c7f7743b
  );
}

export default App;
