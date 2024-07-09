import image1 from '../assets/images/how/image1.png';
import image2 from '../assets/images/how/image2.png';
import image3 from '../assets/images/how/image3.png';
import image4 from '../assets/images/how/image4.png';


import icon1 from "../assets/svg/path.svg"
import icon2 from "../assets/svg/bezier.svg"
import icon3 from "../assets/svg/user.svg"
import icon4 from "../assets/svg/clipboard.svg"
import instaIcon from "../assets/svg/Instagram.svg"
import xIcon from "../assets/svg/X.svg"

export const navLinks = [
    { name: 'Home', link: '/#' },
    { name: 'About', link: '#about' },
    { name: "How it work's", link: '#how' }
];

export const featuresContent = [
    {
        icon: icon1,
        head: 'Daily practice tasks',
        desc: 'Challenge Yourself with New Design Exercises Every Day.'
    },
    {
        icon: icon2,
        head: 'Improve design skills',
        desc: 'Refine Your Techniques and Master the Art of UI Design.'
    },
    {
        icon: icon3,
        head: 'Join a community of designers',
        desc: 'Connect, Collaborate, and Grow with Fellow Design Enthusiasts.'
    },
    {
        icon: icon4,
        head: 'Enhance your design portfolio',
        desc: 'Build a Stunning Portfolio with Diverse and Creative Projects.'
    }
];

export const howItWorksContent = [
    {
        id: '01',
        title: 'Subscribe to Our Platform',
        image: image1,
        desc: 'Sign up on our platform to join the challenge. By subscribing, you’ll receive daily emails with everything you need to get started on each task.'
    },
    {
        id: '02',
        title: 'Receive Daily Challenges',
        image: image2,
        desc: 'Each day, you’ll receive a new challenge, including:',
        points: [
            { head: 'Problem Statement', desc: 'A detailed description of the design problem to solve.' },
            { head: 'Wireframe', desc: 'A basic wireframe to guide your design process.' },
            { head: 'Design Tips', desc: 'Expert advice and tips to help you tackle the challenge.' }
        ]
    },
    {
        id: '03',
        title: 'Share Your Work',
        image: image3,
        desc: 'Once your design is ready, share it on social media(Instagram or dribbble) using our dedicated hashtag #UIDesignChallenge. This allows you to showcase your work, get feedback, and engage with the community.'
    },
    {
        id: '04',
        title: 'Become Better Designer Day by Day',
        image: image4,
        desc: 'Each week, our team will review all submissions and select one outstanding design as the "Design of the Week" based on social media likes and reach. The design with the most engagement (likes, shares, and comments) will be featured.'
    }
];

export const communityContent = [
    {
        id: 1,
        image: ''
    },
    {
        id: 2,
        image: ''
    },
    {
        id: 3,
        image: ''
    },
    {
        id: 5,
        image: ''
    },
    {
        id: 6,
        image: ''
    },
    {
        id: 7,
        image: ''
    }
];

export const testimonialContent = [
    {
        username: 'Yuvraj Singh',
        designation: 'Developer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit anim id est laborum.”'
    },
    {
        username: 'Yuvraj Singh',
        designation: 'Developer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit anim id est laborum.”'
    },
    {
        username: 'Yuvraj Singh',
        designation: 'Developer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit anim id est laborum.”'
    },
];


export const socialLinks = [
    {
        icon:instaIcon,
        link:"/"
    },
    {
        icon:xIcon,
        link:"/"
    },
]


export const otherWebsiteLinks = [
    {
        name:"Privacy Policy",
        link:"/"
    },
    {
        name:"Terms of Service",
        link:"/"
    },
    {
        name:"Cookies Settings",
        link:"/"
    },
]