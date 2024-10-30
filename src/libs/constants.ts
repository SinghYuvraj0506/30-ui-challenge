import image1 from '../assets/images/how/image1.webp';
import image2 from '../assets/images/how/image2.webp';
import image3 from '../assets/images/how/image3.webp';
import image4 from '../assets/images/how/image4.webp';

import icon1 from '../assets/svg/path.svg';
import icon2 from '../assets/svg/bezier.svg';
import icon3 from '../assets/svg/user.svg';
import icon4 from '../assets/svg/clipboard.svg';
import icon5 from '../assets/svg/boxRecieve.svg';
import icon6 from '../assets/svg/tagUser.svg';
import instaIcon from '../assets/svg/Instagram.svg';
import xIcon from '../assets/svg/X.svg';
import discordIcon from '../assets/svg/discord.svg';

import img01 from "../assets/images/testimonial/sunny.png"
import img02 from "../assets/images/testimonial/shivam.png"
import img03 from "../assets/images/testimonial/yuvraj.png"

export const navLinks = [
    { name: 'Typography', link: '/typography' },
    { name: 'Color Palette', link: '/color-palette' }
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx2eQMLqekkgeCVgxe6SWgby3nkP-CDCrDA&s'
    },
    {
        id: 2,
        image: 'https://cdn.mos.cms.futurecdn.net/MPQhfG9ka9J5Ju2rydDwEY.jpg'
    },
    {
        id: 3,
        image: 'https://semji.com/wp-content/uploads/2020/07/L-histoire-du-logo-Google-1-700x243.png'
    },
    {
        id: 5,
        image: 'https://cdn.logojoy.com/wp-content/uploads/20231031154601/2014-netflix-logo-600x319.png'
    },
    {
        id: 6,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg'
    },
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpxxOwmSh275knZ3GIVX7_bagb6boaxfAhw3GXuW9285F6K_HmzqsJYMzk3o0mLmCxyA&usqp=CAU'
    }
];

export const testimonialContent = [
    {
        username: 'Sunny Prakash',
        designation: 'Entrepreneur',
        image: img01,
        testimonial:
            'Design Daily has been a game-changer! The daily prompts and wireframes have pushed me to experiment and refine my skills. After 30 days, I feel more confident tackling real projects, and my portfolio has never looked better!'
    },
    {
        username: 'Shivam Shah',
        designation: 'UI Designer',
        image: img02,
        testimonial:
            "As a designer, staying creatively active can be challenging. Design Daily makes it easy with structured, bite-sized challenges every day. The wireframes are inspiring, and I love how it fits into my daily routine without overwhelming me!"
    },
    {
        username: 'Yuvraj Singh',
        designation: 'Software Engine er',
        image: img03,
        testimonial:
            'Design Daily helped me build consistency and develop new design techniques. The prompts are relevant and practical, which has helped me grow as a designer. Highly recommend it to anyone looking to boost their design skills daily!'
    }
];

export const socialLinks = [
    {
        icon: instaIcon,
        link: 'https://www.instagram.com/designdailycoin'
    },
    {
        icon: xIcon,
        link: 'https://x.com/designdailycoin'
    },
    {
        icon: discordIcon,
        link: 'https://discord.gg/4QMb8pAz'
    },
];

export const otherWebsiteLinks = [
    {
        name: 'Privacy Policy',
        link: '/'
    },
    {
        name: 'Terms of Service',
        link: '/'
    },
    {
        name: 'Cookies Settings',
        link: '/'
    }
];

export const successDialogContent = [
    {
        icon: icon5,
        content: 'Open your Email Inbox and check our welcome Email'
    },
    {
        icon: icon2,
        content: 'And make sure you have your design software ready'
    },
    {
        icon: icon6,
        content: 'Tag us on social media to stay featured.'
    }
];

// typography ------------------------------------

export const typographyTags = ['All', 'Serif', 'Sans Serif', 'Display', 'Monospaced', 'Monoline', 'Techno', 'Geometric','Modern', 'Script', 'Handwritten', 'Handmade', 'Brush', 'Slab Serif', 'Vintage', 'Playful', 'Humanist', 'Condensed', 'Retro'];

export const typographyIndustryTags = ['All', 'Technology', 'Entertainment', 'Fashion', 'Home Decor', 'Health & Wellness', 'Travel & Tourism', 'Finance', 'Wellness Education', 'Education', 'Food & Beverage', 'Real Estate', ''];

export type TypographyData = {
    _id: string;
    fontName: string;
    fontType: string;
    industry: string;
    imgSrc: string;
    format: string;
    srcLink: string;
    desc: string;
};

export type ColorData = {
    _id: string;
    type: string;
    colorCodes: string[];
};

export const ColorTags = ['All', 'Pastel', 'Vintage', 'Retro', 'Light','Neon','Summer','Warm','Dark','Monochromatic','Gradient'];
