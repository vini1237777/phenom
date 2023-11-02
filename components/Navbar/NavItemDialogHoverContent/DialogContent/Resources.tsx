import { phenomStudios, resources } from '@/app/constants';
import { rem } from '@/app/utils';
import Category from '@/components/Category';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

// Styles for the Category component
const categoryStyle = {
  wrapper: {
    flex: 1,
  },
  items: {
    wordWrap: 'break-word',
  },
};

const reads = [
  {
    imageUrl:
      'https://images.ctfassets.net/0d3i1kfsuaq3/6LgxlOwSyyNpb3WqiWe7pE/9ff73d5ad2bfc49c5679fb0ad3f90d5a/SOCX-image-2.jpg',
    title: 'State of Candidate Experience',
  },
  {
    imageUrl:
      'https://images.ctfassets.net/0d3i1kfsuaq3/4ersCVspR2qF4lwu7femd7/00b8191a9734d12064d1c5cf7c1ba51e/PR_Newsroom_feature.jpg',
    title: 'The Total Economic Impact',
  },
  {
    imageUrl:
      'https://images.ctfassets.net/0d3i1kfsuaq3/4XpTJgb3gnBRM4cS58IsIP/0d8b9f5f64611d187fe1689cf240d640/TMBG-Covers.png',
    title: 'Buyer’s Guide: Choosing a Talent Marketplace',
  },
];

const ResourcesContent: React.FC = () => {
  return (
    <Box
      maxWidth={rem(1180)}
      sx={{
        display: 'flex',
        padding: '40px',
        gap: rem(2),
        backgroundColor: 'white',
        borderRadius: rem(14),
      }}
    >
      {/* Render Category components for resources and about Phenom Studios */}
      <Category items={resources} styles={categoryStyle} title={'Resources'} />
      <Category
        items={phenomStudios}
        styles={categoryStyle}
        title={'Phenom Studios'}
      />
      {/* The right-hand side content cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ color: '#93969d' }}>Featured Reads</Box>
        {reads.map((read, index) => (
          <Box
            sx={{
              display: 'flex',
              borderRadius: rem(14),
              overflow: 'hidden',
              boxShadow: 2,
              m: 1,
              width: rem(350),
              height: rem(150),
            }}
          >
            <Box sx={{ width: '50%' }}>
              <Image
                src={read.imageUrl}
                alt={read.title}
                width={400}
                height={100}
                style={{
                  backgroundColor: 'black',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: 'black',
                padding: rem(24),
                width: '50%',
                color: 'white',
                '&:hover': {
                  color: '#7172da',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: rem(20),
                  lineHeight: '120%',
                  fontWeight: 500,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  paddingRight: '2rem',
                  maxWidth: rem(115),
                  marginBottom: rem(20),
                }}
              >
                {read.title}
              </Typography>
              <Button
                variant="text"
                size="small"
                sx={{
                  color: 'inherit',
                  fontSize: '14px',
                  lineHeight: '100%',
                  fontWeight: 700,
                  textTransform: 'lowercase',
                }}
                style={{ textTransform: 'capitalize' }}
              >
                Read more {'>'}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResourcesContent;
