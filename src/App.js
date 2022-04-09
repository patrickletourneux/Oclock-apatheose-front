import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './utils/theme';

import { AuthProvider } from './contexts/authContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import SignUp from './components/SignupPage/index';
import Login from './components/LoginPage';
import LeaderboardPage from './components/LeaderboardPage';

import DashboardPage from './components/DashboardPage';

import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <HeaderContainer />
            <Routes>
              {/* TODO make const file with urls */}
              <Route path="/" element={<p>accueil</p>} />
              <Route path="contact" element={<p>contact</p>} />
              <Route path="mentions-legales" element={<p>mentions-legales</p>} />
              <Route path="inscription" element={<SignUp />} />
              <Route path="connexion" element={<Login />} />
              <Route
                path="tableau-de-bord"
                element={(
                  <RequireAuth>
                    <DashboardPage />
                  </RequireAuth>
                )}
              />
              <Route
                path="ma-maison"
                element={(
                  <RequireAuth>
                    <p>ma-maison</p>
                  </RequireAuth>
                )}
              />
              <Route
                path="mes-taches"
                element={(
                  <RequireAuth>
                    <p>mes-taches</p>
                  </RequireAuth>
                )}
              />
              <Route
                path="classement"
                element={(
                  // <RequireAuth>
                  <LeaderboardPage />
                  // </RequireAuth>
                )}
              />
              <Route
                path="mon-compte"
                element={(
                  <RequireAuth>
                    <p>mon-compte</p>
                  </RequireAuth>
                )}
              />
              <Route path="*" element={<p>404</p>} />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
