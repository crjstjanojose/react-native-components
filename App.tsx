import React from 'react';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';
import {Navigation} from './src/navigation/Navigation';

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
