import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { common, lightBlue } from '@mui/material/colors';

const CustomizedButton = styled(Button)({
  padding: '.8rem',
  fontSize: '.9rem',
  fontWeight: 600,
  color: common.black,
  backgroundColor: lightBlue[50],
  borderRadius: '50%',
  '&:hover': {
    color: common.black,
    backgroundColor: lightBlue[200],
  },
});

export default function CounterButton({ onClick, buttonName }) {
  return (
    <CustomizedButton
      onClick={onClick}
    >
      {buttonName}
    </CustomizedButton>
  );
};