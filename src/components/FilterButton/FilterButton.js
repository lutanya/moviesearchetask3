import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterButton } from './StyledFilterButton';
import { connect } from 'react-redux';
import { fetchByGenre } from '../../redux/action';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

/**
 * @param {string} genre search param
 * @param {Function} fetchByGenreProp search function
 * @return {Element} search burron on the search pane
 */
function FilterButton({ genre, fetchByGenreProp }) {
  let history = useHistory();
  const fetchMovie = useCallback(() => {
    history.push("/");
    fetchByGenreProp(genre)
  }, [genre]);
  return (
    <StyledFilterButton onClick={fetchMovie}>
      {genre}
    </StyledFilterButton>
  );
}

FilterButton.propTypes = {
  genre: PropTypes.string.isRequired,
  fetchByGenreProp: PropTypes.func.isRequired,
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchByGenreProp: (genre) => dispatch(fetchByGenre(genre)),
  };
}

export default connect(null, mapDispatchToProps)(FilterButton);
