import { experienceCardData, phenomAiCardData, phenomCardData, talentCardData } from '@/app/constants';
import ExperienceSvg from '@/app/PlatformSvg/ExperienceSvg';
import PhenomAiSvg from '@/app/PlatformSvg/PhenomAiSvg';
import TalentCardSvg from '@/app/PlatformSvg/TalentCardSvg';
import { rem } from '@/app/utils';
import { Box, Button, Typography, Grid } from '@mui/material';
import Image from 'next/image';


export default function PlatformContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: rem(20),
        gap: rem(40),
        backgroundColor: '#eeeff2',
      }}
    >
      {/* Left-hand side container for talent and phenom cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: rem(20),
          width: rem(274),
          padding: rem(20),
          borderRadius: rem(14),
        }}
      >
        {/* Talent card with custom SVG and hover effect */}
        <Box
          sx={{
            borderRadius: rem(14),
            padding: `${rem(16)} ${rem(24)} ${rem(24)}`,
            overflow: 'hidden',
            height: rem(220),
            width: '100%',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            justifyContent: 'flex-start',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '120%',
            position: 'relative',
            color: 'white',
            '&:hover': {
              color: '#7172da',
            },
          }}
        >
          {/* Title, description, and button text of the talent card */}
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: '120%',
              marginBottom: rem(2),
              width: rem(150),
            }}
          >
            {talentCardData.title}
          </Typography>
          <Typography
            sx={{
              color: 'white',
              lineHeight: '128%',
              fontWeight: 300,
              width: rem(180),
              marginTop: rem(15),
              position: 'relative',
              zIndex: 1,
            }}
          >
            {talentCardData.description}
          </Typography>
          <Typography
            sx={{
              textTransform: 'lowercase',
            }}
            style={{ textTransform: 'capitalize' }}
          >
            {talentCardData.buttonText} {'>'}
          </Typography>
          <TalentCardSvg />
        </Box>
        {phenomCardData?.map((items) => {
          return (
            <Box
              sx={{
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: rem(12),
                display: 'flex',
                flexDirection: 'column',
                gap: rem(20),
                backgroundColor: 'white',
                borderRadius: rem(14),
                height: 'auto',
                width: '100%',
                paddingLeft: `${rem(15)}`,
                paddingTop: `${rem(15)}`,
                paddingBottom: `${rem(15)}`,
                paddingRight: '12%',
                color: 'black',
                '&:hover': {
                  color: '#7172da',
                },
              }}
            >
              <Typography
                sx={{ color: 'gray', fontWeight: 200, width: rem(173) }}
              >
                {items.description}
              </Typography>
              <Typography>
                {items.buttonText} {'>'}{' '}
              </Typography>
            </Box>
          );
        })}
      </Box>
      {/* Right-hand side container for experience and phenom AI cards */}
      <Box
        sx={{
          display: 'flex',
          gap: rem(20),
          padding: rem(20),
          borderRadius: rem(14),
          flexWrap: 'wrap',
          backgroundColor: 'white',
          color: 'white',
          '&:hover': {
            color: '#e2e2f7',
          },
        }}
      >
        {/* Box for rendering the Experience Cards */}
        {experienceCardData?.map((experience) => {
          return (
            <Box
              sx={{
                fontWeight: 400,
                fontStyle: 'normal',
                display: 'flex',
                borderRadius: rem(14),
                height: '180px',
                width: '28%',
                backgroundColor: '#7172db',
                paddingTop: rem(10),
                paddingLeft: rem(20),
                paddingBottom: rem(10),
                justifyContent: 'space-between',
                overflow: 'hidden',
                position: 'relative',
                gap: rem(5),
                '&:hover > div:nth-of-type(4)': {
                  transform: 'translateX(5px)',
                },
              }}
            >
              <ExperienceSvg />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: rem(20),
                  justifyContent: 'space-between',
                  fontSize: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 200,
                    width: rem(80),
                    lineHeight: rem(20),
                    color: 'white',
                  }}
                >
                  {experience.title}
                </Typography>
                <Typography
                  sx={{
                    width: rem(125),
                    lineHeight: rem(20),
                  }}
                >
                  {experience.buttonText} {'>'}{' '}
                </Typography>
              </Box>

              <Box sx={{ marginTop: rem(60), zIndex: 1 }}>
                <Image
                  src={experience.imageUrl}
                  alt={experience.buttonText}
                  width="60"
                  height="145"
                  // objectFit='cover'
                />
              </Box>
            </Box>
          );
        })}

        {/* Title, description, and button text of the phenom AI card */}
        <Box
          sx={{
            borderRadius: rem(14),
            padding: `${rem(34)} ${rem(34)} ${rem(34)}`,
            overflow: 'hidden',
            height: rem(120),
            width: 'auto',
            flex: 1,
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '120%',
            position: 'relative',
            color: 'white',
            '&:hover': {
              color: '#7172da',
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: '120%',
              width: rem(100),
            }}
          >
            {phenomAiCardData.title}
          </Typography>
          <Typography
            sx={{
              color: 'white',
              lineHeight: '128%',
              fontWeight: 300,
              width: rem(300),
              position: 'relative',
              zIndex: 1,
            }}
          >
            {phenomAiCardData.description}
          </Typography>
          <Typography
            sx={{
              textTransform: 'lowercase',
              marginTop: rem(20),
            }}
            style={{ textTransform: 'capitalize' }}
          >
            {phenomAiCardData.buttonText} {'>'}
          </Typography>
          <PhenomAiSvg />
        </Box>
      </Box>
    </Box>
  );
}
