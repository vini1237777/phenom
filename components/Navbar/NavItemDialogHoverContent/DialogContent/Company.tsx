import CompanySvg from 'app/CompanySvg';
import {
  about,
  customers,
} from '@/app/constants';
import { rem } from '@/app/utils';
import Category from '@/components/Category';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

// Styles for the Category component
const categoryStyle = {
  wrapper: {
    flex: 1,
  },
  items: {
    wordWrap: 'break-word',
  },
};

// The CompanyContent component displays content related to the company
const CompanyContent: React.FC = () => {
  return (
    <Box
      maxWidth={rem(1180)}
      sx={{
        display: 'flex',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: rem(14),
      }}
    >
      {/* Render Category components for customers and about sections */}
      <Category items={customers} styles={categoryStyle} />
      <Category items={about} styles={categoryStyle} />
      {/* The right-hand side content block */}
      <Box
        sx={{
          width: rem(538),
          height: rem(247),
          padding: `${rem(24)} ${rem(32)} ${rem(32)}`,
          backgroundColor: 'black',
          borderRadius: '14px',
          position: 'relative',
          flex: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ display: 'flex', gap: rem(10) }}>
          <Typography
            sx={{
              lineHeight: '118%',
              fontWeight: 500,
              fontSize: rem(40),
              color: '#fff',
            }}
          >
            We're
          </Typography>
          <Typography
            sx={{
              lineHeight: '118%',
              fontWeight: 500,
              fontSize: rem(40),
              background:
                'linear-gradient(89.88deg, #ff8045 2.69%, #7bd3cf 43.19%, #ab9cee 72%, #ffbd45 99.83%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            component={'span'}
          >
            Growing Fast!
          </Typography>
        </Box>
        <Typography
          sx={{
            lineHeight: '118%',
            fontWeight: 500,
            fontSize: rem(40),
            color: '#fff',
          }}
        >
          Check Out Our
        </Typography>{' '}
        <Typography
          sx={{
            lineHeight: '118%',
            fontWeight: 500,
            fontSize: rem(40),
            color: '#fff',
          }}
        >
          Open Jobs.{' '}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: rem(24),
            backgroundColor: '#4543d9',
            color: '#fff',
            fontWeight: 500,
            padding: `${rem(10)} ${rem(24)}`,
            borderRadius: rem(100),
            '&:hover': {
              backgroundColor: '#7172da',
            },
          }}
        >
          Phenom Career
        </Button>
        <CompanySvg />
      </Box>
    </Box>
  );
};

export default CompanyContent;


