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
            "Taking part in the 30 Days UI Challenge helped me build confidence and develop a routine around design. The variety of tasks kept things exciting, and I was able to expand my portfolio with projects I’m really proud of. It’s an excellent learning experience!"
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

export const typographyTags = ['All', 'Serif', 'Sans Serif', 'Display', 'Monospace'];

export const typographyIndustryTags = ['All', 'Technology', 'Fashion', 'Health & Wellness', 'Travel & Tourism'];

export const TypographyData = [
    {
        id: 1,
        title: 'Quiny',
        style: 'Serif',
        industry: ['Technology'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/a149/c7e2/e03ad0a266ee01843d7e805ac10d93dc?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9xnZhU1shaaRXGCQXB1KmM2~gUaECS9tux8M1KVseWGXbG4-8rv8Oj-iWgOemE6~YUFls9G9BpJszvfnQotqgp5o9pTRnN2IBiPjwXJjH3EGThbY27uqBzA0orb-W1c0th1LNTzEe6Intd1XFvtgrXHG8IwRiKU8r6AY3frPa0c65AszOPvEn1fAd4-0IdAVe~AguIjXPEQ~kZE7M0SJw~egsdO-~kznNoNlKOcEP-57bxibhb3C2fu0hx7BKqhF98HKuUXBDm7X~atMIlvv~6wbj0k1CnK32xTpjvrfScE~mVQxx-Lj1MYLBPVbRTPSLUdMFh0zAULAMOkCzZp3g__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com',
        desc: 'Nikea is a free sans-serif condensed font made perfect for branding designs, titles, headings, and packaging. It has a good balance that mainly comes from the uniform thickness along most of its letters. The typeface is 100% free to download and use in personal and commercial projects at the author’s website. Published by Limitype, the package includes includes uppercase letters, special characters, and numbers.'
    },
    {
        id: 2,
        title: 'Remind',
        style: 'Serif',
        industry: ['Technology', 'Fashion'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/7f43/1baa/60780cc4a47f4d32375ca169a3763c9d?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmH59lKXlcy812Qhv3KJxQXpKzqfTBOERtgUkfzqvAUCyAn3k7CkGBSCL4a53Kail6-D-l6jBR4V0z7NffUz7qzQfoD9Bnp939vPtpEeDzWYf5HpoxE7tuZ~PnNokWrlSoibxeroG3J7UIlMmvUB6qCyhd6dF5scgj6TUlOZ6JV9CoCOT8KnLWIwqFxxfFAWJIgeW0zAS4ps12amP-2JLFtk~WJ6xN7NIz~S5CNiILWlByfcIaXaA-fvfqsvORy5WrrdorthsABEi6S1oM31lRbn-HkjhjAv~hLo9uKwefg65wffeSUJMM9sL1xs952Iq3LGUTVKaIbBMuZgC~CYQA__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com',
        desc: 'Nikea is a free sans-serif condensed font made perfect for branding designs, titles, headings, and packaging. It has a good balance that mainly comes from the uniform thickness along most of its letters. The typeface is 100% free to download and use in personal and commercial projects at the author’s website. Published by Limitype, the package includes includes uppercase letters, special characters, and numbers.'
    },
    {
        id: 3,
        title: 'Nikea',
        style: 'Sans Serif',
        industry: ['Fashion', 'Health & Wellness'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/a149/c7e2/e03ad0a266ee01843d7e805ac10d93dc?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9xnZhU1shaaRXGCQXB1KmM2~gUaECS9tux8M1KVseWGXbG4-8rv8Oj-iWgOemE6~YUFls9G9BpJszvfnQotqgp5o9pTRnN2IBiPjwXJjH3EGThbY27uqBzA0orb-W1c0th1LNTzEe6Intd1XFvtgrXHG8IwRiKU8r6AY3frPa0c65AszOPvEn1fAd4-0IdAVe~AguIjXPEQ~kZE7M0SJw~egsdO-~kznNoNlKOcEP-57bxibhb3C2fu0hx7BKqhF98HKuUXBDm7X~atMIlvv~6wbj0k1CnK32xTpjvrfScE~mVQxx-Lj1MYLBPVbRTPSLUdMFh0zAULAMOkCzZp3g__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com'
    },
    {
        id: 4,
        title: 'Neue Machina',
        style: 'Monospace',
        industry: ['Technology', 'Travel & Tourism'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/75ad/1849/e19c2d99551d412e1fc0907de87e57ab?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21H~2zqT49bAnlemaUrFry4FM7BouzeYCae-hJ4pzjHCwQklKedDU1y~FmRINGl0b2TgJawdtXma~MwG0ZL8ZychL3IxbRp24xb1LROrd3el9htWdNBCkcwWECSjCC~ax80FXnmRJQWosbkrY0U05UerVe3VM7LON6wf3nkgUETgVxzB9kf7shVlThVlfZm6pnBuRzPDk-GX3-yh9Ku3UARWDpzn0VCYhio1rbgrS7Pe4JDp-lqa9WUSW9TVvvEXlyl1p5xN32eQz06FoV7W71MeGvi46RISpB0VcTTzMoTBc4oyrfnOG2J5F4SH5yQmSHSb~EIRW6lzBes2PTjrA__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com',
        desc: 'Nikea is a free sans-serif condensed font made perfect for branding designs, titles, headings, and packaging. It has a good balance that mainly comes from the uniform thickness along most of its letters. The typeface is 100% free to download and use in personal and commercial projects at the author’s website. Published by Limitype, the package includes includes uppercase letters, special characters, and numbers.'
    },
    {
        id: 5,
        title: 'Reiswar',
        style: 'Display',
        industry: ['Technology'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/2c3a/2634/1e4a297ecbd19982adf11ac8bf1a0ee5?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsTPJyczEBoHdLaxTPbkv3HuPfbvNLg1OFlu6dWnSV~bD1cRV1gmrxo8c8XWZN5ZzCAHu~odr~vrzitdhEBrNJCJ4Jycxd2w1yI2~XW3eqGiwFUo5hGFJp~36uNJee~qkawGxdvm8aY4M8oG2O0jwakuNwClRm2vLG4EIRp5WCEJ2~t1IOFU3ZTKiamHv8mBVdlU0mdWH7WMQL44b-2a0rklFmip2f8fDXcqdGxusH37rZsllqlVgBINP3Z63GlJRLTcrcH7VetsplLEbOiqbob1KJBsMhxXNtA7~q36WmdX6rxroLy8y1-CBc73SAkja8VOKoArWf8AF8Ds5RMAvQ__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com'
    },
    {
        id: 6,
        title: 'Neue Machina',
        style: 'Monospace',
        industry: ['Technology', 'Travel & Tourism'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/75ad/1849/e19c2d99551d412e1fc0907de87e57ab?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21H~2zqT49bAnlemaUrFry4FM7BouzeYCae-hJ4pzjHCwQklKedDU1y~FmRINGl0b2TgJawdtXma~MwG0ZL8ZychL3IxbRp24xb1LROrd3el9htWdNBCkcwWECSjCC~ax80FXnmRJQWosbkrY0U05UerVe3VM7LON6wf3nkgUETgVxzB9kf7shVlThVlfZm6pnBuRzPDk-GX3-yh9Ku3UARWDpzn0VCYhio1rbgrS7Pe4JDp-lqa9WUSW9TVvvEXlyl1p5xN32eQz06FoV7W71MeGvi46RISpB0VcTTzMoTBc4oyrfnOG2J5F4SH5yQmSHSb~EIRW6lzBes2PTjrA__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com'
    },
    {
        id: 7,
        title: 'Reiswar',
        style: 'Display',
        industry: ['Technology'],
        imgSrc: 'https://s3-alpha-sig.figma.com/img/2c3a/2634/1e4a297ecbd19982adf11ac8bf1a0ee5?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsTPJyczEBoHdLaxTPbkv3HuPfbvNLg1OFlu6dWnSV~bD1cRV1gmrxo8c8XWZN5ZzCAHu~odr~vrzitdhEBrNJCJ4Jycxd2w1yI2~XW3eqGiwFUo5hGFJp~36uNJee~qkawGxdvm8aY4M8oG2O0jwakuNwClRm2vLG4EIRp5WCEJ2~t1IOFU3ZTKiamHv8mBVdlU0mdWH7WMQL44b-2a0rklFmip2f8fDXcqdGxusH37rZsllqlVgBINP3Z63GlJRLTcrcH7VetsplLEbOiqbob1KJBsMhxXNtA7~q36WmdX6rxroLy8y1-CBc73SAkja8VOKoArWf8AF8Ds5RMAvQ__',
        format: ['OTF', 'TTF'],
        downloadLinK: 'https://google.com'
    }
];

export const ColorTags = ['All', 'Pastel', 'Vintage', 'Retro', 'Gold'];

export const ColorData = [
    {
        id: 1,
        type: 'Pastel',
        colorCodes: ['287094', 'D4D4CE', 'F6F6F6', '023246']
    },
    {
        id: 2,
        type: 'Pastel',
        colorCodes: ['Fddb88', '78d1c4', '148b9c', 'Fd7899']
    },
    {
        id: 3,
        type: 'Vintage',
        colorCodes: ['f4f3e0', 'd7cbb5', 'a6a89a', '89523d']
    },
    {
        id: 4,
        type: 'Retro',
        colorCodes: ['ffc567', 'fb7da8', 'fd5a46', '552cb7']
    },
    {
        id: 5,
        type: 'Pastel',
        colorCodes: ['C7D9E5', 'D4D4CE', 'F6F6F6', '023246']
    },
    {
        id: 6,
        type: 'Vintage',
        colorCodes: ['287094', 'D4D4CE', 'F6F6F6', '023246']
    },
    {
        id: 7,
        type: 'Retro',
        colorCodes: ['ffc567', 'fb7da8', 'fd5a46', '552cb7']
    },
    {
        id: 8,
        type: 'Gold',
        colorCodes: ['f4f3e0', 'd7cbb5', 'a6a89a', '89523d']
    }
];
