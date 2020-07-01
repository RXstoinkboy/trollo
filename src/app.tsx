import React from 'react';
import Authentication from './components/pages/authentication-page'
import {ThemeProvider} from 'styled-components'
import theme from './utils/theme'

function App() {
  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Authentication />
      </ThemeProvider>
    </div>
  );
}

export default App;
