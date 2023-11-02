import { recruiterRoles } from '@/app/constants';
import RecruiterSvg from '@/app/RecruiterSvg';
import { rem } from '@/app/utils';
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { ButtonsWrapper, DemoButton } from '../Navbar/Navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recruiter = () => {

const [open, setOpen] = useState(false);

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
      <Box sx={{ paddingTop: rem(70), flex: 1 }}>
        <Button
          variant="text"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Avatar
            src={
              'https://images.ctfassets.net/0d3i1kfsuaq3/2ov9QTRpuLSZ9XJg8M0MV5/06ebe6fc1e519593ee110ac896acbf2b/01-recruiters-frontal_1__1_.webp'
            }
            alt={'Recruiters'}
            sx={{ color: 'white', backgroundColor: 'white' }}
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
            {' '}
            Recruiters
          </Typography>
        </Button>
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
                    }}
                  >
                    {role.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <Typography
          sx={{
            color: 'white',
            fontSize: rem(64),
            lineHeight: '110%',
            marginTop: rem(30),
          }}
        >
          Phenom for
        </Typography>
        <Typography
          sx={{
            background:
              'linear-gradient(89.88deg, #ff8045 2.69%, #7bd3cf 43.19%, #ab9cee 72%, #ffbd45 99.83%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: rem(64),
          }}
          component={'span'}
        >
          Recruiters
        </Typography>
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
              width: rem(450),
              animation: 'fadeIn 2.5s forwards',
            }}
          >
            Discover, engage and hire phenomenal people — with speed and
            velocity.
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
          src={
            'https://images.ctfassets.net/0d3i1kfsuaq3/2ov9QTRpuLSZ9XJg8M0MV5/06ebe6fc1e519593ee110ac896acbf2b/01-recruiters-frontal_1__1_.webp'
          }
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
}

export default Recruiter
