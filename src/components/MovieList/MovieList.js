import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchByGenre} from '../../redux/action';
import {getMovies, getMoviesError, getMoviesLoading} from '../../redux/reducers/filter';
import {MovieCard} from '../MovieCard/MovieCard';
import {useComponentDidMount} from '../useComponentDidMount/useComponentDidMount';
import PropTypes from 'prop-types';

/**
 * @return {Element} galery of the movies
 * @param {Array} movies a list with the movies
 */
function MovieList({movies, fetchMovies, loading}) {
  useComponentDidMount(fetchMovies);
  const moviesCounter = useMemo(() => movies.length, [movies.length]);
  if (loading) {
    return <>loading...</>;
  };
  return (
    <>
      <p>{moviesCounter} movies found</p>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ),
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  loading: getMoviesLoading(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchMovies: fetchByGenre,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

