import React from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import NavLogoSvg from '@/app/PlatformSvg/NavLogoSvg';
import { itemKeys } from '@/app/constants';
import PlatformContent from './NavItemDialogHoverContent/DialogContent/Platform';
import SolutionsContent from './NavItemDialogHoverContent/DialogContent/Solutions';
import CompanyContent from './NavItemDialogHoverContent/DialogContent/Company';
import ResourcesContent from './NavItemDialogHoverContent/DialogContent/Resources';
import { styled } from '@mui/system';
import { rem } from '@/app/utils';

interface INavbarPorps {
  setHoveredItem: ()=> void;
};

export const ButtonsWrapper = styled('div')({
  display: 'flex',
  marginRight: '34px',
});

export const CustomButton = styled(Button)({
  fontFamily: 'roobert, Arial, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '16px',
  color: 'black',
  marginRight: '12px',
  textTransform: 'none',
  borderRadius: '100px',
});

export const DemoButton = styled(CustomButton)({
  backgroundColor: '#4543d9',
  color: 'white',
  '&:hover': {
    backgroundColor: '##7172da',
  },
});

const LoginButton = styled(CustomButton)({
  border: '1px solid #4543d9',
  color: '4543d9',
  '&:hover': {
    border: '1px solid #4543d9',
    color: 'white',
    backgroundColor: '#4543d9',
  },
});

const items = [
  { label: 'Platform', key: itemKeys.platform, content: <PlatformContent /> },
  { label: 'Solutions', key: itemKeys.solution, content: <SolutionsContent /> },
  { label: 'Company', key: itemKeys.company, content: <CompanyContent /> },
  {
    label: 'Resources',
    key: itemKeys.resources,
    content: <ResourcesContent />,
  },
  { href: '/item2', label: 'Events', content: '' },
];

const navLogoStyles = {
  wrapper: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '16px',
    color: 'black',
    alignItems: 'center',
    height: '100%',
    marginLeft: '34px',
  },
  phantomLogo: {
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'black',
    width: '1em',
    fill: 'none',
    margin: '0',
    padding: '0',
    border: 'none',
    marginLeft: '4px',
    height: '45px',
    fontSize: '96px',
    display: 'block',
  },
  headerLogo: {
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'black',
    width: '1em',
    height: '45px',
    fontSize: '100px',
  },
};

const Navbar: React.FC<INavbarPorps> = ({
  setHoveredItem,
}: any) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          color: 'black',
          top: '52px',
          position: 'sticky',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding:rem(10),
          zIndex: 100
        }}
      >
        <Link href="/" passHref>
          <Button style={{ color: 'black', textTransform: 'none' }}>
            <NavLogoSvg styles={navLogoStyles} />
          </Button>
        </Link>
        <Box sx={{ zIndex: 1}}>
          {items.map((item: any) => {
            return item.href ? (
              <Link href={item.href} key={item.label}>
                <Button
                  sx={{
                    color: 'black',
                    fontSize: rem(16),
                    fontWeight: 700,
                    textTransform: 'lowercase',
                  }}
                  style={{ textTransform: 'capitalize' }}
                >
                  {item.label}
                </Button>
              </Link>
            ) : (
              <React.Fragment key={item.key}>
                <Button
                  onMouseEnter={() => setHoveredItem(item.key)}
                  onMouseLeave={() => setHoveredItem('')}
                  sx={{
                    color: 'black',
                    fontSize: rem(16),
                    fontWeight: 700,
                    textTransform: 'lowercase',
                    height:rem(65)
                  }}
                  style={{ textTransform: 'capitalize' }}
                >
                  {item.label}
                </Button>
              </React.Fragment>
            );
          })}
        </Box>
        <ButtonsWrapper>
          <DemoButton
            variant="contained"
            href="/request-recruiter-experience-demo"
          >
            Book Demo
          </DemoButton>
          <LoginButton
            variant="outlined"
            href="https://login.phenom.com/"
            rel="noreferrer"
          >
            Login
          </LoginButton>
        </ButtonsWrapper>
      </Box>
    </>
  );
};

export default Navbar;
