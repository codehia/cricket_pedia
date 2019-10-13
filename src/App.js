import React from 'react';
import {BrowserRouter as Router, 
        Route, 
        Link,
        }
        from 'react-router-dom';
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
      </Router>
    );
  }
}

export default App;
