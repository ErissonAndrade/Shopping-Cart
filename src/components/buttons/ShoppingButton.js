import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { common, lightBlue } from '@mui/material/colors';

const CustomizedButton = styled(Button)({
  padding: '.8rem',
  fontWeight: 600,
  fontSize: '.7rem',
  color: common.black,
  backgroundColor: lightBlue[50],
  '&:hover': {
    color: common.black,
    backgroundColor: lightBlue[200],
  },
});

export default function ShoppingButton({ onClick, buttonName }) {
  return (
    <CustomizedButton
      onClick={onClick}
    >
      {buttonName}
    </CustomizedButton>
  );
};