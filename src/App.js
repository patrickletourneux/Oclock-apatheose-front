import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import './App.css';
import SignUp from './components/SignupPage/index'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SignUp />
      </div>
    </ThemeProvider>
  );
}

export default App;
