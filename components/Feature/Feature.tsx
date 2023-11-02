import { fetaureAccordionData } from '@/app/constants';
import { rem } from '@/app/utils';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Feature = () => {
 const [expanded, setExpanded] = useState<string | false>('panel0');

 const handleChange =
   (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
     setExpanded(isExpanded ? panel : false);
   };
  return (
    <Box
      sx={{
        height: '90vh',
        paddingTop: rem(100),
        paddingLeft: rem(100),
        paddingBottom: rem(80),
        paddingRight: rem(100),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{ fontSize: rem(52), lineHeight: '100%', width: rem(1100) }}
      >
        Discover eligible candidates and find the right fit for open roles.
      </Typography>

      <Box sx={{ display: 'flex', gap: rem(20), paddingTop: rem(80) }}>
        <Box sx={{ width: rem(600), height: rem(600) }}>
          {fetaureAccordionData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
              sx={{
                margin: '0px',
                paddingBottom: rem(20),
                borderBottom: '1px solid #cfd8e9',
                boxShadow: 'none',
                padding: '0px',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded !== `panel${index}` ? <ExpandMoreIcon /> : null
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography sx={{ fontSize: rem(20), fontWeight: 500 }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: '#554f4f', fontWeight: 300, width: rem(380) }}
                >
                  {item.description}
                </Typography>
                <Typography sx={{ marginTop: rem(20), marginBottom: rem(20) }}>
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
                    {item.linkText}
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Image
          src="https://images.ctfassets.net/0d3i1kfsuaq3/6fpRoVw1NDIken69OoTDWf/983a4beb533856edefba455e6df504b5/Hiring_Dashboards.png"
          width={'600'}
          height={'600'}
          alt={'feature'}
          style={{ backgroundColor: '#f8f8f8' }}
        />
      </Box>
    </Box>
  );
}

export default Feature
