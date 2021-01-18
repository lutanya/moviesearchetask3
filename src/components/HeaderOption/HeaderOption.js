import React, {useRef, useState} from 'react';
import {StyledButton} from '../Button/StyledButton';
import {SearchArea, StyledAddButton} from '../Header/StyledHeader.js';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HeaderOption = ({handleOpenModal}) => {
  const [input, setInput] = useState('');

  let link = useRef(null);

  function handleKeypress(event) {
    if (event.key === 'Enter') {
      link.click();
    }
  };

  return (
    <>
      <StyledButton position={StyledAddButton} onClick={() => handleOpenModal('add')} >
        +ADD MOVIE
      </StyledButton>
      <p>FIND YOUR MOVIE</p>
      <SearchArea>
        <input
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onKeyPress={handleKeypress}
          placeholder='What do you want to watch?'
          id='searchParam'
        />
        <StyledButton colored onClick={()=>link.click()}>
          <Link
            to={`/search?title=${input}`}
            style={{textDecoration: 'none', color: 'inherit'}}
            ref={(node) => (link = node)}
          >
            SEARCH
          </Link>
        </StyledButton>
      </SearchArea>
    </>
  );
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type) => dispatch(openModalByType(type)),
  };
}

export default connect(null, mapDispatchToProps)(HeaderOption);

HeaderOption.propTypes = {
  className: PropTypes.string,
  handleOpenModal: PropTypes.func.isRequired,
};
