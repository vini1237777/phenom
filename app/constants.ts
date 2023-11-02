export const role = [
  { label: 'Recruiters' },
  { label: 'Talent Marketers' },
  { label: 'Hiring Managers' },
  { label: 'Talent Acquisition' },
  { label: 'Talent Management' },
  { label: 'HRIS' },
  { label: 'CHRO' },
];

export const industry = [
  { label: 'Healthcare' },
  { label: 'Technology & IT' },
  { label: 'Transportation & Logistics' },
  { label: 'Retail & Hospitality' },
  { label: 'Manufacturing' },
  { label: 'Financial Services' },
  { label: 'Energy & Utilities' },
];

export const partnership = [
  { label: 'Workday' },
  { label: 'SAP SuccessFactors' },
  { label: 'Cornerstone OnDemand' },
  { label: 'ADP' },
  { label: 'See All Partners' },
];


export interface IObject {
  [key: string]: any;
}

export const resources = [
  { label: 'All Resources' },
  { label: 'Blog' },
  { label: 'Case Studies' },
  { label: 'Webinars & Product Tours' },
  { label: 'Events' },
  { label: 'eBooks & Reports' },
  { label: 'Community' },
];

export const phenomStudios = [
  { label: 'All Videos' },
  { label: 'AI Day On Demand' },
  { label: 'IAMPHENOM On Demand' },
  { label: 'Talent Experience Live' },
  { label: 'Smarter Podcast' },
];

export const customers = [
  { label: 'Customer Hub' },
  { label: 'Customer Success' },
  { label: 'Training & Certification' },
  { label: 'Global Customer Care' },
  { label: 'Partners' },
];

export const about = [
  { label: 'Customers' },
  { label: 'About' },
  { label: 'Newsroom' },
  { label: 'Careers' },
  { label: 'Security & Compliance' },
  { label: 'Contact Us' },
];


export const itemKeys = {
  solution: 'solution',
  platform: 'platform',
  resources: 'resources',
  company: 'company',
};

interface LargeCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageAlt: string;
}

interface SmallCardProps {
  title: string;
  imageUrl: string;
  buttonText: string;
}

export const talentCardData: LargeCardProps = 
  {
    title: 'Intelligent Talent Experience',
    description:
      'The AI-powered platform to hire, retain, and develop talent faster.',
    buttonText: 'Platform Overview',
    imageAlt: 'Intelligent Talent Experience',
  };


export const phenomCardData: { description: string; buttonText: string }[] = [
  {
    description:
      'Get a comprehensive overview of the products that support each talent experience.',
    buttonText: 'All Phenom Products',
  },
  {
    description:
      'Shrink the time between “hello” to hire from days to minutes.',
    buttonText: 'High-Volume Hiring',
  },
];

export const phenomAiCardData: LargeCardProps = 
  {
    title: 'Phenom AI',
    description:
      'Explore how intelligent data and machine learning bring personalization and automation to all.',
    buttonText: 'Phenom AI',
    imageAlt: 'Phenom AI',
  };


export const experienceCardData: SmallCardProps[] = [
  {
    title: 'Best-fit candidates find and choose you faster.',
    imageUrl: 'https://images.ctfassets.net/0d3i1kfsuaq3/67NNty3jLcL8iz8bnAk3MC/c5c89a897a994ff164010e482e92ab7e/CX_nav_2x.png',
    buttonText: 'Candidate Experience',
   
  },
  {
    title: 'Employees develop their skills & evolve their careers.',
    imageUrl: 'https://images.ctfassets.net/0d3i1kfsuaq3/4yvudFCVJrEqlFsDJq372H/6ed6f14aa60d351848d8b5760074a9c7/EX_nav_2x.png',
    buttonText: 'Employee Experience',
   
  },
  {
    title: 'Recruiters become wildly productive.',
    imageUrl:'https://images.ctfassets.net/0d3i1kfsuaq3/2qFXp2SYRO0otUvyr7Ju2t/fda895ec4c032cb0159dd41b812c2cad/RX_nav_2x.png',
    buttonText: 'Recruiter Experience',
   
  },
  {
    title: 'Managers build stronger-performing teams.',
    imageUrl:'https://images.ctfassets.net/0d3i1kfsuaq3/7dDzqvmK4uFL0pu4X84sik/e15565a6891bc78dbb19999462ede749/MX_nav_2x.png',
    buttonText: 'Manager Experience',
   
  },
  {
    title: 'HR aligns employee development with company goals.',
    imageUrl:'https://images.ctfassets.net/0d3i1kfsuaq3/3knFHCYFI8PY2yuEqHz0qT/56b6108bdee7cd0c1d0eca4629d13fde/hrx-nav-image.png',
    buttonText: 'HR Experience',
   
  },
  {
    title: 'Connect Phenom to your existing HR tech stack.',
    imageUrl:'https://images.ctfassets.net/0d3i1kfsuaq3/1kUrmHP86Qh2BZS1Li6hxi/c5d3085e35f077d3338cf8920a993b6e/HRIS.png', 
    buttonText: 'HRIS Experience',
  },
];


export const recruiterRoles = [
  {
    label: 'Talent Marketers',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/1pBl6bzztAwYGwSxxVBn3t/375f9434c155b4ced16a5935ec78c9e6/talent-marketer-icon.png',
  },
  {
    label: 'Hiring Managers',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/6h4CbEUWhv2Qcfo8cNkugF/89007bc9e2902c46a1f650df97216e51/hiring-manager-icon.png',
  },
  {
    label: 'Talent Acquisition',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/7vTPmF8A0YgBPOW01oVRZO/7a1fd7c562ddaa5827c8701b6d6c5e7a/ta-icon.png',
  },
  {
    label: 'Talent Management',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/5UjSNMFERofWK3r9LqQuoK/1b282fcb5974f87bd36f16bfa94443a9/talent-management-icon.png',
  },
  {
    label: 'HRIS',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/45Xiu4vlSdSuA4WkeHmxUu/0f61f02e93b34873f7dff40afb36ca83/hris.png',
  },
  {
    label: 'CHRO',
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/4SitfjV555icoy1Xyt36VQ/903323064a88a1b2091eb7c5b5ddb8a1/CHRO-icon.png',
  },
];


export const fetaureAccordionData = [
  {
    title: 'Find the Best Fit, Faster',
    description:
      'Prioritize outreach to candidates that meet qualifications such as skills, title, experience, and location.',
    linkText: 'Learn more >',
  },
  {
    title: 'Fill Talent Pipelines Faster',
    description:
      'Gain visibility into your career site traffic with comprehensive analytics. Begin engaging with potential candidates, even those who did not submit an application.',
    linkText: 'Learn more >',
  },
  {
    title: 'Build Meaningful Relationships',
    description:
      'Nurture, engage, and convert talent with email and SMS communications that turn job seekers into applicants.', 
    linkText: 'Learn more >',
  },
];

