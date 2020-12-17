import React, {lazy, Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import {SearchPane} from '../MovieList/SearchPane';
import {Footer} from '../Footer/Footer';
import {ErrorBoundary} from '../errorboundary/ErrorBoundary';
import {StyledApp, StyledMain} from './StyledApp';

import {connect} from 'react-redux';
import {fetchByGenre} from '../../redux/action';
const MovieList = lazy(() => import('../MovieList/MovieList'));
import ModalEditMovie from '../Modal/AddMoviePopup';
import {getMoviesError, getMovies, getMoviesLoading} from '../../redux/reducers/filter';
import {bindActionCreators} from 'redux';

/**
 * @return {Element} App render
 * @param {Array} movies Array of fetching movies
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const {fetchMovies} = this.props;
    fetchMovies();
  }

  shouldComponentRender() {
    if (this.loading === false) return false;
    return true;
  }
  render() {
    const {movies} = this.props;

    if (!this.shouldComponentRender()) return <>loading...</>;
    return (
      <StyledApp>
        <Header />
        <ErrorBoundary>
          <StyledMain>
            <SearchPane />
            <React.Suspense fallback={<h3>Loading...Please wait</h3>}>
              <MovieList movies={movies} />
            </React.Suspense>
          </StyledMain>
        </ErrorBoundary>
        <Footer />
        <ModalEditMovie/>
      </StyledApp>
    );
  }
}

App.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  loading: getMoviesLoading(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchMovies: fetchByGenre,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
