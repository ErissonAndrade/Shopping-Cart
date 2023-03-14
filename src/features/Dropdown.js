import * as React from 'react';
import Menu from '@mui/material/Menu';
import LinkButton from '../components/buttons/LinkButton';

export default function Dropdown({ label, categories }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <LinkButton
        onClick={handleClick}
        label={label}
      >
      </LinkButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {categories}
      </Menu>
    </div>
  );
};
