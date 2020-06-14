import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Rpi } from './pages';
import { Nav } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Box component="div" p={7}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/rpi">
              <Rpi />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Router>
    </div>
  );
}

export default App;
