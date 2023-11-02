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

export const recruiterKeys = {
  talentMarketers: 'talentMarketers',
  hiringManagers: 'hiringManagers',
  talentAcquisition: 'talentAcquisition',
  talentManagement: 'talentManagement',
  hris:'hris',
  chro:'chro'
};

export const recruiterRoles = [
  {
    label: 'Talent Marketers',
    key: recruiterKeys.talentMarketers,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/1pBl6bzztAwYGwSxxVBn3t/375f9434c155b4ced16a5935ec78c9e6/talent-marketer-icon.png',
  },
  {
    label: 'Hiring Managers',
    key: recruiterKeys.hiringManagers,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/6h4CbEUWhv2Qcfo8cNkugF/89007bc9e2902c46a1f650df97216e51/hiring-manager-icon.png',
  },
  {
    label: 'Talent Acquisition',
    key: recruiterKeys.talentAcquisition,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/7vTPmF8A0YgBPOW01oVRZO/7a1fd7c562ddaa5827c8701b6d6c5e7a/ta-icon.png',
  },
  {
    label: 'Talent Management',
    key:recruiterKeys.talentManagement,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/5UjSNMFERofWK3r9LqQuoK/1b282fcb5974f87bd36f16bfa94443a9/talent-management-icon.png',
  },
  {
    label: 'HRIS',
    key:recruiterKeys.hris,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/45Xiu4vlSdSuA4WkeHmxUu/0f61f02e93b34873f7dff40afb36ca83/hris.png',
  },
  {
    label: 'CHRO',
    key:recruiterKeys.chro,
    img: 'https://images.ctfassets.net/0d3i1kfsuaq3/4SitfjV555icoy1Xyt36VQ/903323064a88a1b2091eb7c5b5ddb8a1/CHRO-icon.png',
  },
];


export const recruitersInfo = {
  [recruiterKeys.talentMarketers]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/5QQSO5PlwbjZIdgwbv5jdZ/82198019d343209cdea9b6b86a29a5ba/Talent_marketers_1.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/1pBl6bzztAwYGwSxxVBn3t/375f9434c155b4ced16a5935ec78c9e6/talent-marketer-icon.png',
    heading: ['Phenom for', { highlight: ' Talent Marketers' }],
    description: 'Win the hearts and minds of candidates — with relevance.',
    sectionText: [
      'Time is of the essence for your ',
      { highlight: 'next best hire' },
      ' — but how do you customize campaigns quickly?',
    ],
    featureText:
      'Personalize experiences to better attract and inspire candidates',
    accordion: [
      {
        title: 'Reach Job Seekers - Wherever They Are',
        description:
          'Drive impactful omnichannel campaigns to attract and engage job seekers.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/4gh90IxrfsYQMkkDNUOjIc/6394bb94467649c5776ba44561a2a821/Customized_Email_Campaigns.png',
      },
      {
        title: 'Showcase Your Employer Brand',
        description:
          'Build your reputation and attract the right talent with consistent and creative branding across the entire candidate experience.',
        btnText: 'Learn More ',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/4Tmp1Y8I5JdpkfUfe96LjN/2bde6a0bbf9b8734e34ee690bd6b4210/employer-branding.png',
      },
      {
        title: 'Refine Your Recruiting Funnel',
        description:
          'Convert job seekers into applicants and identify best-fit candidates.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/6ijQ0sh7fr9SWLB1lACq8S/04859f84bb3d164c23e2ec60fdd0a57c/Dynamic_Lists.png',
      },
      {
        title: 'Prove Your Impact',
        description:
          'Consult rich analytics to understand and share your success with marketing campaigns and strategic hiring initiatives.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/56Bzi6d82Io64WuG8PcHmE/17c33d2a4ed1cba0c4e9c52931409008/Job_Insights.png',
      },
    ],
  },
  [recruiterKeys.talentAcquisition]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/ilyCE6OENxSfiFmv4Ehyn/2a229c4cfafd50ee98954e4297ece147/female-profile-2_1.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/7vTPmF8A0YgBPOW01oVRZO/7a1fd7c562ddaa5827c8701b6d6c5e7a/ta-icon.png',
    heading: ['Phenom for', { highlight: ' Talent Marketers' }, ' Leaders'],
    description:
      'Boost the productivity of your recruiting team — with AI and automation.',
    sectionText: [
      "Tedious sourcing, screening, and scheduling tasks limit your team's",
      { highlight: 'ability to execute.' },
    ],
    featureText:
      'Bolster your talent pipeline with speed, efficiency, and intelligence.',
    accordion: [
      {
        title: 'Identify and Prioritize Top Skills',
        description:
          'Eliminate the time-consuming, manual process of parsing profiles and resumes to pinpoint hiring hopefuls. Using AI-powered candidate matching, identify and prioritize the top skills required of candidates to fill jobs faster.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/6Jr7ymF7kG3qtgPqndzCKL/050c94443803d747b6b6200a22dd7ab8/Explainable_AI.png',
      },
      {
        title: 'Automate Visibility into Best-Fit Candidates',
        description:
          'Surface a tremendous number of potential candidates from public data sources, previous sourcing efforts, past applicants, and even current employees.',
        btnText: 'Learn More ',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/6BxZ3Ee8poS2HoPeG9Nydr/91d941fb2024899cc4ed6dbe1a2080ca/AI_Cloud_Sourcing.png',
      },
      {
        title: 'Help Candidates Find the Right Job, Faster',
        description:
          "Create great experiences for candidates with personalized content that's relevant to their experience, skills, and more. In turn, watch candidate quality soar and save time for your teams.",
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/5bqzmPK1eVZv5QMhMIJ0k4/dcbdc7f0035c079571a0513329e7496d/Job_Search___Apply.png',
      },
      {
        title: 'Screen It Like You Mean It',
        description:
          "Scale screening and get to know candidates on an entirely different level with the power of video. Work in tandem with hiring managers to establish the rationale you'll use and questions you'll ask to prioritize applicants for your openings.",
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/3eOrErOdevliK0eWFDYunW/cc17ac0dc37e6a53183db3f3d0a4e275/Video_Assessments.png',
      },
      {
        title: 'Schedule with Ease and Speed',
        description:
          'Give valuable time back to your recruiting team so they can focus on what matters most: building candidate relationships. Automate the process of scheduling and rescheduling interviews for candidates and hiring managers.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/bieYWjfoZVggZPUtxMIkt/88a2f2e4e436892db10c42864556c4da/AI_Scheduling.png',
      },
      {
        title: 'Break Down Silos, Make Better Hiring Decisions',
        description:
          "If you aren't collaborating closely with hiring managers throughout the hiring process, you're failing to find the right people. Streamline communication from a common location and seal the deal as one team once you've found the best fit.",
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/74ykSFKT5GUpt65iR5bJkr/737a974fc4aa0df97c49bedefb4dc978/Candidate_Evaluations.png',
      },
    ],
  },
  [recruiterKeys.hiringManagers]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/1dqQiq5617BHW7taoDykG9/5c4cbce59ebe1e97a075b03cadd3c580/Hiring_managers_1.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/6h4CbEUWhv2Qcfo8cNkugF/89007bc9e2902c46a1f650df97216e51/hiring-manager-icon.png',
    heading: ['Phenom for', { highlight: ' Hiring Managers' }],
    description: 'Build high performance teams that scale — with insights.',
    sectionText: [
      'You need',
      { highlight: ' top talent' },
      ' to join your team – fast. But bottlenecks are slowing things down.',
    ],
    featureText:
      'Accelerate the process of connecting with best-fit candidates.',
    accordion: [
      {
        title: 'Automate Hiring Tasks',
        description:
          'Accelerate hiring with AI recommended candidates, automation for candidate screening and scheduling, and communication tools for real-time hiring team alignment.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/4arbxiZnVc0TDEDYQlqZZJ/a90ebea5e19069bbf526be3fe9706274/Interview_Management.png',
      },
      {
        title: 'Hire for Skills and Develop Your Team ',
        description:
          "Hiring may be a top priority, but it's not your primary job. Automate time-intensive tasks so you can stay focused on your team.",
        btnText: 'Learn More ',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/3SYykKwD2jB2zeTzBfFGEw/c612c9b0b60cd81daeb99caed5107c92/Candidate_Management.png',
      },
      {
        title: 'Collaborate with Hiring Team',
        description:
          'Align on job descriptions, ideal candidate characteristics, must-have skills, and more to make stronger hiring decisions.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/74ykSFKT5GUpt65iR5bJkr/737a974fc4aa0df97c49bedefb4dc978/Candidate_Evaluations.png',
      },
      {
        title: 'Access Anywhere',
        description:
          'Hire on-the-go by identifying, screening, evaluating, and hiring candidates from desktop or mobile — anywhere, anytime.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/5TRaONbmwCxXBxYDXTg4Lt/ba03d5291bad819bf23ad34ad554301c/access-anywhere.png',
      },
    ],
  },
  [recruiterKeys.hris]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/5PuNtRmBAV9IuTrUlkMW9m/e81f4e15391e43820c34b1ff28b94c52/HRIS_HRIT_1.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/45Xiu4vlSdSuA4WkeHmxUu/0f61f02e93b34873f7dff40afb36ca83/hris.png',
    heading: ['Phenom for', { highlight: ' HRIS' }],
    description:
      'Modernize and integrate your HR tech stack — with a unified approach.',
    sectionText: [
      "You're juggling a great deal of diverse and disconnected",
      { highlight: 'HR technology' },
      'solutions.',
    ],
    featureText:
      'Bring teams, tools, and workflows together using a single platform.',
    accordion: [
      {
        title: 'Simplify Your Tech Stack ',
        description:
          'Build your entire talent journey with a single platform that reduces complexity, improves security, and delivers a unified experience.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/3wmtt0Lj4RuwZXAUWipj4u/a9e1ebe5c0e4a7df22750d1a9732aa70/tech-stack.png',
      },
      {
        title: 'Build Great Experiences with Ease',
        description:
          'Configure and manage all of your talent experiences easily with low-code/no-code templates, pre-configured forms, automated workflows, and bulk data migrations.',
        btnText: 'Learn More ',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/6xc3F0LBonGXt9Byqa3U4E/e4334c1f3e6c334fa09b50fda7aab926/Flow_Studio.png',
      },
      {
        title: 'Streamline Integrations and Workflows',
        description:
          'Ensure and prioritize security, operational efficiency, and data integrity with self-service tools that seamlessly integrate your HR information systems and technologies.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/4POrQntAnRryBMGwQWGXQU/679f02fa473d20afae487c6a9ae8e174/API_Configuration.png',
      },
      {
        title: 'Deliver Value to Functional Groups',
        description:
          'Become a people-centric strategic partner that improves both business outcomes and employee experience through technology.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/16GXFZhCm3imqUR416Zy4B/e2ec639bc07fd580a580958ebcdde388/deliver-value.png',
      },
    ],
  },
  [recruiterKeys.chro]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/251oVwfw3EBYvxf9OVhsGR/d96d41f3f298dcdde2a4f6b85d58d014/CHRO_hero.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/4SitfjV555icoy1Xyt36VQ/903323064a88a1b2091eb7c5b5ddb8a1/CHRO-icon.png',
    heading: ['Phenom for', { highlight: ' CHROs' }],
    description:
      'Fuel business growth by empowering those who make it great — with exceptional experiences.',
    sectionText: [
      'You need to',
      { highlight: 'attract and grow' },
      "productive people. But they're hard to find, and many are considering a move.",
    ],
    featureText:
      'Find and keep the best with end-to-end talent experience management.',
    accordion: [
      {
        title: 'Find Great Candidates, Fast',
        description:
          'Equip TA and hiring managers with a unified platform for the discovery, engagement, screening, scheduling, and hiring of candidates. Reduce cost and time to hire while supporting strategic decision making with AI and automation.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/4arbxiZnVc0TDEDYQlqZZJ/a90ebea5e19069bbf526be3fe9706274/Interview_Management.png',
      },
      {
        title: 'Upskill and Evolve Employees',
        description:
          "Provide your TM team with the resources required to engage employees, stretch their abilities, and carve out purposeful roles and fulfilling careers. Facilitate meaningful connections with mentors and illuminate gigs to help them gear up for what's next.",
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/63qIZ6tWhMhmq1EQz42WUc/414605f50d2397888f833ce5e363a3a0/Learning___Development.png',
      },
      {
        title: 'Reduce Resignations',
        description:
          "Provide great experiences and in turn retain talent. Empower people to feel that they're part of something, know that they have the resources needed to be successful, and see they're surrounded by an array of people with diverse perspectives.",
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/1ggGtRyxGx07pmFVmLelb2/57d3f864ff5b81fee20c546b41e584ce/ERG_View.png',
      },
    ],
  },
  [recruiterKeys.talentManagement]: {
    image:
      'https://images.ctfassets.net/0d3i1kfsuaq3/3aMmMY4tGqvSTGR5m9jVLi/213040970686a1f7d86ff1ce44d86e4e/Talent_management_1.webp',
    thumbnailImg:
      'https://images.ctfassets.net/0d3i1kfsuaq3/5UjSNMFERofWK3r9LqQuoK/1b282fcb5974f87bd36f16bfa94443a9/talent-management-icon.png',
    heading: ['Phenom for', { highlight: ' Talent Management' }],
    description:
      'Facilitate productive and purposeful career paths — with precision.',
    sectionText: [
      "You're racing to",
      { highlight: 'engage, evolve, and retain' },
      'your people as turnover reaches unprecedented rates.',
    ],
    featureText:
      'Empower your employees to grow, fill critical skill gaps, and feel connected.',
    accordion: [
      {
        title: 'Know Your Team Better',
        description:
          'Understand the skills and interests of your employees. Get a better view into gaps that must be filled at the individual and enterprise level.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/21FVGrenMdnlwhgwlEcL5I/5459da17041728abbcdf21933af15fcf/Employee_Profiles_EX.png',
      },
      {
        title: 'Empower Your Employees',
        description:
          'Provide a diverse, inclusive, and supportive environment that enables your employees to bring their whole selves to work.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/1ggGtRyxGx07pmFVmLelb2/57d3f864ff5b81fee20c546b41e584ce/ERG_View.png',
      },
      {
        title: 'Develop and Retain Top Talent',
        description:
          'Provide a framework for long-term growth and internal mobility by visualizing career paths and providing opportunities to upskill.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/7sfKM4rOLmtEq53GvB2E4N/918ed24f5e4982660e74673b4fd01268/Career_Development.png',
      },
      {
        title: 'Grow Your Talent Network',
        description:
          'Nurture employee career development, skills, and relationships to improve employee satisfaction and success.',
        btnText: 'Learn More >',
        image:
          'https://images.ctfassets.net/0d3i1kfsuaq3/6GKzoiMpRZLzPnfMZ3qHeQ/200628f1d17974b51619bcdb02a6756a/Career_Pathing.png',
      },
    ],
  },
};



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

