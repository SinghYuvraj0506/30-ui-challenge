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
        image: 'https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b'
    },
    {
        id: 6,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg'
    },
    {
        id: 7,
        image: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg'
    }
];

export const testimonialContent = [
    {
        username: 'Sunny Prakash',
        designation: 'Product Manager',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            'The 30 Days UI Challenge was a game-changer for me! Each day’s challenge pushed me out of my comfort zone, allowing me to sharpen my design skills while discovering new techniques. I highly recommend it to anyone looking to level up their UI design!'
    },
    {
        username: 'Shivam Shah',
        designation: 'UI/UX Designer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            "This challenge gave me the perfect blend of creativity and structure to improve my UI skills. The daily tasks were fun yet challenging, and by the end, I could clearly see how much my designs had improved. If you're looking to grow as a designer, this is the way to go!"
    },
    {
        username: 'Yuvraj Singh',
        designation: 'Developer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg',
        testimonial:
            'Taking part in the 30 Days UI Challenge helped me build confidence and develop a routine around design. The variety of tasks kept things exciting, and I was able to expand my portfolio with projects I’m really proud of. It’s an excellent learning experience!'
    }
];

export const socialLinks = [
    {
        icon: instaIcon,
        link: '/'
    },
    {
        icon: xIcon,
        link: '/'
    }
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
