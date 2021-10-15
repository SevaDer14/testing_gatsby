import React from 'react';
import { styled } from '@mui/material';

const Text = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  paddingTop: '24px',
  fontSize: '4rem',
  color: 'red',
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
  },
}));

const Header = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Header;
