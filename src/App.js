import React from 'react';
import PlayerDetails from './components/PlayerDetails';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Create from './components/Create';
import Show from './components/Show';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Link to="/">Home</Link>
          <Route path="/"></Route>
          <Button><Link to="/create">Create</Link></Button>
          <Route path="/create" component={ Create }></Route>
          <Button><Link to="/show">Show</Link></Button>
          <Route path="/show" component={ Show }></Route>
          <Route path="/show/:id" component={PlayerDetails}/>
      </Router>
    );
  }
}

export default App;
