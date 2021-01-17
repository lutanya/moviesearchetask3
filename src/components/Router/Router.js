// will be use

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from '../App/App';
import NotFound from '../NotFound/NotFound';
import MovieDetails from '../MovieDetails/MovieDetails';
import HeaderOption from '../HeaderOption/HeaderOption';

export default function Navigation() {
  const headerComponent = <HeaderOption />
  const movieComponent = <MovieDetails />
  return (
    <Router>
      <Switch>


        <Route path={`/film/:movieId`}>
          <App component={movieComponent} />
        </Route>
        <Route path="/search" >
          <App component={headerComponent} />
        </Route>
        <Route path="/" exact>
          <App component={headerComponent} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>);
}
