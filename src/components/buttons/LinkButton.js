import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { common } from '@mui/material/colors';

const CustomizedButton = styled(Button)({
  color: common.white,
  '&:hover': {
    color: common.black,
  },
});

export default function LinkButton({ label, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <CustomizedButton
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        padding: 0,
      }}
    >
      {label}
    </CustomizedButton>
  );
};