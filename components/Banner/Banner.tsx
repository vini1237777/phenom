
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const styles = {
  banner: {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#4035de',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: 9,
    textAlign: 'center',
    margin: '0',
    padding: '0',
    border: 'none',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    fontSize: '14px',
    lineHeight: '100%',
    fontWeight: 400,
    fontStyle: 'normal',
    textTransform: 'lowercase',
    '& span': {
      marginLeft: '30px',
    },
    '&:hover span': {
      color: 'lightgray',
    },
    '@media (min-width: 768px)': {
      fontSize: '16px',
    },
  },
};

const Banner: React.FC = () => {
  return (
    <Box sx={{ ...styles.banner }}>
      <Box>
        <Link
          href="/resource/what-organizations-need-hire-retain-bersin-southwest"
          passHref
        >
          <Button
            sx={{ ...styles.button }}
            style={{ textTransform: 'capitalize' }}
          >
            <p>
              <Typography component={'span'}>
                Bersin &amp; Southwest: The X Factor | Sign up now →
              </Typography>
            </p>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;
