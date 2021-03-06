import React from 'react';
import { styled } from '@mui/material';

const Text = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  paddingTop: '24px',
  fontSize: '4rem',
  color: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
  },
}));

const Header = ({ children, dataTestId }) => {
  return <Text data-testId={dataTestId}>{children}</Text>;
};

export default Header;
