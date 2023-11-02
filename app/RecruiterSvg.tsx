import { Box } from '@mui/material';
import React from 'react';

const RecruiterSvg = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          bottom: -200,
          right: -160,
          overflow: 'hidden',
          animation: 'slideFromLeft 2.7s forwards',
        }}
      >
        <svg
          width="1103"
          height="436"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path
            opacity="0.85"
            d="M1068 367c-174.496-89.953-275.714-77.616-428.209-207.132C486.093 29.344 314.135 88.264 314.135 88.264S119.599 134.248 74 343.363"
            stroke="url(#hero-vector-1_svg__a)"
            stroke-width="150"
            stroke-miterlimit="10"
          ></path>
          <defs>
            <linearGradient
              id="hero-vector-1_svg__a"
              x1="60.424"
              y1="59.369"
              x2="1063.51"
              y2="360.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.14" stop-color="#FF8045"></stop>
              <stop offset="0.16" stop-color="#F5905E"></stop>
              <stop offset="0.22" stop-color="#E5AB87"></stop>
              <stop offset="0.27" stop-color="#D7C1AA"></stop>
              <stop offset="0.33" stop-color="#CCD2C4"></stop>
              <stop offset="0.39" stop-color="#C5DED7"></stop>
              <stop offset="0.45" stop-color="#C0E6E2"></stop>
              <stop offset="0.51" stop-color="#BFE8E6"></stop>
              <stop offset="0.76" stop-color="#CDC4F5"></stop>
              <stop offset="1" stop-color="#FFBD45"></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: -370,
          right: 0,
          zIndex: 0,
          animation: 'slideFromRight 2.7s forwards',
        }}
      >
        <svg
          width="1114"
          height="662"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          opacity={'0.8'}
        >
          <path
            d="M23 72.139C453 209.25 606 586.75 1114 586.75"
            stroke="url(#hero-vector-2_svg__a)"
            stroke-width="150"
            stroke-miterlimit="10"
          ></path>
          <defs>
            <clipPath id="rectangleClip"></clipPath>

            <linearGradient
              id="hero-vector-2_svg__a"
              x1="344.786"
              y1="45.75"
              x2="1190.29"
              y2="946.751"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.14" stop-color="#FF8045"></stop>
              <stop offset="0.16" stop-color="#F5905E"></stop>
              <stop offset="0.22" stop-color="#E5AB87"></stop>
              <stop offset="0.27" stop-color="#D7C1AA"></stop>
              <stop offset="0.33" stop-color="#CCD2C4"></stop>
              <stop offset="0.39" stop-color="#C5DED7"></stop>
              <stop offset="0.45" stop-color="#C0E6E2"></stop>
              <stop offset="0.51" stop-color="#BFE8E6"></stop>
              <stop offset="0.76" stop-color="#CDC4F5"></stop>
              <stop offset="0.925" stop-color="#FFBD45"></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <style jsx global>{`
        @keyframes slideFromRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes slideFromLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes slideFromBottom {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
      `}
      </style>
    </>
  );
};




export default RecruiterSvg;
