import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './utils/theme';
import { AuthProvider } from './contexts/authContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <HeaderContainer />
            <Routes>
              <Route path="/" element={<p>accueil</p>} />
              <Route path="contact" element={<p>contact</p>} />
              <Route path="mentions-legales" element={<p>mentions-legales</p>} />
              <Route path="inscription" element={<p>inscription</p>} />
              <Route path="connexion" element={<p>connexion</p>} />
              <Route
                path="tableau-de-bord"
                element={(
                  <RequireAuth>
                    <p>tableau-de-bord</p>
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
                  <RequireAuth>
                    <p>classement</p>
                  </RequireAuth>
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
            <p>Footer</p>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
