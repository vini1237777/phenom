import React from 'react'
import { IObject } from '../constants';

const NavLogoSvg = ({styles}:{styles:IObject}) => {
  return (
    <>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 37 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        style={styles.phantomLogo}
      >
        <path
          d="M23.236 0A13.254 13.254 0 0 0 10 13.234v20.092a2.848 2.848 0 0 0 5.494 1.109c.14-.353.207-.73.199-1.109v-9.215A13.233 13.233 0 1 0 23.236 0Zm0 20.776a7.543 7.543 0 1 1 7.542-7.542 7.55 7.55 0 0 1-7.542 7.542ZM21.369 40.068a18.784 18.784 0 0 1-17.044 0 2.945 2.945 0 0 0-4.17 3.541 2.943 2.943 0 0 0 1.508 1.71 24.663 24.663 0 0 0 22.368 0 2.944 2.944 0 1 0-2.662-5.252Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 95 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        style={styles.headerLogo}
      >
        <path
          d="M6.768 5.325a6.729 6.729 0 0 0-3.877 1.226A1.454 1.454 0 0 0 0 6.78v15.588a1.455 1.455 0 0 0 2.91 0v-4.72A6.768 6.768 0 1 0 6.768 5.325Zm0 10.625a3.857 3.857 0 1 1-.003-7.715 3.857 3.857 0 0 1 .003 7.715ZM65.362 5.325a6.768 6.768 0 1 0 6.768 6.768 6.775 6.775 0 0 0-6.768-6.768Zm0 10.625a3.858 3.858 0 1 1-.002-7.717 3.858 3.858 0 0 1 .002 7.717ZM21.508 5.325a5.842 5.842 0 0 0-2.96.803V1.455a1.455 1.455 0 1 0-2.911 0v15.95a1.455 1.455 0 0 0 2.91 0v-6.211a2.96 2.96 0 0 1 5.922 0v6.21a1.457 1.457 0 0 0 2.912 0v-6.21a5.875 5.875 0 0 0-5.873-5.869ZM50.801 5.325a5.832 5.832 0 0 0-3.08.875 1.455 1.455 0 0 0-2.79.58v10.625a1.456 1.456 0 1 0 2.912 0v-6.211a2.961 2.961 0 0 1 5.922 0v6.21a1.457 1.457 0 0 0 2.911 0v-6.21a5.875 5.875 0 0 0-5.875-5.869ZM88.743 5.325a5.85 5.85 0 0 0-4.414 2.007 5.859 5.859 0 0 0-7.492-1.128 1.455 1.455 0 0 0-2.79.58V17.41a1.456 1.456 0 1 0 2.91 0v-6.215a2.96 2.96 0 1 1 5.923 0v6.21a1.457 1.457 0 0 0 2.912 0v-6.21a2.961 2.961 0 0 1 5.921 0v6.21a1.457 1.457 0 0 0 2.912 0v-6.21a5.875 5.875 0 0 0-5.882-5.869ZM36.13 5.324a6.752 6.752 0 0 0-6.758 6.397c-.009.196 0 .248-.01.37a6.775 6.775 0 0 0 6.768 6.769c1.06 0 3.085-.205 4.745-1.578a1.455 1.455 0 1 0-1.855-2.243c-.987.822-2.351.91-2.89.91a3.867 3.867 0 0 1-3.655-2.62h8.964a1.46 1.46 0 0 0 1.453-1.516 6.752 6.752 0 0 0-6.762-6.489Zm-3.653 5.536a3.855 3.855 0 0 1 7.306 0h-7.306Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
}

export default NavLogoSvg
