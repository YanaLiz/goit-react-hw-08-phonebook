import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => (
  <>
    <Typography
      variant="h4"
      gutterBottom
      color="#494D5F"
      sx={{ textAlign: 'center' }}
    >
      {title}
    </Typography>
    {children}
  </>
);

SectionTitle.PropType = {
  title: PropTypes.string,
};

export default SectionTitle;
