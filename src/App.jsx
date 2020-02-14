import { Switch, Route, } from 'react-router-dom';
import React from 'react';

import KegList from './components/KegList';
import KegAttributes from './components/KegAttributes';

function App() {
  return (
    
    <div className="App">
      <Switch>
      <Route exact path='/' component={KegList} /> 
      <Route path='/KegAttributes' component={KegAttributes} />
      </Switch> 
    </div>
    
  );
}

export default App;
