import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  tripguide1,
  tripguide12,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "src/assets/backend.png",
    title: "CV",
    target: "_blank",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "BlockChain SmartContract Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "HTML, CSS, Javascript",
    company_name: "Eloin.in",
    links: "https://www.eloin.in/",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2020 - November 2022",
    points: [
      "Gained hands-on experience in developing, implementing, and maintaining internal websites.",
      "Assisted the technical and business staff with the design, development, implementation, and maintenance of new programs using-HTML, CSS, Javascript.",
      "Performed automated and manual tests to ensure the software created by developers is up to date and working seamlessly.",
      "PDetected and tracked software bugs and inconsistencies in the program.",
    ],
  },
  {
    title: "Adobe Photoshop, Adobe Illustrator, Solidity, BSC",
    company_name: "Abura Farm",
    links: "https://coinmarketcap.com/currencies/abura-farm/#About",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2021 - February 2022",
    points: [
      "Serve as a logo and graphic designer.",
      "Helped in  creating, maintaining and integrating the SmartContract with BSC BlockChain.",
    ],
  },
  {
    title: "Community Manager, Graphic Desiginer ",
    company_name: "Oxbul.tech",
    links: "https://oxbull.tech/",

    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - March 2022",
    points: [
      "Serve as a  graphic and Poster  designer.",
      "Managed Telegram community",
    ],
  },
  {
    title:
      "Build full website with Vite React, Nodejs, MongoDB, BlockChain Wallet",
    company_name: "AptosLauncher",
    links: "https://aptoslauncher.tech/",

    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed graphics, logo and website content, it uses binance API for live crypto price update.",
      "Developed features where users generate their image using prompt by AI technology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Token Website",
    description:
      "A web-based platform that allows users to know about the work of the company and there products.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SAMshashank/eloinupdate.github.io",
    source_code_link1: "https://www.eloin.in/",
  },
  {
    name: "AI Voice news website",
    description:
      "This app is useful for those user who have limited time to read news and they wanted to get update intently, This app is designed to give best user experience for getting updated to what going on in surrounding and world",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Alan Api",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    source_code_link1: "https://avnnews.netlify.app/",
  },
  {
    name: "Dynamic Crypto Token Website",
    description:
      "A web-based platform that allows users to know about the work of the company and there products.",
    tags: [
      {
        name: "Vite React",
        color: "blue-text-gradient",
      },
      {
        name: "firebass",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Binance Api",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SAMshashank/React-App-APTOSLAUNCHER",
    source_code_link1: "https://aptoslauncher.tech/",
  },
  {
    name: "AI Image Generator ",
    description:
      "Developed features where users generate their image using prompt by AI technology.",
    tags: [
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "Dalle-Api",
        color: "green-text-gradient",
      },
    ],
    image: tripguide12,
    source_code_link: "https://github.com/SAMshashank/dall-e",
    source_code_link1: "https://ai-nft-generator-beta.aptoslauncher.tech/",
  },
  {
    name: "My Crypto Token on BSC ",
    description:
      "A web-based platform that allows users to know about the work of the company and there products. To import my token past this contract address '0x8561d4ecfe2b03b953e42b3bb9317e58794f2ffb' decimal:2 and Token Symbol: SK ",

    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide1,
    source_code_link: "https://github.com/SAMshashank/TOKEN",
    source_code_link1:
      "https://testnet.bscscan.com/tx/0xb66092b6f4a2f6969871bfa4939094d10b16213f8b49d6e5b066f132e08bea4b",
  },
  {
    name: "My Protfolio website ",
    description:
      "Immerse myself in a captivating digital journey with Immersive Showcase, a cutting-edge portfolio website that seamlessly combines the power of Three.js and React to present an extraordinary visual experience.",

    tags: [
      {
        name: "Vite React",
        color: "blue-text-gradient",
      },
      {
        name: "Three js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Emailjs API",
        color: "green-text-gradient",
      },
    ],
    image: tripguide1,
    source_code_link: "https://github.com/SAMshashank/TOKEN",
    source_code_link1:
      "https://testnet.bscscan.com/tx/0xb66092b6f4a2f6969871bfa4939094d10b16213f8b49d6e5b066f132e08bea4b",
  },
];

export { services, technologies, experiences, testimonials, projects };
