import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global'
import { lightTheme, darkTheme } from './theme';

import Home from './pages/Home'

console.log(lightTheme)
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <GlobalStyles />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App;
