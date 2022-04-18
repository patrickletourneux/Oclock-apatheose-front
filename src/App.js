import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import HomePage from './components/HomePage/index';

import MySpacePage from './components/MyspacePage';

import Footer from './components/Footer';

import Page404 from './components/404';
import MytasksPage from './components/MytasksPage';

import Legals from './components/Legals';

import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <HeaderContainer />
            <Routes>
              {/* TODO make const file with urls */}
              <Route path="/" element={<HomePage />} />
              <Route path="contact" element={<Contact />} />
              <Route
                path="mentions-legales"
                element={<Legals />}
              />
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
                    <MytasksPage />
                  </RequireAuth>
                )}
              />
              <Route
                path="classement"
                element={(
                  <RequireAuth>
                    <LeaderboardPage />
                  </RequireAuth>
                )}
              />
              <Route
                path="mon-compte"
                element={(
                  <RequireAuth>
                    <MySpacePage />
                  </RequireAuth>
                )}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
