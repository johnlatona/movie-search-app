import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Router, Route } from 'react-router-dom';
import SearchNav from './components/SearchNav';
import SearchResults from './components/SearchResults';
import { MovieProvider } from './context/context';

const history = createBrowserHistory();

function App() {
  return (
    <MovieProvider>
      <SearchNav/>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={SearchResults}/>
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
