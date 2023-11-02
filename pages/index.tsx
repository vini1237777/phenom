import React, { useState } from 'react';
import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import { Box } from '@mui/material';
import NavItemDialog, { HoveredItemType } from '@/components/Navbar/NavItemDialogHoverContent/NavItemDialog';
import Recruiter from '@/components/Recruiter/Recruiter';
import Section from '@/components/Section/Section';
import Feature from '@/components/Feature/Feature';
import { IObject, recruiterRoles, recruitersInfo } from '@/app/constants';


function Home() {
  // State hooks for managing hovered nav item and active recruiter.
  const [hoveredNavItem, setHoveredNavItem] = useState<HoveredItemType>('');
  const [recruiter, setRecruiter] = useState<IObject>(recruiterRoles?.[0]);
  // Retrieves information for the currently selected recruiter.
  const recruiterInfo = recruitersInfo?.[recruiter?.key];
  return (
    <Box style={{ position: 'relative', height: '500px' }}>
      {hoveredNavItem && (
        <NavItemDialog
          setHoveredItem={setHoveredNavItem}
          hoveredItem={hoveredNavItem}
        />
      )}
      <Banner />
      <Navbar setHoveredItem={setHoveredNavItem} />
      <Recruiter
        recruiter={recruiter}
        setRecruiter={(recruiter) => setRecruiter(recruiter)}
        role={recruiterInfo}
      />
      <Section role={recruiterInfo} />
      <Feature role={recruiterInfo} />
    </Box>
  );
}

export default Home;
