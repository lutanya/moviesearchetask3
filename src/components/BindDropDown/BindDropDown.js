import React, {useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {fetchBySortParam} from '../../redux/action';
import PropTypes from 'prop-types';

function BindDropDown({values, fetchMovies}) {
  const [value, setValue] = useState('0');

  function handleChange(event) {
    const currentVal = event.target.value;
    setValue(currentVal);
    fetchMovies(values[parseInt(currentVal)].name);
  }

  const optionTemplate = useMemo(() => values.map((v) => (
    <option key={v.id} value={v.id}>{v.name}</option>
  )), [values]);

  return (
    <select value={value} onChange={handleChange}>
      {optionTemplate}
    </select>
  );
}

BindDropDown.propTypes = {
  values: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: (param) => dispatch(fetchBySortParam(param)),
  };
}

export default connect(null, mapDispatchToProps)(BindDropDown);
