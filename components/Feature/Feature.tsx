import { IObject } from '@/app/constants';
import { rem } from '@/app/utils';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Feature = ({role}:IObject) => {
  // State to track which accordion panel is expanded
  const [expanded, setExpanded] = useState<string | false>('panel0');

  // Change handler for accordion to set which panel is expanded
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      sx={{
        height: '90vh',
        paddingTop: rem(200),
        paddingLeft: rem(100),
        paddingBottom: rem(80),
        paddingRight: rem(100),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Typography for the feature text */}
      <Typography
        sx={{ fontSize: rem(52), lineHeight: '100%', width: rem(1100) }}
      >
        {role.featureText} // The feature text coming from role
      </Typography>

      <Box sx={{ marginTop: rem(100) }}>
        {/* Flex container for accordion and images */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: rem(10),
          }}
        >
          {/* Box to hold the accordion items */}
          <Box sx={{ flexGrow: 1 }}>
            {role?.accordion.map((item: IObject, index: number) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  marginBottom: rem(20),
                  borderBottom: '1px solid #cfd8dc',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  width: rem(600),
                  paddingBottom: rem(20),
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography sx={{ fontSize: rem(20), fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: '#554f4f', fontWeight: 300 }}>
                    {item.description}
                  </Typography>
                  <Typography
                    sx={{ marginTop: rem(20), marginBottom: rem(20) }}
                  >
                    <Link
                      href="#"
                      sx={{
                        color: '#1f2aac',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#3f51b5',
                        },
                      }}
                    >
                      {item.btnText}
                    </Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          {/* Box for the images associated with each accordion */}
          <Box
            sx={{
              width: '600px',
              height: '600px',
              overflow: 'hidden',
            }}
          >
            {role?.accordion.map((item: IObject, index: number) => (
              <Box
                key={index}
                sx={{
                  display: expanded === `panel${index}` ? 'block' : 'none', // Show only the image of the expanded accordion
                }}
              >
                <Image
                  src={item.image}
                  alt={`Feature ${index}`}
                  width={'600'}
                  height={'600'}
                  style={{ backgroundColor: '#f8f8f8', borderRadius: '8px' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Feature
