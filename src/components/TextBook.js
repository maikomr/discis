/**
 * Created by maiko on 27/12/2016.
 */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import { grey400 } from 'material-ui/styles/colors';
import { ListItem } from 'material-ui/List';

import { connect } from 'react-redux';
import { selectTextBook, openDialog } from '../actions/textBookEditDialog';

const TextBook = ({ data, onEdit }) => {
  const iconButtonElement = (
    <IconButton touch>
      <MoreVertIcon color={grey400} />
    </IconButton>
  );
  const rightIconMenu = (
    <IconMenu
      iconButtonElement={iconButtonElement}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        leftIcon={<ImageEdit />}
        onTouchTap={(e) => (onEdit(data))}
      >
        Edit
      </MenuItem>
    </IconMenu>
  );
  return (
    <ListItem
      rightIconButton={rightIconMenu}
      primaryText={<strong>{data.title}</strong>}
      secondaryText={data.author}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onEdit(textbook) {
    dispatch(selectTextBook(textbook));
    dispatch(openDialog());
  }
});

export default connect(null, mapDispatchToProps)(TextBook);
