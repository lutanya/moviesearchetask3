import React, {lazy, Component} from 'react';
import {SearchPane} from '../SearchPane/SearchPane';
import {Footer} from '../Footer/Footer';
import {ErrorBoundary} from '../Errorboundary/ErrorBoundary';
import {StyledApp, StyledMain} from '../App/StyledApp';
//import MovieList from '../MovieList/MovieList';
import ModalConductor from '../ModalManager/ModalManager';

const MovieList = lazy(() => import('../MovieList/MovieList'));

/**
 * @return {Element} App render
 * @param {Array} movies Array of fetching movies
 */
export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <MovieDetails/>
        <ErrorBoundary>
          <StyledMain>
            <SearchPane />
            <React.Suspense fallback={<h3>Loading...Please wait</h3>}>
              <MovieList />
            </React.Suspense>
          </StyledMain>
        </ErrorBoundary>
        <Footer className='footer'/>
        <ModalConductor/>
      </StyledApp>
    );
  }
}


