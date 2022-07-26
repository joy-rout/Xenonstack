import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { GoogleLoginButton } from "react-social-login-buttons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';
import Contact from './Pages/Contact';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

// const onContact = () => {
  
// }

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <button type='button' onClick={() => {
        <Box>
          <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </Box>
      }} >login</button>
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>

        <Route exact path="/contact">
        <Contact/>
        </Route>


        <Route>
          <div>404 error page not found</div>
        </Route>

        
       
      </Switch>
      <Contact/>
    </ThemeProvider>
    
  );
}

export default App;
