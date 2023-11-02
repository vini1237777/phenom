import { itemKeys } from '@/app/constants';
import { rem } from '@/app/utils';
import { Box } from '@mui/material';
import React from 'react'
import CompanyContent from './DialogContent/Company';
import PlatformContent from './DialogContent/Platform';
import ResourcesContent from './DialogContent/Resources';
import SolutionsContent from './DialogContent/Solutions';

export type HoveredItemType = 'solution' | 'platform' | 'resources' | 'company' | '';

const styles = {
  wrapper: {
    [itemKeys.solution]: {
      width: rem(545),
    },
    [itemKeys.platform]: {
      width: "70%",
    },
    [itemKeys.resources]: {
      width: "60%",
    },
    [itemKeys.company]: {
      width: '80%',
    },
  },
};

const NavItemDialog = ({
  hoveredItem,
  setHoveredItem,
}: {
  hoveredItem: HoveredItemType;
  setHoveredItem: (item: HoveredItemType) => void;
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.16)',
        borderRadius: '20px',
        right: 0,
        left: 0,
        top: 120,
        zIndex: 1200,
        margin: `0 auto`,
        ...styles?.wrapper?.[hoveredItem],
      }}
      onMouseEnter={() => setHoveredItem(hoveredItem)}
      onMouseLeave={() => setHoveredItem('')}
    >
      {hoveredItem === itemKeys.solution && <SolutionsContent />}
      {hoveredItem === itemKeys.resources && <ResourcesContent />}
      {hoveredItem === itemKeys.company && <CompanyContent />}
      {hoveredItem === itemKeys.platform && <PlatformContent />}
    </Box>
  );
};

export default NavItemDialog
