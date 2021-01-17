import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies, getMoviesError, getMoviesLoading } from '../../redux/reducers/filter';
import { MovieCard } from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import NoMovieFound from '../NoMovieFound/NoMovieFound';
import { useLocation, useRouteMatch } from 'react-router';
import { searchMovie } from '../../redux/action';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

/**
 * @return {Element} galery of the movies
 * @param {Array} movies a list with the movies
 */
function MovieList({movies, handleSearchMovie, loading}) {
 
  const {url} = useRouteMatch();

  let query = useQuery();
  const title = query.get("title");

  if(url==='/search'){
    useEffect(() => { handleSearchMovie(title) }, [title]);
  }

  if (loading) {
    return <>loading...</>;
  };

  return (
    <>{
      movies.length > 0
      ?
      <>
        <p>{movies.length} movies found</p>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ),
        )}
      </>
      :
      <NoMovieFound />
    }
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  loading: getMoviesLoading(state),
});


/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleSearchMovie: input => dispatch(searchMovie(input)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

