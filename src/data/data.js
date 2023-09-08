  import javascript from "../images/tech/javascript.png"
  // import html from "../images/tech/html.png"
  import css from "../images/tech/css2.png"
  import reactjs from "../images/tech/reactjs.png"
  import redux from "../images/tech/redux.png"
  import tailwind from "../images/tech/tailwind.png"
  import nodejs from "../images/tech/nodejs.png"
  import mongodb from "../images/tech/mongodb.png"
  import git from "../images/tech/git.png"
  // import figma from "../images/tech/figma.png"
  import threejs from "../images/tech/threejs.svg"
  //import brplast from "../images/brplast.png"
  import resum_pic from "../images/resum_pic.png"
  import imageGenerator from "../images/imageGenerator.png"
  //import giphyGallery from "../images/giphy-gallery.png"
  import bookmy from "../images/bookmy.png"
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      github: "Github",
      link: "https://github.com/hemant610/"
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
    },
    {
      title: "React JS Developer",
    },
    {
      title: "Backend Developer",
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
    //   icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Resume Builder",
      description:
        "Resume@builder is a web application where anyone can create resume with ease and choose from different available templates It has three tabs : 1) Resume Templates (Home Page) & 2)Resumes (Saved Resumes) & 3) About us Set profile picture in the resume. Before downloading we have a preview option to view your resume. You can save resumes to the local hard drive. Saved resumes can be deleted as well as modified by the user.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: resum_pic,
       source_code_link: "https://github.com/hemant610/Resume_Builder/",
      website_link: "https://resumebuild610.netlify.app/",
    },
    {
      name: "BookMyShow",
      description:
        "This is a demo of real bookmyshow, where the user can book a movie with specified seats at a specified slot and get a confirmation that, wheteher booking was sucessful or not. The movie booked by the user will be stored in database and is retrived and shown to the user.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bookmy,
      source_code_link: "https://github.com/Hemant610/BookMyShow",
      website_link: "https://bookmyshowticket.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  