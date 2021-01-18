import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import NoMovieFound from '../NoMovieFound/NoMovieFound';
import { useLocation, useRouteMatch } from 'react-router';
import { searchMovie } from '../../redux/action';
import { TITLE } from '../../redux/reducers/constants';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MovieList({ movies, handleSearchMovie, loading }) {
  const { url } = useRouteMatch();

  const query = useQuery();
  const title = query.get(TITLE);

  if (url === '/search') {
    useEffect(() => {
      handleSearchMovie(title);
    }, [title]);
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
        : <NoMovieFound />
    }
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleSearchMovie: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  movies: state.filter.movies,
  loading: state.filter.loading,
});


/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleSearchMovie: (input) => dispatch(searchMovie(input)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

