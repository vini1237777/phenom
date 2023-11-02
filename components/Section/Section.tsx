import { IObject } from '@/app/constants';
import { rem } from '@/app/utils';
import { Box, Typography } from '@mui/material';
import React from 'react'

const Section = ({role}: IObject) => {

  // Helper function to render text sections with optional highlights
  const renderTextSections = (textParts: any[]) => {
    return textParts.map((part: IObject | string, index: number) =>
      typeof part === 'string' ? (
        // This part renders a string without any highlight
        <Typography
          key={index}
          sx={{
            color: 'white',
            fontSize: rem(90),
            lineHeight: '110%',
          }}
          component={'span'}
        >
          {part}
        </Typography>
      ) : (
        // This part renders the highlighted part
        <Typography
          key={index}
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
          {part.highlight}
        </Typography>
      ),
    );
  };
  return (
    // A container box for the section
    <Box
      sx={{
        height: 'auto',
        backgroundColor: 'black',
        width: '100vw',
        paddingTop: rem(100),
        paddingBottom: rem(80),
        paddingLeft: rem(120),
        paddingRight: rem(34),
      }}
    >
      {/* Box container for text sections */}
      <Box sx={{ width: '1000px' }}>
        {/* Conditionally render text sections if sectionText is available */}
        {role.sectionText && renderTextSections(role.sectionText)}
      </Box>
    </Box>
  );
}

export default Section
