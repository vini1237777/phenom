import { IObject } from '@/app/constants';
import { rem } from '@/app/utils';
import { Box } from '@mui/material';
import React from 'react'




const Category = ({
  items,
  title,
  styles,
}: {
  items: { label: string }[];
  title? : string;
  styles? : IObject;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: rem(30),
        fontSize: rem(16),
        fontWeight: 400,
        ...styles?.wrapper,
      }}
    >
      {title && <Box sx={{ color: '#93969d' }}>{title}</Box>}
      {items?.map((item) => {
        return (
          <Box
            key={item.label}
            sx={{
              maxWidth: '160px',
              maxHeight: '100vh',
              color: '#000',
              '&:hover': {
                color: '#7172da',
              },
              ...styles?.items,
            }}
          >
            {item.label}
          </Box>
        );
      })}
    </Box>
  );
};

export default Category
