
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchBySortParam} from '../../redux/action';
import {StyledLabel} from '../MovieList/StyledLabel';

function BindDropDown({fetchMovies}) {
  const values= [
    {name: 'RELEASE DATE', id: 0},
    {name: 'TITLE', id: 1},
    {name: 'VOTE AVERAGE', id: 2},
  ];
  const [value, setValue]=useState('1');


  function handleChange(event) {
    const currentVal=event.target.value;
    setValue(currentVal);
    fetchMovies(values[parseInt(currentVal)].name);
  }

  const optionTemplate = values.map((v) => (
    <option key={v.id} value={v.id}>{v.name}</option>
  ));

  return (
    <StyledLabel>
          SORT BY
      <select value={value} onChange={handleChange}>
        {optionTemplate}
      </select>
    </StyledLabel>
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
