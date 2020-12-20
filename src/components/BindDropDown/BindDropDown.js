import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchBySortParam} from '../../redux/action';

function BindDropDown({values, fetchMovies}) {
  const [value, setValue] = useState('0');

  function handleChange(event) {
    const currentVal = event.target.value;
    setValue(currentVal);
    fetchMovies(values[parseInt(currentVal)].name);
  }

  const optionTemplate = values.map((v) => (
    <option key={v.id} value={v.id}>{v.name}</option>
  ));

  return (
    <select value={value} onChange={handleChange}>
      {optionTemplate}
    </select>
  );
}


/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: (param) => dispatch(fetchBySortParam(param)),
  };
}

export default connect(null, mapDispatchToProps)(BindDropDown);
