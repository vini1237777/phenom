import { industry, partnership, role } from '@/app/constants';
import { rem } from '@/app/utils';
import Category from '@/components/Category';
import { Box } from '@mui/material';
import React from 'react'

const categoryStyle={
  wrapper:{
    flex: 1,
  },
  items:{
    wordWrap: 'break-word'
  }
}

const SolutionsContent: React.FC = () => {
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
      <Category items={role} styles={categoryStyle} title={'Roles'} />
      <Category items={industry} styles={categoryStyle} title={'Industry'} />
      <Category
        items={partnership}
        styles={categoryStyle}
        title={'Partnership'}
      />
    </Box>
  );
};


export default SolutionsContent;