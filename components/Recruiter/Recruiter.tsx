import { IObject, recruiterRoles } from '@/app/constants';
import RecruiterSvg from '@/app/RecruiterSvg';
import { rem } from '@/app/utils';
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { ButtonsWrapper, DemoButton } from '../Navbar/Navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recruiter = ({
  recruiter,
  setRecruiter,
  role,
}: {
  recruiter?: IObject;
  setRecruiter:(recruiter:IObject)=> void;
  role:IObject
}) => {
  const [open, setOpen] = useState(false); // State to manage dropdown visibility
  
  const renderTextSections = (textParts: any[]) => {
    return textParts.map((part: IObject | string, index: number) =>
      typeof part === 'string' ? (
        // Renders plain text
        <Typography
          key={index}
          sx={{
            color: 'white',
            fontSize: rem(64),
            lineHeight: '110%',
            marginLeft: rem(2),
          }}
          component={'span'}
        >
          {part}
        </Typography>
      ) : (
        // Renders highlighted text
        <Typography
          key={index}
          sx={{
            background:
              'linear-gradient(89.88deg, #ff8045 2.69%, #7bd3cf 43.19%, #ab9cee 72%, #ffbd45 99.83%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: rem(64),
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
    <Box
      sx={{
        height: 'calc(100vh - 53px)',
        backgroundColor: 'black',
        paddingLeft: rem(100),
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        marginTop: rem(50),
      }}
    >
      {/* Recruiter's avatar and dropdown on the left */}
      <Box sx={{ paddingTop: rem(70), flex: 1 }}>
        <Button
          variant="text"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Avatar
            src={role?.thumbnailImg}
            alt={'Recruiters'}
            sx={{ backgroundColor: 'white' }}
          />
          <Typography
            sx={{
              fontSize: rem(12),
              fontWeight: 700,
              lineHeight: 1.5,
              marginLeft: rem(20),
              color: 'white',
            }}
          >
            {recruiter?.label}
          </Typography>
        </Button>
        {/* renders dropdown when hovered over the  avatar and dropdown */}
        {open && (
          <Box
            sx={{
              height: 'auto',
              backgroundColor: 'white',
              paddingRight: rem(24),
              paddingLeft: rem(24),
              width: rem(290),
              position: 'absolute',
              top: '70px',
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Box
              sx={{
                paddingTop: rem(20),
                paddingBottom: rem(10),
                paddingLeft: rem(15),
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography>Role</Typography>
              <Typography>
                <ExpandMoreIcon />
              </Typography>
            </Box>

            <List>
              {recruiterRoles.map((role) => (
                <ListItem
                  key={role.label}
                  sx={{ width: rem(269), display: 'flex', gap: rem(10) }}
                  onClick={() => {
                    setRecruiter(role);
                    setOpen(false);
                  }}
                >
                  <Avatar
                    src={role.img}
                    alt={role.label}
                    sx={{ backgroundColor: 'lightgray' }}
                  />
                  <Typography
                    sx={{
                      color: 'black',
                      fontSize: rem(15),
                      fontWeight: 600,
                      lineHeight: 1.5,
                      cursor: 'pointer',
                    }}
                  >
                    {role.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        {/* renders the description below the dropdown on the left */}
        <Box
          sx={{
            width: '400px',
            fontSize: '20px',
            lineHeight: '110%',
            paddingTop: rem(20),
          }}
        >
          <Box sx={{ width: '400px' }}>
            {role.heading && renderTextSections(role.heading)}
          </Box>
        </Box>
        {/* renders button below the description on the left */}
        <Box
          sx={{
            paddingTop: rem(200),
            display: 'flex',
            gap: rem(40),
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: rem(20),
              fontWeight: 200,
              width: rem(420),
              animation: 'fadeIn 2.5s forwards',
            }}
          >
            {role.description}
          </Typography>
          <style jsx global>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}</style>
          <ButtonsWrapper>
            <Box sx={{ animation: 'fadeIn 2.5s forwards' }}>
              <DemoButton
                variant="contained"
                href="/request-recruiter-experience-demo"
              >
                Book a Demo
              </DemoButton>
            </Box>
          </ButtonsWrapper>
        </Box>
      </Box>

      {/* Image diplayed on the right */}
      <Box
        sx={{
          overflow: 'hidden',
          width: rem(600),
          position: 'relative',
          flex: 1,
          backgroundColor: 'white',
          transform: 'translateY(100%)',
          animation: 'slideFromBottom 1.5s forwards',
        }}
      >
        <Image
          src={role.image}
          width={480}
          height={690}
          alt="Image"
          style={{
            backgroundColor: 'white',
            paddingRight: rem(60),
            paddingLeft: rem(60),
            paddingTop: rem(60),
          }}
        />
        <RecruiterSvg />
      </Box>
    </Box>
  );
};

export default Recruiter
