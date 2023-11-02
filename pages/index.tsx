import React, { useState } from 'react';
import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import { Box } from '@mui/material';
import NavItemDialog, { HoveredItemType } from '@/components/Navbar/NavItemDialogHoverContent/NavItemDialog';
import Recruiter from '@/components/Recruiter/Recruiter';
import Section from '@/components/Section/Section';
import Feature from '@/components/Feature/Feature';


function Home() {
  const [hoveredNavItem, setHoveredNavItem] = useState<HoveredItemType>('');
  console.log(hoveredNavItem);
  return (
    <Box style={{ position: 'relative', height: '500px', width: '100vw' }}>
      {hoveredNavItem && (
        <NavItemDialog
          setHoveredItem={setHoveredNavItem}
          hoveredItem={hoveredNavItem}
        />
      )}
      <Banner />
      <Navbar setHoveredItem={setHoveredNavItem} />
      <Recruiter />
      <Section />
      <Feature/>
    </Box>
  );
}

export default Home;
