import React from 'react';
import './EditMenu';
import {ModalEditMovie} from '../modal/AddMoviePopup';
import {StyledMenu} from './StyledMenu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import {openModalByType } from '../action/index';

const ITEM_HEIGHT = 48;

function LongMenu({handleOpenModal, movieIndex}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (type, title, index) => {
    handleOpenModal(type,title, index);
    setAnchorEl(null);
    
  }

  return (
    <StyledMenu>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={()=>handleOpen('edit','EDIT MOVIE',movieIndex)}>Edit          
        </MenuItem>
        <MenuItem onClick={()=>handleOpen('delete','DELETE MOVIE', movieIndex)}>Delete</MenuItem>
      </Menu>
    </StyledMenu>
  );
}

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type,title) => dispatch(openModalByType(type,title)),
  };
}


export default connect(null, mapDispatchToProps)(LongMenu);

