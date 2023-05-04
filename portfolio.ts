import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Navod Amarakoon',
  title: "Hi all, I'm Navod",
  description:"MAKE it WORK, MAKE it RIGHT, MAKE it FAST is my life motto, and as a Full Stack web developer experienced in Strapi, React.js, Next.js, Python, AWS, and game development using Unity and Unreal Engine, I am driven to pursue excellence and deliver exceptional results.",
  resumeLink:
    'https://drive.google.com/file/d/1pKlIiQLl1kHmwhm8UbGcs-3Io_hEygsd/view?usp=share_link',
};

export const openSource = {
  githubUserName: 'nexzanavod',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/navod-amarakoon/',
  github: 'https://github.com/nexzanavod',
  instagram: 'https://www.instagram.com/nexza_/',
  facebook: 'https://www.facebook.com/navod.amarakoon/',
  twitter: 'https://twitter.com/nexzanavod',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Strapi & Strapi REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Strapi',
          fontAwesomeClassName: 'logos:strapi-icon',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Google Cloud',
          fontAwesomeClassName: 'logos:google-cloud',
        },
      ],
    },
    {
      title: 'Game Development',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡  Experienced in working with both Unity and Unreal game engines.'
        ),
        emoji(
          '⚡ Developed 2D and 3D games, including game mechanics, level design, animations, and visual effects'
        ),
        emoji(
          '⚡ Knowledgeable about the game development pipeline and collaborated with artists, designers, and other developers to create engaging games.'
        ),
        emoji('⚡ Proficient in C#, C++, and JavaScript'),
        
      ],
      softwareSkills: [
        {
          skillName: 'Unreal',
          fontAwesomeClassName: 'logos:unrealengine',
        },
        {
          skillName: 'Unity',
          fontAwesomeClassName: 'devicon:unity-wordmark',
        },
        {
          skillName: 'webgl',
          fontAwesomeClassName: 'simple-icons:webgl',
        },
        {
          skillName: 'Phaser',
          fontAwesomeClassName: 'emojione:video-game',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
  {
    Stack: 'Game development',
    progressPercentage: '65',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Plymouth University',
    subHeader: 'A Bachelor of Software Engineering Honours',
    duration: 'September 2019 - April 2021',
    desc: '',
    // grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: 'G.C.E O/L & A/L',
    subHeader: 'MATHS STREAM',
    duration: 'September 2004 - April 2017',
    desc: '',
    // grade: 'Grade A',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer(Fullstack Developer)',
    company: 'DigitalX (Pvt) Ltd.',
    companyLogo: 'https://i.ibb.co/D4yLBT6/download-1.jpg',
    date: 'Apr 2023 – Present',
    desc: 'I possess a broad range of technical skills required to handle both front-end and back-end development tasks. I have experience in programming languages, database management, and user interface design, allowing me to work on software projects from planning to deployment and maintenance. My proficiency in popular technologies such as React.js, Angular, Node.js, Python, and SQL enables me to develop complete web applications or software solutions that meet client needs. I am a problem solver who enjoys adapting to new challenges and keeping up with the latest trends in technology. ',
  },
  {
    role: 'Associate Software Engineer',
    company: 'DigitalX (Pvt) Ltd.',
    companyLogo: 'https://i.ibb.co/D4yLBT6/download-1.jpg',
    date: 'Sep 2021 – Apr 2023',
    desc: 'As an Associate Software Engineer, I have gained valuable experience in the field of software development through my work on various projects. I have been involved in designing, coding, testing, and debugging software applications, as well as collaborating with cross-functional teams to deliver high-quality software solutions.During my time as an Associate Software Engineer, I have honed my programming skills in react js,node js,java, spring-boot etc, and have gained expertise in front-end and back-end development, database management, etc. I have also been involved in troubleshooting and resolving software defects, as well as continuously improving code quality and performance.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Freelancer',
    company: '',
    companyLogo: 'https://i.ibb.co/tm7008Q/Adobe-Stock-260205205ed.jpg',
    date: 'Sept 2019 - Present',
    desc: 'As a freelancer, I am a self-employed professional who offers services to clients on a project-by-project basis. My work typically falls within the creative industries, including writing, graphic design, web development, and marketing. I value the flexibility of choosing my own projects and clients, allowing me to work on projects that I am passionate about and setting my own schedule. Being a freelancer also means that I have the freedom to work from anywhere in the world, providing I have access to the necessary tools and technology. To be successful, I prioritize strong communication skills and effective time management to deliver projects on time and to a high standard. Building a robust portfolio and maintaining positive relationships with clients are essential elements of building a successful freelance career.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Polipedia (Australia)',
    desc: 'Polipedia is a Melbourne-based political data start-up that will disrupt the way Australians engage with politics and politicians.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://polipedia.com.au/',

  },
  {
    name: 'Chocolate (Australia)',
    desc: 'Social listening platform',
    link: 'https://polipedia.com.au/profile/Anthony_Albanese/insights',
  },
  {
    name: 'Lucky1(SriLanka)',
    desc: 'Lucky1.lk is an online ticket purchasing service offering the lotteries of National Lotteries Board (NLB) of Sri Lanka. This safe and secure service is available to Sri Lankans living all around the world on any time of the day.',
    link: 'https://lucky1.lk/',
  },
  {
    name: 'EGET System (Thailand)',
    desc: 'A Solar Panel Count System is a technology solution that enables users to monitor and track the number of solar panels installed on a particular rooftop or solar farm. The system typically uses a combination of sensors and software to collect data on the number and location of solar panels, as well as information on their performance and energy production.  ',
    // github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
  {
    name: 'MycricQ (Srilanka)',
    desc: 'A Q and A cricket gaming app is an interactive mobile application designed to test users knowledge of cricket trivia. The app typically features a series of multiple-choice questions related to the sport of cricket, ranging from the basics to more obscure facts and figures. ',
    // github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Navod Amarakoon',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Navod Amarakoon',
  image: 'https://i.ibb.co/mBzyyCY/1624117535995.jpg',
  // url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Navod',
    'Navod Amarakoon',
    'Nexza',
    'NexZa',
    'Portfolio',
    'Navod Portfolio ',
    'Navod Amarakoon Portfolio',
  ],
};
