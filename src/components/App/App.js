import React, {lazy, Component} from 'react';
import Header from '../Header/Header';
import {SearchPane} from '../SearchPane/SearchPane';
import {Footer} from '../Footer/Footer';
import {ErrorBoundary} from '../Errorboundary/ErrorBoundary';
import {StyledApp, StyledMain} from './StyledApp';
import ModalConductor from '../ModalConductor/ModalConductor';

const MovieList = lazy(() => import('../MovieList/MovieList'));

/**
 * @return {Element} App render
 * @param {Array} movies Array of fetching movies
 */
export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header className='header' />
        <ErrorBoundary>
          <StyledMain>
            <SearchPane />
            <React.Suspense fallback={<h3>Loading...Please wait</h3>}>
              <MovieList />
            </React.Suspense>
          </StyledMain>
        </ErrorBoundary>
        <Footer className='footer' />
        <ModalConductor />
      </StyledApp>
    );
  }
}


