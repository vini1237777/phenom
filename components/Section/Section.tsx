import { rem } from '@/app/utils';
import { Box, Typography } from '@mui/material';
import React from 'react'

const Section = () => {
  return (
    <Box
      sx={{
        height: rem(400),
        backgroundColor: 'black',
        weight: '100vw',
        paddingTop: rem(100),
        paddingBottom: rem(80),
        paddingLeft: rem(120),
        paddingRight: rem(34),
      }}
    >
        <Typography
          sx={{ color: 'white', fontSize: rem(90), lineHeight: '110%' }}
        >
          You need to focus on
        </Typography>
        <Typography
          sx={{
            background:
              'linear-gradient(89.88deg, #ff8045 2.69%, #7bd3cf 43.19%, #ab9cee 72%, #ffbd45 99.83%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: rem(90),
            lineHeight: '110%',
          }}
          component={'span'}
        >
          strategic initiatives
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: rem(90),
            lineHeight: '110%',
          }}
        >
          not repetitive,
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: rem(90),
            lineHeight: '110%',
          }}
        >
          mundane tasks.
        </Typography>
      </Box>
  );
}

export default Section
