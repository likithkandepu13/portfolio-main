import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    pricewise,
    react,
    redux,
    snapgram,
    tailwindcss,
    threads,
    typescript,
    postgre
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "mongodb",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "express",
        type: "Frontend",
    },

    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: postgre,
        name: "POstgresql",
        type: "Database",
    },
 
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "React.js Experience",
        company_name: "DestinEdge Tours (Startup) ",
        icon: react,
        iconBg: "rgba(0, 0,0, 0.7)",
        date: "Frontend Development and Co-Founder",
        points: [
            " Leading the development of DestinEdge, an Online Travel Agency (OTA) focused on enhancing travel convenience for all",
            " Developing a user-centric website using the MERN stack, offering a diverse range of thoughtfully curated travel packages and assigning locally (offline)",
            " Troubleshooting and debugging issues to improve website performance by 20%. Implementing new features, resulting in a 75% increase in user engagement.(currently working in offline successfully)",
            " Our mission is to provide seamless travel experiences tailored to individual preferences, ensuring satisfaction for all travelers",
        ],
    },
    
    // {
    //     title: "Django rest Framework",
    //     company_name: "python",
    //     icon: rest,
    //     iconBg: "#b7e4c7",
    //     date: "Api Development",
    //     points: [
    //         "As django rest framework is the next thing to learn after Django I've worked on it ",
    //         "Practised it very well by creating many apis and learnt to use them in frontend(react).",
    //         "Still working to build on projects that showcases my skills and solve realworld problems",
    //     ],
    // },
    {
        title: "Full stack Development",
        company_name: "Online Donation System",
        icon: react,
        iconBg: "#a2d2ff",
        date: "SDP Hackathon",
        points: [
            "Developed and implemented an efficient online donation management system using the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by HTML and CSS, integrated with a secure payment gateway.",
                " Simplified donation procedures for users, fostering seamless contributions and requests. Additionally, documented system architecture, workflows.",
                " APIs to promote effective team collaboration and provide a reference for future enhancements."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/likithkandepu13',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/likith-kandepu-05287a247/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Attendance Calculator for University Students',
        description: 'Designed and developed a user-friendly React application aimed at optimizing student attendance management within KL University. Developed a React-based interface utilizing hooks to calculate attendance percentages, monitor potential decreases, and track attendance patterns in accordance with the LTPS structure.This tool empowers students to manage their attendance proactively, reducing the risk of detainment.',
        link: 'https://github.com/likithkandepu13/attendance',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Youtube Clone(React)',
        description: 'Created an HTML and CSS replica of YouTube, during which I learned everything from the basics to advanced techniques.',
        link: 'https://github.com/likithkandepu13/cssmadeeasy',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Amazon UI clone(React)',
    //     description: 'Designed and built a UI similar as Amazon UI where admin can add products and users can view and add them to their cart',
    //     link: '',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Online Donation System',
        description: 'Developed and implemented an efficient online donation management system using the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by HTML and CSS, integrated with a secure payment gateway',
        link: 'https://github.com/likithkandepu13/online-donation-system',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'This Portfolio Website',
        description: 'This is one of the coolest website that i have ever build. This is possible using Three js and React js',
        link: 'https://github.com/likithkandepu13/portfolio',
    },

];